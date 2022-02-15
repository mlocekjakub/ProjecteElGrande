using System.Collections.Generic;
using KeepMovinAPI.Models;

namespace KeepMovinAPI.DAOs.Implementations
{
    public class PriceDao : IPriceDao
    {
        private readonly KeepMovinDbContext _context;

        public PriceDao(KeepMovinDbContext context)
        {
            _context = context;
        }
        public void Add(Price item)
        {
            throw new System.NotImplementedException();
        }

        public void Remove(int id)
        {
            throw new System.NotImplementedException();
        }

        public Price Get(int id)
        {
            throw new System.NotImplementedException();
        }

        public IEnumerable<Price> GetAll()
        {
            throw new System.NotImplementedException();
        }
        
        public int AddPrice(Price item)
        {
            int id = _context.Price.Add(item).Entity.PriceId;
            _context.SaveChanges();
            return id;

        }
    }
}