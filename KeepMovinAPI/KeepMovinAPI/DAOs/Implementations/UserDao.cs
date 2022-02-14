using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Runtime.Serialization;
using KeepMovinAPI.Models;
using KeepMovinAPI.DAOs;


namespace KeepMovinAPI.DAOs.Implementations
{
    public class UserDao : IUserDao
    {
        private readonly KeepMovinDbContext _context;

        public UserDao(KeepMovinDbContext context)
        {
            _context = context;
        }


        public void Add(User user)
        {
            using (_context)
            {
                _context.User.Add(user);             
                _context.SaveChanges();
            }
        }

        public User Get(int id)
        {
            using (_context)
            {
                var query = _context.User.Find(id);
                return query;
            }
        }
        public IEnumerable<User> GetAll()
        {
            throw new NotImplementedException();
        }

        public void Remove(int id)
        {
            throw new NotImplementedException();
        }

        public User GetUserByEmail(string email)
        {
            using (_context)
            {
                var query = _context.User.Find(email);
                return query;
            }
        }
    }
}
