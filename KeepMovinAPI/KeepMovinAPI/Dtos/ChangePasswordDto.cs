using System;
using System.ComponentModel.DataAnnotations;

namespace KeepMovinAPI.Domain.Dtos
{

	public class ChangePasswordDto
	{
		public Guid Userid { get; set; } = Guid.NewGuid();

		[Required(ErrorMessage = "Password is required")]
		[StringLength(200, ErrorMessage = "Password length must be between 6 and 30 signs", MinimumLength = 6)]
		public string OldPassword { get; set; }

		[Required(ErrorMessage = "Password is required")]
		[StringLength(200, ErrorMessage = "Password length must be between 6 and 30 signs", MinimumLength = 6)]
		public string NewPassword { get; set; }

		[Required(ErrorMessage = "Password is required")]
		[StringLength(200, ErrorMessage = "Password length must be between 6 and 30 signs", MinimumLength = 6)]
		public string ConfirmPassword { get; set; }

	}
}