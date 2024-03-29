﻿using System;
using System.Collections.Generic;
using System.Linq;
using KeepMovinAPI.Domain;
using BCryptNet = BCrypt.Net.BCrypt;


namespace KeepMovinAPI.Repository.Implementations

{
    public class UserRepository : IUserRepository
    {
        private readonly KeepMovinDbContext _context;

        public UserRepository(KeepMovinDbContext context)
        {
            _context = context;
        }

        public bool CheckIfUserExists(User user)
        {
            if (GetUserByEmail(user) == null)
                return false;
            return true;
        }

        public bool ComparePasswords(string passwordInput, string passwordDataBase)
        {

            return BCryptNet.Verify(passwordInput, passwordDataBase);
        }

        public bool CompareUsers(User dataBaseUser, User loginUser)
        {
           
            if (dataBaseUser == null)
                return false;
            if (dataBaseUser.Email != loginUser.Email)
                return false;
            if (!BCryptNet.Verify(loginUser.Password, dataBaseUser.Password))
                return false;
            return true;
        }

        public void Add(User user)
        {
            user.Password = BCryptNet.HashPassword(user.Password);
            _context.User.Add(user);
            _context.SaveChanges();
        }

        public User Get(Guid id)
        {
            var query = _context.User.Find(id);
            return query;
        }

        public IEnumerable<User> GetAll()
        {
            throw new NotImplementedException();
        }

        public void Remove(Guid id)
        {
            throw new NotImplementedException();
        }

        public User GetUserByEmail(User user)
        {
            var query = _context.User.Where(u => u.Email == user.Email);

            User user2 = query.FirstOrDefault();
            return user2;
        }

        public User GetUserByEmail(string email)
        {
            var query = _context.User.Where(u => u.Email == email);
            User user2 = query.FirstOrDefault();
            return user2;
        }

        public void UpdatePassword(User user,string newPassword)
        {
            user.Password = BCryptNet.HashPassword(newPassword);
            _context.User.Update(user);
            _context.SaveChanges();
        }

        
    }
}