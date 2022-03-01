using System;

namespace KeepMovinAPI.Domain
{
    public class UserProfile
    {
        public Guid UserProfileId { get; set; }
        public User User { get; set; }
        public Picture Picture { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public int Age { get; set; }
        public string PersonalInfo { get; set; }
        public Decimal Rating { get; set; } //?
        public Organisation Organisation { get; set; }
        public Location Location { get; set; }
        // public Settings Settings { get; set; }
        public string PhoneNumber { get; set; }
        
    }
}