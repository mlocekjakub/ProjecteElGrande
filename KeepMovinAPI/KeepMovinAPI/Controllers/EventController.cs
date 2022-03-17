using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using System.Threading.Tasks;
using KeepMovinAPI.Authentication;
using KeepMovinAPI.Repository;
using KeepMovinAPI.Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using KeepMovinAPI.Domain.Dtos;
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

        public EventController(ILogger<EventController> logger, IEventDao daoEvent, IJwtAuthenticationManager jwt,
            IMapper mapper,IValidation validation)
        {
            _logger = logger;
            _daoEvent = daoEvent;
            _mapper = mapper;
            _validation = validation;
        }

        [HttpGet("uid/{id}")]
        public IEnumerable<User> GetUser(Guid id)
        {
            List<User> eventModel = (List<User>) _daoEvent.GetUsers(id);
            return eventModel;
        }

        [HttpGet("id/{id}")]
        public Event Get(Guid id)
        {
            Event eventModel = _daoEvent.Get(id);
            return eventModel;
        }

        [HttpGet("{input}")]
        public IEnumerable<Event> GetByInput(string input)
        {
            var listOfEvents = _daoEvent.GetByInput(input);
            return listOfEvents;
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        public async Task<ActionResult<IEnumerable<EventDto>>> GetFilteredEvents([FromQuery] Filter filter)
        {
            var listOfEvents = _daoEvent.GetFiltered(filter);
            if (!listOfEvents.Any())
            {
                return NoContent();
            }

            return Ok(listOfEvents);
        }
        
        [HttpGet("all")]
        public IEnumerable<Event> GetAll()
        {
            var listOfEvents = _daoEvent.GetAll();
            return listOfEvents;
        }

        [HttpPost]
        public IActionResult Add(Event eventModel)
        {
            string jwt = Request.Cookies["token"];
            if (_validation.Validate(eventModel.User.Organiser.Userid, jwt))
            {
                _daoEvent.Add(eventModel);
                return Ok();
            }

            return Unauthorized();
        }



    }
}