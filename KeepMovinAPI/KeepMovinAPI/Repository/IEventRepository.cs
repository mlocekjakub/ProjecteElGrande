using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using KeepMovinAPI.Domain;
using KeepMovinAPI.Domain.Dtos;

namespace KeepMovinAPI.Repository

{
    public interface IEventDao : IDao<Event>
    {
        public IEnumerable<Event> GetByInput(string input);
        public IEnumerable<Event> GetAllByMonthAndYear(DateTime givenDate);
        public IEnumerable<EventDto> GetFiltered([FromQuery] Filter filter);
    }
}