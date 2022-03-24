using System;
using System.Collections.Generic;
using System.Linq;
using KeepMovinAPI.Domain;

namespace KeepMovinAPI.Repository.Implementations

{
    public class TypeRepository : ITypeRepository
    {
        private readonly KeepMovinDbContext _context;
        public TypeRepository(KeepMovinDbContext context)
        {
            _context = context;
        }
        
        public void Add(EventType item)
        {
            throw new NotImplementedException();
        }

        public void Remove(Guid id)
        {
            throw new NotImplementedException();
        }

        public EventType Get(Guid id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<EventType> GetAll()
        {
            var query = _context.EventType.ToList();
            return query;
        }
    }
}