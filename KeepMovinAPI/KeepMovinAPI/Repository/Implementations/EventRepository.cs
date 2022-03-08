using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using KeepMovinAPI.Domain;
using KeepMovinAPI.Domain.Dtos;

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

        public IEnumerable<EventDto> GetFiltered([FromQuery] Filter filter)
        {
            var sports = _context.Sport.ToList();
            var events = _context.Event.ToList();
            var experiences = _context.ExperienceLevel.ToList();
            var types = _context.EventType.ToList();
            var locations = _context.Location.ToList();

            var joinedTables =
                from eventModel in events
                join sport in sports on eventModel.Sports.SportId equals sport.SportId
                join experience in experiences on eventModel.ExperienceLevel.ExperienceLevelId equals experience.ExperienceLevelId
                join type in types on eventModel.Type.TypeId equals type.TypeId
                join location in locations on eventModel.Location.LocationId equals location.LocationId
                select new EventDto()
                {
                    EventId = eventModel.EventId,
                    Name = eventModel.Name,
                    StartEvent = eventModel.StartEvent,
                    EndEvent = eventModel.StartEvent,
                    User = eventModel.User,
                    SportsSportId = eventModel.Sports.SportId,
                    ExperienceLevelId = eventModel.ExperienceLevel.ExperienceLevelId,
                    EventInfo = eventModel.EventInfo,
                    MaxParticipants = eventModel.MaxParticipants,
                    Status = eventModel.Status,
                    Price = eventModel.Price,
                    Currency = eventModel.Currency,
                    TypeId = eventModel.Type.TypeId,
                    LocationId = eventModel.Location.LocationId,
                };
            
            var query = joinedTables.Where(i => 
                i.Name.ToLower().StartsWith(filter.SearchPhrase.ToLower()) 
                && (i.Price >= filter.MinPrice 
                && i.Price <= filter.MaxPrice)
                && (i.MaxParticipants >= filter.MinParticipants 
                && i.MaxParticipants <= filter.MaxParticipants)
                && filter.Sports.Contains(i.SportsSportId)
                && filter.Type.Contains(i.TypeId)
                && filter.Experience.Contains(i.ExperienceLevelId));
            
            return query.ToList();
        }

        public IEnumerable<Event> GetAllByMonthAndYear(DateTime givenDate)
        {
            var query = _context.Event
                .Where(i => i.StartEvent.Month == givenDate.Month && i.StartEvent.Year == givenDate.Year).ToList();
            return query;
        }
    }
}