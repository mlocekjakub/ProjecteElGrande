using System.Collections.Generic;
using System.Linq;
using KeepMovinAPI.Models;

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

        public void Remove(int id)
        {
            throw new System.NotImplementedException();
        }

        public Sport Get(int id)
        {
            throw new System.NotImplementedException();
        }

        public IEnumerable<Sport> GetAll()
        {
            var query = _context.Sport.ToList();
            return query;
        }
    }
}