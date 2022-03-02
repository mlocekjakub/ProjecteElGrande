using System;
using System.ComponentModel.DataAnnotations;

namespace KeepMovinAPI.Domain
{
    public class Location
    {
        [Key]
        public Guid LocationId { get; set; } = Guid.NewGuid();
        public string City { get; set; }
        public string Country { get; set; }
        public string ZipCode { get; set; }

    }
}