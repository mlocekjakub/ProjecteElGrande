using System;
using System.Collections.Generic;
using KeepMovinAPI.Domain;

namespace KeepMovinAPI.DAOs
{
    public interface IEventDao : IDao<Event>
    {
        public IEnumerable<Event> GetByInput(string input);
        public IEnumerable<Event> GetAllByMonthAndYear(DateTime givenDate);

    }
}