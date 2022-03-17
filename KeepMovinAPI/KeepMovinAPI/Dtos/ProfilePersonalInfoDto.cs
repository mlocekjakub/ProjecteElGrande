using System;
using System.Collections.Generic;


namespace KeepMovinAPI.Domain.Dtos
{
    public class ProfilePersonalInfoDto
    {
        public Guid UserId { get; set; }

        public string? Name { get; set; }

        public string? Surname { get; set; }

        public DateTime UserAge { get; set; }

        public string? PersonalInfo { get; set; }

        public string? LocationCity { get; set; }

        public string? LocationCountry { get; set; }

        public IEnumerable<User> Followers { get; set; } = new List<User>();

        public IEnumerable<User> Followed { get; set; } = new List<User>();

        public ProfilePersonalInfoDto(
            Guid id, string name, string surname,  
            DateTime userAge, string personalInfo,
            string locationCity, string locationCountry)
        {
            UserId = id;
            Name = name;
            Surname = surname;
            UserAge = userAge;
            PersonalInfo = personalInfo;
            LocationCity = locationCity;
            LocationCountry = locationCountry;
        }
        
        
    }
}