using System;
using System.Collections.Generic;
using System.Linq;
using KeepMovinAPI.Domain;

namespace KeepMovinAPI.Repository.Implementations
{
    public class ExperienceRepository : IExperienceRepository
    {
        private readonly KeepMovinDbContext _context;
        
        public ExperienceRepository(KeepMovinDbContext context)
        {
            _context = context;
        }
        
        public void Add(ExperienceLevel item)
        {
            throw new System.NotImplementedException();
        }

        public void Remove(Guid id)
        {
            throw new System.NotImplementedException();
        }

        public ExperienceLevel Get(Guid id)
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