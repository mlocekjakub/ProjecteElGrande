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

        public Sport Sports { get; set; }

        // public string ExperienceLevel { get; set; } //enum

        public string EventInfo { get; set; }

        public int? MaxParticipants { get; set; }

        // public string Link { get; set; }

        public decimal? Rating { get; set; }

        public string Status { get; set; }

        public decimal Price { get; set; }

        public Picture ProfilePicture { get; set; }
        
        // public string Currency { get; set; }  //enum
        
        // public string Type { get; set; }  //enum
        
        public Location Location { get; set; } 
        
        // public List<Picture> Pictures { get; set; }
        
        public List<User> Users { get; set; }

    }
}