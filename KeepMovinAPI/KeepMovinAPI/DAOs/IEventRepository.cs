using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using KeepMovinAPI.Domain;
using KeepMovinAPI.Domain.Dtos;

namespace KeepMovinAPI.DAOs
{
    public interface IEventDao : IDao<Event>
    {
        public IEnumerable<Event> GetByInput(string input);
        public IEnumerable<Event> GetAllByMonthAndYear(DateTime givenDate);
        public IEnumerable<Event> GetFiltered([FromQuery] Filter filter);
         
        

    }
}