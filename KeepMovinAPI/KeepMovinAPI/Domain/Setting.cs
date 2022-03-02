using System;
using System.ComponentModel.DataAnnotations;

namespace KeepMovinAPI.Domain
{
    public class Setting
    {
        [Key]
        public Guid SettingsId { get; set; } = Guid.NewGuid();
        public bool AboutMe { get; set; }
        public bool Location { get; set; }
        public bool Photo { get; set; }
        public bool FollowersFollowing { get; set; }
        public bool Statistics { get; set; }
        public bool UpcomingEvents { get; set; }
        public bool PreviousEvents { get; set; }

        
        


    }
}
