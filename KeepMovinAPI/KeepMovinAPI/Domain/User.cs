using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace KeepMovinAPI.Domain
{
    public class User
    {
        [Key] 
        public Guid Userid { get; set; } = Guid.NewGuid();
        public string Email { get; set; }
        public string Password { get; set; }
        public List<User> Followers { get; set; }
        public List<User> Followed { get; set; }
        public List<Event> Events { get; set; }
    }
}