using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;


namespace KeepMovinAPI.Domain
{
    public class Event
    {
        [Key] 
        public Guid EventId { get; set; } = Guid.NewGuid();

        public string Name { get; set; }

        public DateTime StartEvent { get; set; }

        public DateTime EndEvent { get; set; }
        
        public UserProfile User { get; set; }

        public Sport Sports { get; set; }

        public ExperienceLevel ExperienceLevel { get; set; }

        public string EventInfo { get; set; }

        public int? MaxParticipants { get; set; }

        public string Link { get; set; }

        public Decimal? Rating { get; set; }

        public string Status { get; set; }
        
        public Decimal Price { get; set; }

        public Picture ProfilePicture { get; set; }
        
        public string Currency { get; set; } 
        
        public EventType Type { get; set; }  
        
        public Location Location { get; set; } 
        
        public List<Picture> Pictures { get; set; }
        
        public List<User> Users { get; set; }

    }
}