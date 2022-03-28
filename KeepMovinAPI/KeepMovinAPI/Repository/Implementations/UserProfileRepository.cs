using KeepMovinAPI.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq;
using KeepMovinAPI.Domain.Dtos;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using KeepMovinAPI.Dtos;

namespace KeepMovinAPI.Repository.Implementations
{
    public class UserProfileRepository : IUserProfileRepository
    {
        private readonly ILogger<UserProfileRepository> _logger;
        private readonly KeepMovinDbContext _context;


        public UserProfileRepository(ILogger<UserProfileRepository> logger, KeepMovinDbContext context)
        {
            _logger = logger;
            _context = context;
        }


        public void Add(UserProfile item)
        {
            _context.UserProfile.Add(item);
            _context.SaveChanges();
        }

        public UserProfile Get(Guid userId)
        {
            var query = _context.UserProfile.Include(e=> e.Organisation).Include(e=> e.Location)
                .Where(u => u.Organiser.Userid == userId);


            UserProfile userProfile = query.FirstOrDefault();
            return userProfile;
        }


        public ProfilePersonalInfoDto GetProfilePersonalInfoById(Guid userId)
        {

            var test = _context.UserProfile
                .Include(e => e.Location)
                .Where(u => u.Organiser.Userid == userId);

            var user = test.FirstOrDefault();
            try
            {
                var userProfile = new ProfilePersonalInfoDto(userId, user.Name, user.Surname,
                    user.BirthDate, user.PersonalInfo,
                    user.Location.City, user.Location.Country);

                return userProfile;
            }
            catch (Exception e)
            {
                var userProfile = new ProfilePersonalInfoDto(userId, user.Name, user.Surname,
                    user.BirthDate, user.PersonalInfo,
                    null, null); 
                
                return userProfile;
            }
        }

        public Setting GetSettingsByUserId(Guid userId)
        {
            var query = _context.UserProfile
                .Include(e => e.Setting)
                .Where(u => u.Organiser.Userid == userId);
            UserProfile userProfile = query.FirstOrDefault();
            Setting settings = userProfile.Setting;
            return settings;

        }

        public Guid GetSettingsIdByUserId(Guid userId)
        {
            var query = _context.UserProfile
                .Include(e => e.Setting)
                .Where(u => u.Organiser.Userid == userId);
            UserProfile userProfile = query.FirstOrDefault();
            Setting settings = userProfile.Setting;
            
            return settings.SettingsId;

        }

        public void UpdateUserProfile(UserProfileDto upDated)
        {
            var current = Get(upDated.UserId);
            current.Name = upDated.Name;
            current.Surname = upDated.Surname;
            /*current.Picture = upDated.Picture;*/
            current.BirthDate = upDated.BirthDate;
            current.PersonalInfo = upDated.PersonalInfo;
            current.Organisation = upDated.Organisation;
            var x = current.Organisation;
            current.Location = upDated.Location;
            var y = current.Location;
            current.PhoneNumber = upDated.PhoneNumber;
            _context.UserProfile.Update(current);
            _context.SaveChanges();
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