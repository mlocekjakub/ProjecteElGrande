using System.Collections.Generic;
using KeepMovinAPI.Models;
using KeepMovinAPI.Domain;

namespace KeepMovinAPI.DAOs
{
    public interface ISportDao : IDao<Sport>
    {
        public IEnumerable<Sport> GetByInput(string input);
        
    }
}