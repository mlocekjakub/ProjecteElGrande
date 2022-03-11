using System;

namespace KeepMovinAPI.Domain.Dtos
{
    public class EventDto
    {
        public Guid EventId { get; set; }

        public string Name { get; set; }

        public DateTime StartEvent { get; set; }

        public DateTime EndEvent { get; set; }
        
        public UserProfile User { get; set; }

        public string Sport { get; set; }

        public string ExperienceLevel { get; set; }

        public string EventInfo { get; set; }

        public int? MaxParticipants { get; set; }

        public string Status { get; set; }

        public decimal Price { get; set; }

        public string Currency { get; set; }
        
        public string Type { get; set; }
        
        public string Location { get; set; }
        
        public decimal NumberOfPages { get; set; }

    }
}