using System;
using System.ComponentModel.DataAnnotations;

namespace KeepMovinAPI.Domain
{
    public class Sport
    {
        [Key] 
        public Guid SportId { get; set; } = Guid.NewGuid();

        [MaxLength(25)]
        public string Name { get; set; }
    }
}