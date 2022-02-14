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
            throw new NotImplementedException();
        }

        public User Get(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<User> GetAll()
        {
            throw new NotImplementedException();
        }

        public void Remove(int id)
        {
            throw new NotImplementedException();
        }
    }
}
