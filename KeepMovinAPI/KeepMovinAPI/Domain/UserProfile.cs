using System;
using System.ComponentModel.DataAnnotations;

namespace KeepMovinAPI.Domain
{
    public class UserProfile
    {
        [Key]
        public Guid UserProfileId { get; set; } = Guid.NewGuid();
        public User Organiser { get; set; }
        public Picture Picture { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public int Age { get; set; }
        public string PersonalInfo { get; set; }
        public Organisation Organisation { get; set; }
        public Location Location { get; set; }
        public Setting Setting { get; set; }
        public string PhoneNumber { get; set; }
        
    }
}