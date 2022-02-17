using System;
using System.Collections.Generic;
using KeepMovinAPI.DAOs;
using KeepMovinAPI.DAOs.Implementations;
using KeepMovinAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace KeepMovinAPI.Controllers
{
    [Authorize]
    [ApiController]
    public class EventController : ControllerBase
    {
        private readonly ILogger<EventController> _logger;
        private IDao<Event> _daoEvent;


        public EventController(ILogger<EventController> logger, IDao<Event> daoEvent)
        {
            _logger = logger;
            _daoEvent = daoEvent;
        }

        /// <summary>
        /// /Event/1
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        
       
        [HttpGet]
        [Route("event/{id}")]
        public Event Get(int id)
        {
            Event eventModel = _daoEvent.Get(id);
            return eventModel;
        }
        
        [HttpGet]
        [Route("events")]
        public IEnumerable<Event> GetAll()
        {
            var listOfEvents = _daoEvent.GetAll();
            return listOfEvents;
        }
        
        [HttpPost]
        [Route("api/event")]
        public void Add(Event eventModel)
        {
            _daoEvent.Add(eventModel);
        }
        
        
    }
}