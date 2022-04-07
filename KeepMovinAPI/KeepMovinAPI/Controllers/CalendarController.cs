using System;
using System.Collections.Generic;
using KeepMovinAPI.Authentication;
using KeepMovinAPI.Repository;
using KeepMovinAPI.Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Http;

namespace KeepMovinAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CalendarController : ControllerBase
    {
        private readonly ILogger<CalendarController> _logger;
        private IEventRepository _repositoryEvent;
        private IValidation _validation;

        public CalendarController(ILogger<CalendarController> logger, IEventRepository repositoryEvent,
            IValidation validation)
        {
            _logger = logger;
            _repositoryEvent = repositoryEvent;
            _validation = validation;
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IEnumerable<Event>))]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult GetEventsByRange([FromHeader(Name = "userId")] string userId ,DateTime startDate, DateTime endDate)
        {
            try
            {
                string jwt = Request.Cookies["token"];
                if (!_validation.Validate(Guid.Parse(userId), jwt))
                    return Unauthorized();
                var listOfEvents =
                    _repositoryEvent.GetAllByDateRange(startDate,
                        endDate.AddDays(1)); // added one day to catch all events in calendar view
                return Ok(listOfEvents);
            }
            catch (Exception e)
            {
                _logger.LogWarning(Convert.ToString(e));
                return BadRequest();
            }
        }




        [HttpGet("user-events")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IEnumerable<Event>))]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult GetUserEvents([FromHeader(Name = "userId")] string userId, DateTime startDate, DateTime endDate)
        {
            try
            {
                string jwt = Request.Cookies["token"];
                if (!_validation.Validate(Guid.Parse(userId), jwt))
                    return Unauthorized();
                var listOfEvents =
                    _repositoryEvent.GetUserEventsByDateRange(Guid.Parse(userId), startDate,
                        endDate.AddDays(1)); // added one day to catch all events in calendar view
                return Ok(listOfEvents);

            }
            catch(Exception e)
            {
                _logger.LogWarning(Convert.ToString(e));
                return BadRequest();
            }
            
        }

    }
}