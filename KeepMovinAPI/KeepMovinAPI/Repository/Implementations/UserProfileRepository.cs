using KeepMovinAPI.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq;
using KeepMovinAPI.Domain.Dtos;
using Microsoft.EntityFrameworkCore;

namespace KeepMovinAPI.Repository.Implementations
{
    public class UserProfileRepository : IUserProfileRepository
    {
        private readonly KeepMovinDbContext _context;


        public UserProfileRepository(KeepMovinDbContext context)
        {
            _context = context;
        }


        public void Add(UserProfile item)
        {
            _context.UserProfile.Add(item);
            _context.SaveChanges();
        }

        public UserProfile Get(Guid userId)
        {
            var query = _context.UserProfile.Where(u => u.Organiser.Userid == userId);
            UserProfile userProfile = query.FirstOrDefault();
            return userProfile;
        }


        public ProfilePageDto GetProfilePersonalInfoById(Guid userId)
        {

            var test = _context.UserProfile.Where(u => u.Organiser.Userid == userId);

            var user = test.FirstOrDefault();
            
            var userProfile = new ProfilePageDto(userId, user.Name, user.Surname,
                user.BirthDate, user.PersonalInfo,
                user.Location.City, user.Location.Country);

            return userProfile;
         
        }

        public IEnumerable<UserProfile> GetAll()
        {
            throw new NotImplementedException();
        }

        public void Remove(Guid id)
        {
            throw new NotImplementedException();
        }
    }
}
    