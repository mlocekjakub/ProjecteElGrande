using System;
using System.Collections.Generic;


namespace KeepMovinAPI.Domain.Dtos
{
    public class ProfilePageDto
    {
        private Guid UserId { get; set; }

        private string? Name { get; set; }

        private string? Surname { get; set; }

        private DateTime UserAge { get; set; }

        private string? PersonalInfo { get; set; }

        private string? LocationCity { get; set; }

        private string? LocationCountry { get; set; }

        private IEnumerable<User> Followers { get; set; } = new List<User>();

        private IEnumerable<User> Followed { get; set; } = new List<User>();

        public ProfilePageDto(
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