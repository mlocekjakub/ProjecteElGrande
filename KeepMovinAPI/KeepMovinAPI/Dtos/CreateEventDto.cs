using System;
using KeepMovinAPI.Domain;
using Microsoft.Extensions.Logging;

namespace KeepMovinAPI.Dtos
{
    public class CreateEventDto
    {
        public Guid SportId { get; set; }
        public Guid ExperienceLevelId { get; set; }
        // public Guid TypeId { get; set; }
        // public Location LocationId { get; set; }
        public Guid UserId { get; set; }
        public Guid EventId { get; set; } = Guid.NewGuid();

        public string Name { get; set; }
        
        public DateTime StartEvent { get; set; }

        public DateTime EndEvent { get; set; }

        public string EventInfo { get; set; }

        public int? MaxParticipants { get; set; }

        public string Link { get; set; }

        public Decimal? Rating { get; set; }

        public string Status { get; set; }
        
        public Decimal Price { get; set; }

        public Picture ProfilePicture { get; set; }
        
        public string Currency { get; set; } 
    }
}