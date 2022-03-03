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
        
        public void Add(EventType item)
        {
            throw new NotImplementedException();
        }

        public void Remove(int id)
        {
            throw new NotImplementedException();
        }

        public EventType Get(int id)
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