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
        public Guid userid { get; set; }

        [Required(ErrorMessage = "Email is required")]
        [StringLength(200, ErrorMessage = "Email must be between 6 and 60 signs ", MinimumLength = 6)]
        [EmailAddress]
		public string Email { get;set; }

        [JsonIgnore]
        [Required(ErrorMessage = "Password is required")]
        [StringLength(200,ErrorMessage = "Password length must be between 6 and 30 signs", MinimumLength = 6)]
		public string Password { get;set;}
		
		public HashSet<User> Followers { get; set; }
		public HashSet<User> Followed { get; set; }
		public HashSet<Event> Events { get; set; }


	}








}

