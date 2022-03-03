using System;
using System.Collections.Generic;
using KeepMovinAPI.Models;

namespace KeepMovinAPI.DAOs
{
    public interface IEventDao : IDao<Event>
    {
        public IEnumerable<Event> GetByInput(string input);
        public IEnumerable<Event> GetAllByMonthAndYear(DateTime givenDate);

    }
}