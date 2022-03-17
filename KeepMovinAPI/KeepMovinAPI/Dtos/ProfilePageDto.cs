using System;
using System.Collections.Generic;


namespace KeepMovinAPI.Domain.Dtos
{
    public class ProfilePageDto
    {
        public Guid UserId { get; set; }
        
        public Picture Picture { get; set; }
        
        public string Name { get; set; }
        
        public string Surname { get; set; }
        
        public int UserAge { get; set; }
        
        public string PersonalInfo { get; set; }
        
        public string LocationCity { get; set; }
        
        public string LocationCountry { get; set; }
        
        public List<Event> UserEvents { get; set; }
        
        
    }
}