using System.Collections.Generic;
using KeepMovinAPI.Domain;

namespace KeepMovinAPI.Repository
{
    public interface ISportRepository : IRepository<Sport>
    {
        public IEnumerable<Sport> GetByInput(string input);
        
    }
}