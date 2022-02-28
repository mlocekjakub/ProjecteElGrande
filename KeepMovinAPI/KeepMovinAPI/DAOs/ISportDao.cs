using System.Collections.Generic;
using KeepMovinAPI.Models;

namespace KeepMovinAPI.DAOs
{
    public interface ISportDao : IDao<Sport>
    {
        public IEnumerable<Sport> GetByInput(string input);
        
    }
}