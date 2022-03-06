using System;
using System.Collections.Generic;
using System.Linq;
using KeepMovinAPI.Domain;

namespace KeepMovinAPI.DAOs.Implementations
{
    public class SportDao : ISportDao
    {
        private readonly KeepMovinDbContext _context;

        public SportDao(KeepMovinDbContext context)
        {
            _context = context;
        }

        public void Add(Sport item)
        {
            throw new System.NotImplementedException();
        }

        public void Remove(Guid id)
        {
            throw new System.NotImplementedException();
        }

        public Sport Get(Guid id)
        {
            var query = _context.Sport.Find(id);
            return query;
        }
        
        public IEnumerable<Sport> GetByInput(string input)
        {
            var query = _context.Sport.Where(i => i.Name.ToLower().StartsWith(input.ToLower()));
            return query.ToList();
            
        }

        public IEnumerable<Sport> GetAll()
        {
            var query = _context.Sport.ToList().OrderBy(sport => sport.Name);
            return query;
        }
    }
}