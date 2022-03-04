using System;
using System.ComponentModel.DataAnnotations;

namespace KeepMovinAPI.Domain
{
    public class EventType
    {
        [Key] public Guid TypeId { get; set; } = Guid.NewGuid();
        
        [MaxLength(15)]
        public string Name { get; set; }
    }
}