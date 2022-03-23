using System;
using System.Collections;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using KeepMovinAPI.Domain;
using KeepMovinAPI.Domain.Dtos;
using KeepMovinAPI.Dtos;

namespace KeepMovinAPI.Repository

{
    public interface IEventDao : IDao<Event>
    {
        public IEnumerable<EventCardDto> GetByInput(string input);
        public IEnumerable<Event> GetAllByDateRange(DateTime startDate, DateTime endDate);
        public IEnumerable<Event> GetUserEventsByDateRange(Guid userId, DateTime startDate, DateTime endDate);
        public EventsSearchedDto GetFiltered([FromQuery] Filter filter);
        public void JoinToEvent(Guid userId, Guid eventId);
        public IEnumerable<Event> GetUserEventsByUserId(Guid id);

        public UserUpcomingEventsDto GetUpcomingEventsById(Guid id, int currentPage);
        
        public UserPreviousEventsDto GetPreviousEventsById(Guid id, int currentPage);

        public void UpdateStatus();

        public IEnumerable<User> GetUserEventsByEventId(Guid id);
    }
}