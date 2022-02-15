using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Runtime.Serialization;
using KeepMovinAPI.Models;
using KeepMovinAPI.DAOs;
using BCryptNet = BCrypt.Net.BCrypt;


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
            user.Password = BCryptNet.HashPassword(user.Password);
            _context.User.Add(user);
            _context.SaveChanges();

        }

        public User Get(int id)
        {

            var query = _context.User.Find(id);
            return query;

        }
        public IEnumerable<User> GetAll()
        {
            throw new NotImplementedException();
        }

        public void Remove(int id)
        {
            throw new NotImplementedException();
        }

        public User GetUserByEmail(User user)
        {
            var query = _context.User.Where(u => u.Email == user.Email);
            User user2 = query.FirstOrDefault();
            return user2;

        }
    }
}
