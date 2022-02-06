using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Runtime.Serialization;
using KeepMovinAPI.Models;

namespace KeepMovinAPI.DAOs.Implementations
{
    
    public class EventDao : IEventDao
    {
        private const string connectionString =
            "Server=DESKTOP-HIN6P6S\\MSSQLSERVER01;Database=KeepMovin;Trusted_Connection=True";
        private KeepMovinDbContext context = new KeepMovinDbContext(connectionString);

        public void Add(Event eventModel)
        {
            using (context)
            {
                context.Event.Add(eventModel);
                context.SaveChanges();
            }
        }

        public void Remove(int id)
        {
            throw new System.NotImplementedException();
        }

        public Event Get(int id)
        {
            using (context)
            {
                var query = context.Event.Where(e => e.EventId == id);
                return query.FirstOrDefault();
            }
        }

        public IEnumerable<Event> GetAll()
        {
            var query = context.Event.ToList();
            return query;
        }
    }
}