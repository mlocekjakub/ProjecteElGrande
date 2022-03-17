using System;
using System.Collections;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using KeepMovinAPI.Domain;
using KeepMovinAPI.Domain.Dtos;

namespace KeepMovinAPI.Repository

{
    public interface IEventDao : IDao<Event>
    {
        public IEnumerable<Event> GetByInput(string input);
        public IEnumerable<Event> GetAllByDateRange(DateTime startDate, DateTime endDate);
        public IEnumerable<EventDto> GetFiltered([FromQuery] Filter filter);
        public IEnumerable<Event> GetUserEventsByUserId(Guid id);
    }
}