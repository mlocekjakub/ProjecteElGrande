using System;
using System.ComponentModel.DataAnnotations;

namespace KeepMovinAPI.Domain
{
    public class UserProfile
    {
        [Key] public Guid UserProfileId { get; set; } = Guid.NewGuid();

        [Required]
        public User Organiser { get; set; }
        
        public Picture Picture { get; set; }
        
        [Required]
        [MaxLength(20)]
        public string Name { get; set; }
        
        [Required]
        [MaxLength(20)]
        public string Surname { get; set; }
        
        public int Age { get; set; }
        
        public string PersonalInfo { get; set; }
        
        public Organisation Organisation { get; set; }
        
        public Location Location { get; set; }
        
        [Required] 
        public Setting Setting { get; set; }
        
        [MaxLength(12)]
        public string PhoneNumber { get; set; }
    }
}