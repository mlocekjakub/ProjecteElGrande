using System;
using System.Collections.Generic;

namespace KeepMovinAPI.Domain.Dtos
{
    public class EventDto
    {
        public Guid EventId { get; set; }

        public string Name { get; set; }

        public DateTime StartEvent { get; set; }

        public DateTime EndEvent { get; set; }
        
        public UserProfile User { get; set; }

        public Guid SportsSportId { get; set; }

        public Guid ExperienceLevelId { get; set; }

        public string EventInfo { get; set; }

        public int? MaxParticipants { get; set; }

        public string Status { get; set; }

        public decimal Price { get; set; }

        public string Currency { get; set; }
        
        public Guid TypeId { get; set; }
        
        public Guid LocationId { get; set; }

    }
}