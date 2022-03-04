using System;
using System.ComponentModel.DataAnnotations;

namespace KeepMovinAPI.Domain
{
    public class Setting
    {
        [Key] public Guid SettingsId { get; set; } = Guid.NewGuid();

        public bool AboutMe { get; set; } = true;
        public bool Location { get; set; } = true;
        public bool Photo { get; set; } = true;
        public bool FollowersFollowing { get; set; } = true;
        public bool Statistics { get; set; } = true;
        public bool UpcomingEvents { get; set; } = true;
        public bool PreviousEvents { get; set; } = true;
    }
}