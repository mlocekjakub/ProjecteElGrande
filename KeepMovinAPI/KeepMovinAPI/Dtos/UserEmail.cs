using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace KeepMovinAPI.Domain.Dtos
{
    public class UserEmail
    {
        [Required(ErrorMessage = "Email is required")]
        [StringLength(200, ErrorMessage = "Email must be between 6 and 60 signs ", MinimumLength = 6)]
        [EmailAddress]
        [Column("email")]
        public string Email { get; set; }

    }
}
