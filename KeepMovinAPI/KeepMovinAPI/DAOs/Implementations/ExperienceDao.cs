using System.Collections.Generic;
using System.Linq;
using KeepMovinAPI.Domain;

namespace KeepMovinAPI.DAOs.Implementations
{
    public class ExperienceDao : IExperienceDao
    {
        private readonly KeepMovinDbContext _context;
        
        public void Add(ExperienceLevel item)
        {
            throw new System.NotImplementedException();
        }

        public void Remove(int id)
        {
            throw new System.NotImplementedException();
        }

        public ExperienceLevel Get(int id)
        {
            throw new System.NotImplementedException();
        }

        public IEnumerable<ExperienceLevel> GetAll()
        {
            var query = _context.ExperienceLevel.ToList();
            return query;
        }
    }
}