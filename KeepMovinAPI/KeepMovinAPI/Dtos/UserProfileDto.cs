using KeepMovinAPI.Domain;
using System;
using System.ComponentModel.DataAnnotations;

namespace KeepMovinAPI.Dtos
{
    public class UserProfileDto
    {
        public Guid UserProfileId { get; set; } = Guid.Empty;
        public Guid UserId { get; set; }     

        [MaxLength(20)]
        public string Name { get; set; }

        [MaxLength(20)]
        public string Surname { get; set; }

        public Picture Picture { get; set; }

        public DateTime BirthDate { get; set; }

        public string PersonalInfo { get; set; }

        public Organisation Organisation { get; set; }

        public Location Location { get; set; }

        [MaxLength(12)]
        public string PhoneNumber { get; set; }
    }
}
