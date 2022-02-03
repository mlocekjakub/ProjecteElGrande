using System;
using System.ComponentModel.DataAnnotations;

namespace KeepMovinAPI.Models
{
    public class Event
    {
        [Key]
        public int EventId { get; set; }
        public DateTime StartEvent { get; set; }
        public DateTime EndEvent { get; set; }
        public int OrganizerUserId { get; set; }
        public int SportId { get; set; }
        public string ExperienceLevel { get; set; }
        public string EventInfo { get; set; }
        public int MaxParticipants { get; set; }
        public string Link { get; set; }
        public decimal? Rating { get; set; }
        public string Status { get; set; } 
        public int PriceId { get; set; }

    }
}