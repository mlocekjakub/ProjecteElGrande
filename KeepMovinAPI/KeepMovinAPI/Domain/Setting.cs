using System;
using System.ComponentModel.DataAnnotations;

namespace KeepMovinAPI.Domain
{
    public class Setting
    {
        [Key] public Guid SettingsId { get; set; } = Guid.NewGuid();

        public bool Location { get; set; } = false;      
        public bool FollowersFollowing { get; set; } = false;
        public bool Statistics { get; set; } = false;
        public bool AboutMe { get; set; } = false;                        
        public bool UpcomingEvents { get; set; } = false;
        public bool PreviousEvents { get; set; } = false;
        public bool Photo { get; set; } = false;  
    }
}