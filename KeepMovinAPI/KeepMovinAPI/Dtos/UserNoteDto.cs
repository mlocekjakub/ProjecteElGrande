using System;

namespace KeepMovinAPI.Dtos
{
    public class UserNoteDto
    {
        public DateTime Time { get; set; }
        public string Title { get; set; }
        public string Message { get; set; }
        public Guid EventId { get; set; }
        public Guid UserId { get; set; }
    }
}