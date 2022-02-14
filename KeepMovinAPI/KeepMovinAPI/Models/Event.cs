using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Net.Mime;

namespace KeepMovinAPI.Models
{
    public class Event
    {
        [Key] 
        [Column("event_id")] 
        public int EventId { get; set; }
        
        [Column("start_event")] 
        public DateTime StartEvent { get; set; }
        
        [Column("end_event")] 
        public DateTime EndEvent { get; set; }
        
        [Column("organizer_user_id")] 
        public int OrganizerUserId { get; set; }
        
        [Column("sport_id")]
        public int SportId { get; set; }
        
        [Column("experience_level")] 
        public string ExperienceLevel { get; set; }
        
        [Column("event_info")] 
        public string EventInfo { get; set; }
        
        [Column("max_participants")] 
        public int? MaxParticipants { get; set; }
        
        [Column("link")]
        public string Link { get; set; }
        
        [Column("rating")] 
        public decimal? Rating { get; set; }
        
        [Column("status")] 
        public string Status { get; set; }
        
        [Column("price_id")] 
        public int PriceId { get; set; }
        
        // [ForeignKey("price_id")] 
        // public Price PriceId { get; set; }
        
        [Column("profile_picture")] 
        public Byte[] ProfilePicture { get; set; }
    }
}