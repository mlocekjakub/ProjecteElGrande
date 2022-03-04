using System;
using System.Collections.Generic;
using System.Linq;
using KeepMovinAPI.Domain;
using Microsoft.EntityFrameworkCore;

namespace KeepMovinAPI.DAOs.Implementations
{
    public class TypeDao : ITypeDao
    {
        private readonly KeepMovinDbContext _context;
        public TypeDao(KeepMovinDbContext context)
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