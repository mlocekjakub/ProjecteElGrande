using System;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace KeepMovinAPI.Domain
{
    public class UserNote
    {
        [Key]
        public Guid NoteId { get; set; } = Guid.NewGuid();
        
        [Required]
        public DateTime Time { get; set; }
        
        [Required]
        [MaxLength(50)]
        public string Title { get; set; }
        
        [Required]
        [MaxLength(2000)]
        public string Message { get; set; }
        
        [Required] 
        public Guid EventId { get; set; }
        
        [Required]
        public Guid UserId { get; set; }
    }
}