using System.Collections.Generic;

namespace KeepMovinAPI.Domain.Dtos
{
    public class EventsSearchedDto
    {
        public decimal NumberOfPages { get; set; }
        
        public IEnumerable<Event> EventsFound { get; set; }

        public EventsSearchedDto(decimal numberOfPages, IEnumerable<Event> events)
        {
            NumberOfPages = numberOfPages;
            EventsFound = events;
        }
    }
}