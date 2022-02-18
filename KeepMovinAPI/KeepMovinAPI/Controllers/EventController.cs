using System.Collections.Generic;
using KeepMovinAPI.DAOs;
using KeepMovinAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace KeepMovinAPI.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class EventController : ControllerBase
    {
        private readonly ILogger<EventController> _logger;
        private IEventDao _daoEvent;


        public EventController(ILogger<EventController> logger, IEventDao daoEvent)
        {
            _logger = logger;
            _daoEvent = daoEvent;
        }

        [AllowAnonymous]
        [HttpGet("{id:int}")]
        public Event Get(int id)
        {
            Event eventModel = _daoEvent.Get(id);
            return eventModel;
        }
        
        [HttpGet]
        public IEnumerable<Event> GetAll()
        {
            var listOfEvents = _daoEvent.GetAll();
            return listOfEvents;
        }
        
        [HttpPost]
        public void Add(Event eventModel)
        {
            _daoEvent.Add(eventModel);
        }
    }
}