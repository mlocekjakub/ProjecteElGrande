using System;
using System.ComponentModel.DataAnnotations;

namespace KeepMovinAPI.Domain
{
    public class Location
    {
        [Key]
        public Guid LocationId { get; set; } = Guid.NewGuid();
        
        [MaxLength(30)]
        public string City { get; set; }
        
        [MaxLength(30)]
        public string Country { get; set; }
        
        [MaxLength(10)]
        public string ZipCode { get; set; }

    }
}