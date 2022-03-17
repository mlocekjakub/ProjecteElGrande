using System;

namespace KeepMovinAPI.Domain.Dtos
{
    public class EventCardDto
    {
        public Guid EventId { get; set; }
        
        public string Name { get; set; }
        
        public DateTime StartEvent { get; set; }
        
        public string Sport { get; set; }
        
        public string ExperienceLevel { get; set; }
        
        public int? MaxParticipants { get; set; }
        
    }
}