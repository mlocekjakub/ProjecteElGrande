using System;
using System.ComponentModel.DataAnnotations;

namespace KeepMovinAPI.Domain
{
    public class UserProfile
    {

        [Key] public Guid UserProfileId { get; set; } = Guid.NewGuid();
        public User Organiser { get; set; }
        
        public Picture Picture { get; set; }

        [MaxLength(20)]
        public string Name { get; set; }

        [MaxLength(20)]
        public string Surname { get; set; }
        
        public DateTime BirthDate { get; set; }
        
        public string PersonalInfo { get; set; }
        
        public Organisation Organisation { get; set; }
        
        public Location Location { get; set; }
        public Setting Setting { get; set; }
        
        [MaxLength(12)]
        public string PhoneNumber { get; set; }






        public void AddUser(User user)
        {
            Organiser = user;
        }
        public void AddSettings(Setting settings)
        {
            Setting = settings;
        }

        public void AddLocation(Location location)
        {
            Location = location;
        }
        public void AddOrganization(Organisation organisation)
        {
            Organisation = organisation;
        }
    }
}