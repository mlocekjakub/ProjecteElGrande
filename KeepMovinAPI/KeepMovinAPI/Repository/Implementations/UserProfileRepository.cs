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
            var x = upDated;
            var current = Get(upDated.UserId);

            current.Name = upDated.UserName;
            current.Surname = upDated.Surname;
            current.BirthDate = upDated.BirthDate;
            current.PersonalInfo = upDated.PersonalInfo;
            current.PhoneNumber = upDated.PhoneNumber;

            if(current.Location == null)
            {
                Location location = new Location()
                {
                    City = upDated.Location.City,
                    Country = upDated.Location.Country,
                    ZipCode = upDated.Location.ZipCode,
                };
                _context.Location.Add(location);
                current.Location = location;
            }
            else
            {
                current.Location.City = upDated.Location.City;  
                current.Location.Country = upDated.Location.Country;
                current.Location.ZipCode = upDated.Location.ZipCode;
            }

            if(current.Organisation == null)
            {
                Organisation organisation = new Organisation()
                {
                    Name = upDated.Organisation.Name,
                };
                _context.Organisation.Add(organisation);
                current.Organisation = organisation;

            }
            else
            {
                current.Organisation.Name = upDated.Organisation.Name;
            }
           
            
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