using System.Collections.Generic;
using KeepMovinAPI.Domain;

namespace KeepMovinAPI.Dtos
{
    public class UserEventsDto
    {
        public decimal NumberOfPages { get; set; }
        
        public IEnumerable<Event> EventsFound { get; set; }

        public UserEventsDto(decimal numberOfPages, IEnumerable<Event> events)
        {
            NumberOfPages = numberOfPages;
            EventsFound = events;
        }
    }
}