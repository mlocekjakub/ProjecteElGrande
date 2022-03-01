using System;

namespace KeepMovinAPI.Domain
{
    public class Location
    {
        public Guid LocationId { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string ZipCode { get; set; }

    }
}