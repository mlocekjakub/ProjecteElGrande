using System;

namespace KeepMovinAPI.Dtos
{

    public class SettingsDto
    {

        public Guid UserId { get; set; }
        public bool Location { get; set; } = false;
        public bool FollowersFollowing { get; set; } = false;
        public bool Statistics { get; set; } = false;
        public bool AboutMe { get; set; } = false;
        public bool UpcomingEvents { get; set; } = false;
        public bool PreviousEvents { get; set; } = false;
        public bool Photo { get; set; } = false;
        public bool HostedEvents { get; set; } = false; 
    }

}
