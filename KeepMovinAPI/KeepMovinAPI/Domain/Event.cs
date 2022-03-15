using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;


namespace KeepMovinAPI.Domain
{
    public class Event
    {
        [Key] 
        public Guid EventId { get; set; } = Guid.NewGuid();

        [Required]
        [MaxLength(50)]
        public string Name { get; set; }
        
        [Required]
        public DateTime StartEvent { get; set; }

        [Required]
        public DateTime EndEvent { get; set; }

        [Required]
        public UserProfile User { get; set; }

        [Required]
        [BindProperty(Name="SportsSportId")]
        public Sport Sports { get; set; }

        [Required]
        public ExperienceLevel ExperienceLevel { get; set; }

        public string EventInfo { get; set; }

        public int? MaxParticipants { get; set; }

        public string Link { get; set; }

        public Decimal? Rating { get; set; }

        [MaxLength(15)]
        public string Status { get; set; }
        
        [Required]
        public Decimal Price { get; set; }

        public Picture ProfilePicture { get; set; }
        
        [Required]
        [MaxLength(3)]
        public string Currency { get; set; } 
        
        [Required]
        public EventType Type { get; set; }  


        [Required]
        public Location Location { get; set; } 
        
        public List<Picture> Pictures { get; set; }
        
        public List<User> Users { get; set; }

    }
}