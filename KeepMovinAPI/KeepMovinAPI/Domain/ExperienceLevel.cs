using System;
using System.ComponentModel.DataAnnotations;

namespace KeepMovinAPI.Domain
{
    public class ExperienceLevel
    {
        [Key]
        public Guid ExperienceLevelId { get; set; } = Guid.NewGuid();
        
        [MaxLength(15)]
        public string Name { get; set; }
    }
}