using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Net.Mime;

namespace KeepMovinAPI.Models
{
    public class User
	{
        [Key]
        [Column("user_id")]
        public int userid { get; set; }

        [Required(ErrorMessage = "Email is required")]
        [StringLength(int.MaxValue, MinimumLength = 6, ErrorMessage = "Email must have at least 6 characters")]
        [Column("email")]
		public string Email { get;set; }

        [Required(ErrorMessage = "Password name is required")]
        [StringLength(int.MaxValue, MinimumLength = 6, ErrorMessage = "Password must have at least 6 characters")]
        [Column("password")]
		public string Password { get;set;}


	}








}

