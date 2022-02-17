using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Net.Mime;
using System.Text.Json.Serialization;

namespace KeepMovinAPI.Models
{
    public class User
	{
        [Key]
        [Column("user_id")]
        public int userid { get; set; }

        [Required(ErrorMessage = "Email is required")]
        [StringLength(200, ErrorMessage = "Email must be between 6 and 60 signs ", MinimumLength = 6)]
        [EmailAddress]
        [Column("email")]
		public string Email { get;set; }

        [JsonIgnore]
        [Required(ErrorMessage = "Password is required")]
        [StringLength(200,ErrorMessage = "Password length must be between 6 and 30 signs", MinimumLength = 6)]
        [Column("password")]
		public string Password { get;set;}


	}








}

