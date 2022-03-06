using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace KeepMovinAPI.Domain.Dtos
{
    public class UserDto
    {
        public Guid Userid { get; set; }

        [Required(ErrorMessage = "Email is required")]
        [StringLength(200, ErrorMessage = "Email must be between 6 and 60 signs ", MinimumLength = 6)]
        [EmailAddress]
        public string Email { get;set; }

        [JsonIgnore]
        [Required(ErrorMessage = "Password is required")]
        [StringLength(200,ErrorMessage = "Password length must be between 6 and 30 signs", MinimumLength = 6)]
        public string Password { get;set;}
        public List<User> Followers { get; set; }
        public List<User> Followed { get; set; }
        public List<Event> Events { get; set; }
    }
}