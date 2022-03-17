using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace KeepMovinAPI.Domain
{
    public class User
    {
        [Key] 
        public Guid Userid { get; set; } = Guid.NewGuid();
        
        [Required] 
        [MaxLength(60)] 
        public string Email { get; set; }
        
        [Required] 
        [MaxLength(200)] 
        public string Password { get; set; }
        
        public List<User> Followers { get; set; }
        public List<User> Followed { get; set; }
        [JsonIgnore]
        public List<Event> Events { get; set; }
    }
}