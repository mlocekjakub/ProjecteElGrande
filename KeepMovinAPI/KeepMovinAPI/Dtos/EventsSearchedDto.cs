using System.Collections.Generic;

namespace KeepMovinAPI.Domain.Dtos
{
    public class EventsSearchedDto
    {
        public decimal NumberOfPages { get; set; }
        
        public IEnumerable<EventDto> EventsFound { get; set; }

        public EventsSearchedDto(decimal numberOfPages, IEnumerable<EventDto> events)
        {
            NumberOfPages = numberOfPages;
            EventsFound = events;
        }
    }
}