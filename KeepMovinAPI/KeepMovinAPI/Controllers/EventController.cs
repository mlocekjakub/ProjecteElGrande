using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using AutoMapper;
using System.Threading.Tasks;
using KeepMovinAPI.Authentication;
using KeepMovinAPI.Repository;
using KeepMovinAPI.Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using KeepMovinAPI.Domain.Dtos;
using KeepMovinAPI.Dtos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace KeepMovinAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventController : ControllerBase
    {
        private readonly ILogger<EventController> _logger;
        private IEventDao _daoEvent;
        private readonly IMapper _mapper;
        private IValidation _validation;


        public EventController(ILogger<EventController> logger, IEventDao daoEvent,
            IMapper mapper, IValidation validation)
        {
            _logger = logger;
            _daoEvent = daoEvent;
            _mapper = mapper;
            _validation = validation;
        }



        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(Event))]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult Get(Guid id)
        {
            try
            {
                Event eventModel = _daoEvent.Get(id);
                return Ok(eventModel);
            }
            catch (Exception e)
            {
                _logger.LogWarning(Convert.ToString(e));
                return BadRequest();
            }
        }



        [HttpGet("input/{input}")]
        public IEnumerable<EventCardDto> GetByInput(string input)
        {
            try
            {
                var listOfEvents = _daoEvent.GetByInput(input);
                return _mapper.Map<IEnumerable<EventCardDto>>(listOfEvents);
            }
            catch (Exception e)
            {
                _logger.LogWarning(Convert.ToString(e));
                return null;
            }
        }
        


        [HttpGet("user-events/{userId}")]  
        public IEnumerable<Event> GetUserEvents(Guid userId)
        {
            try
            {
                string jwt = Request.Cookies["token"];
                if (!_validation.Validate(userId, jwt))
                    return null;
                var listOfUserEvents = _daoEvent.GetUserEventsByUserId(userId);
                return listOfUserEvents;

            }
            catch(Exception e)
            {
                _logger.LogWarning(Convert.ToString(e));
                return null;
            }
           
        }


        
        [HttpGet("events-user/upcoming")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(UserUpcomingEventsDto))]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult GetUserUpcomingEvents([FromHeader(Name = "etag")] string userId,
                                                        [FromHeader(Name = "currentPage")] string currentPage)
        {
            try
            {
                string jwt = Request.Cookies["token"];
                if (!_validation.Validate(Guid.Parse(userId), jwt))
                    return Unauthorized();
                var listOfUserEvents = _daoEvent.GetUpcomingEventsById(Guid.Parse(userId), int.Parse(currentPage));
                return Ok(listOfUserEvents);
            }
            catch(Exception e)
            {
                _logger.LogWarning(Convert.ToString(e));
                return BadRequest();
            }
            
        }
        


        [HttpGet("events-user/previous")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(UserPreviousEventsDto))]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult GetUserPreviousEvents([FromHeader(Name = "etag")] string userId,
                                                        [FromHeader(Name = "currentPage")] string currentPage)
        {
            try
            {
                string jwt = Request.Cookies["token"];
                if (!_validation.Validate(Guid.Parse(userId), jwt))
                    return Unauthorized();
                var listOfUserEvents = _daoEvent.GetPreviousEventsById(Guid.Parse(userId), int.Parse(currentPage));
                return Ok(listOfUserEvents);


            }
            catch(Exception e)
            {
                _logger.LogWarning(Convert.ToString(e));
                return BadRequest();
            }

            
        }



        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        public async Task<ActionResult<IEnumerable<EventDto>>> GetFilteredEvents([FromQuery] Filter filter)
        {
            try
            {
                var listOfEvents = _daoEvent.GetFiltered(filter);
                if (!listOfEvents.EventsFound.Any())
                {
                    return NoContent();
                }
                return Ok(listOfEvents);
            }
            catch (Exception e)
            {
                _logger.LogWarning(Convert.ToString(e));
                return NoContent();
            }
        }



        [HttpGet("all")]
        public IEnumerable<Event> GetAll()
        {
            try
            {
                var listOfEvents = _daoEvent.GetAll();
                return listOfEvents;
            }
            catch (Exception e)
            {
                _logger.LogWarning(Convert.ToString(e));
                return null;
            }
        }
        


        [HttpGet("join")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult JoinToEvent([FromQuery]Guid userId, [FromQuery] Guid eventId)
        {
            try
            {
                string jwt = Request.Cookies["token"];
                if (!_validation.Validate(userId, jwt))
                    return Unauthorized();
                _daoEvent.JoinToEvent(userId,eventId);
                return Ok();
            }
            catch (Exception e)
            {
                _logger.LogWarning(Convert.ToString(e));
                return BadRequest();
            }
        }
        


        [HttpPost]
        public IActionResult Add(Event eventModel)
        {
            try
            {
                _daoEvent.Add(eventModel);
                return Ok();
            }
            catch (Exception e)
            {
                _logger.LogWarning(Convert.ToString(e));
                return Unauthorized();
            }
        }
    }
}