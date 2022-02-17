using System;
using System.Collections.Generic;
using System.Linq;
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

        public void Add(Price priceModel)
        {
            _context.Price.Add(priceModel);
            _context.SaveChanges();
        }

        public void Remove(int id)
        {
            throw new System.NotImplementedException();
        }

        public Price Get(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Price> GetAll()
        {
            var query = _context.Price.ToList();
            return query;
        }
    }
}