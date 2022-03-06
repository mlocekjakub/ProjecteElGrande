using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace KeepMovinAPI.Domain
{
    public class User
    {
        [Key] 
        public Guid Userid { get; set; } = Guid.NewGuid();
        
        [Required] 
        [MaxLength(20)] 
        public string Email { get; set; }
        
        [Required] 
        [MaxLength(20)] 
        public string Password { get; set; }
        
        public List<User> Followers { get; set; }
        public List<User> Followed { get; set; }
        public List<Event> Events { get; set; }
    }
}