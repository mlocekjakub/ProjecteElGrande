using System;
using System.Collections;
using System.Collections.Generic;
using KeepMovinAPI.Authentication;
using KeepMovinAPI.Repository;
using KeepMovinAPI.Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace KeepMovinAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CalendarController : ControllerBase
    {
        private readonly ILogger<CalendarController> _logger;
        private IEventDao _daoEvent;
        // private IEventUserDao _eventUserDao;
        private readonly IJwtAuthenticationManager _jwtAuthenticationManager;

        public CalendarController(ILogger<CalendarController> logger, IEventDao daoEvent, IJwtAuthenticationManager jwt)
        {
            _logger = logger;
            _daoEvent = daoEvent;
            // _eventUserDao = eventUserDao;
            _jwtAuthenticationManager = jwt;
        }

        [HttpGet]
        public IEnumerable<Event> GetEventsByRange(DateTime startDate, DateTime endDate)
        {
            var listOfEvents =
                _daoEvent.GetAllByDateRange(startDate,
                    endDate.AddDays(1)); // added one day to catch all events in calendar view
            return listOfEvents;
        }

        // [HttpGet("user-events")]
        // public IEnumerable<Event> GetUserEvents(Guid userId)
        // {
        //     var listOfUserEvents = _eventUserDao.GetByUserId(userId);
        //     var listOfEvents = new List<Event>();
        //     foreach (var userEvent in listOfUserEvents)
        //     {
        //         listOfEvents.Add(_daoEvent.Get(userEvent.EventsEventId));
        //     }
        //     return listOfEvents;
        // }
    }
}