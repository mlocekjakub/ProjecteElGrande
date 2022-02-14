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

        [Column("email")]
		public string Email { get;set; }

		[Column("password")]
		public string Password { get;set;}


	}








}

