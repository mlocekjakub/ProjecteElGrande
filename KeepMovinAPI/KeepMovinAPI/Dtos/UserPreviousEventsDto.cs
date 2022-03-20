using System.Collections.Generic;
using KeepMovinAPI.Domain;

namespace KeepMovinAPI.Dtos
{
    public class UserPreviousEventsDto
    {
        public decimal NumberOfPages { get; set; }
        
        public IEnumerable<Event> EventsFound { get; set; }

        public UserPreviousEventsDto(decimal numberOfPages, IEnumerable<Event> events)
        {
            NumberOfPages = numberOfPages;
            EventsFound = events;
        }
    }
}