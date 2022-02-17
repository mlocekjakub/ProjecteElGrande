using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Runtime.Serialization;
using KeepMovinAPI.Models;

namespace KeepMovinAPI.DAOs.Implementations
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

        public void Remove(int id)
        {
            throw new System.NotImplementedException();
        }

        public Event Get(int id)
        {
            using (_context)
            {
                var query = _context.Event.Find(id);
                // query.Include(events => events.Price);
                // context.Event.Find(8);
                return query;
            }
        }
        
        public IEnumerable<Event> GetAll()
        {
            var query = _context.Event.ToList();
            return query;
        }
    }
}