using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using KeepMovinAPI.Domain;
using KeepMovinAPI.Domain.Dtos;
using Microsoft.EntityFrameworkCore;

namespace KeepMovinAPI.Repository.Implementations
{
    public class EventDao : IEventDao
    {
        private readonly KeepMovinDbContext _context;

        public EventDao(KeepMovinDbContext context)
        {
            _context = context;
        }

        public void Add(Event eventModel)
        {
            _context.Event.Add(eventModel);
            _context.SaveChanges();
        }

        public void Remove(Guid id)
        {
            throw new System.NotImplementedException();
        }

        public Event Get(Guid id)
        {
            var query = _context.Event.Find(id);
            return query;
        }

        public IEnumerable<Event> GetByInput(string input)
        {
            var query = _context.Event.Where(i => i.Name.ToLower().StartsWith(input.ToLower()));
            return query.ToList();
        }

        public IEnumerable<Event> GetAll()
        {
            return _context.Event.ToList();
        }

        public IEnumerable<Event> GetUsers(Guid user)
        {
            var query = _context.Event
                .Include(e => e.Users)
                .Where(u=>u.EventId.Equals(user)).ToList();
            return query;
        }

        public IEnumerable<Event> GetFiltered([FromQuery] Filter filter)
        {
            var joinedTables = _context.Event
                .Include(e => e.Location)
                .Include(e => e.Sports)
                .Include(e => e.Type)
                .Include(e => e.ExperienceLevel)
                .Where(i =>
                    i.Name.ToLower().StartsWith(filter.SearchPhrase.ToLower())
                    && (i.Price >= filter.MinPrice
                        && i.Price <= filter.MaxPrice)
                    && (i.MaxParticipants >= filter.MinParticipants
                        && i.MaxParticipants <= filter.MaxParticipants)
                    && filter.Sports.Contains(i.Sports.SportId)
                    && filter.Type.Contains(i.Type.TypeId)
                    && filter.Experience.Contains(i.ExperienceLevel.ExperienceLevelId)).ToList();

            return joinedTables;
        }

        public IEnumerable<Event> GetAllByDateRange(DateTime startDate, DateTime endDate)
        {
            var query = _context.Event
                .Where(i =>
                    i.StartEvent >= startDate
                    && i.StartEvent <= endDate
                    || i.EndEvent >= startDate
                ).ToList();
            return query;
        }
    }
}