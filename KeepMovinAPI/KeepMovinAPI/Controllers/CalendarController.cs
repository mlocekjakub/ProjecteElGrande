using System;
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
        private IEventRepository _repositoryEvent;
        private readonly IJwtAuthenticationManager _jwtAuthenticationManager;
        private IValidation _validation;

        public CalendarController(ILogger<CalendarController> logger, IEventRepository repositoryEvent, IJwtAuthenticationManager jwt,
            IValidation validation)
        {
            _logger = logger;
            _repositoryEvent = repositoryEvent;
            _jwtAuthenticationManager = jwt;
            _validation = validation;
        }

        [HttpGet]
        public IEnumerable<Event> GetEventsByRange([FromHeader(Name = "userId")] string userId, DateTime startDate, DateTime endDate)
        {
            try
            {
                var listOfEvents =
                    _repositoryEvent.GetAllByDateRange(startDate,
                        endDate.AddDays(1)); // added one day to catch all events in calendar view
                return listOfEvents;
            }
            catch (Exception e)
            {
                _logger.LogWarning(Convert.ToString(e));
                return null;
            }
        }

        [HttpGet("user-events")]
        public IEnumerable<Event> GetUserEvents([FromHeader(Name = "userId")] string userId, DateTime startDate, DateTime endDate)
        {
            var listOfEvents =
                _repositoryEvent.GetUserEventsByDateRange(Guid.Parse(userId), startDate,
                    endDate.AddDays(1)); // added one day to catch all events in calendar view
            return listOfEvents;
        }
    }
}