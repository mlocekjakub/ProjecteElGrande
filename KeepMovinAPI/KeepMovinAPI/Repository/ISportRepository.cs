using System.Collections.Generic;
using KeepMovinAPI.Domain;

namespace KeepMovinAPI.Repository
{
    public interface ISportDao : IDao<Sport>
    {
        public IEnumerable<Sport> GetByInput(string input);
        
    }
}