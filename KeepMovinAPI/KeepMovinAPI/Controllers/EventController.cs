using System;
using System.Collections.Generic;
using KeepMovinAPI.DAOs;
using KeepMovinAPI.DAOs.Implementations;
using KeepMovinAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace KeepMovinAPI.Controllers
{
    [ApiController]
    public class EventController : ControllerBase
    {
        private readonly ILogger<EventController> _logger;
        private IDao<Event> _dao;

        public EventController(ILogger<EventController> logger, IDao<Event> dao)
        {
            _logger = logger;
            _dao = dao;
        }

        /// <summary>
        /// /Event/1
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        
       
        [HttpGet]
        [Route("Event/{id}")]
        public Event Get(int id)
        {
            Event eventModel = _dao.Get(id);
            return eventModel;
        }
        
        [HttpGet]
        [Route("Events")]
        public IEnumerable<Event> GetAll()
        {
            var listOfEvents = _dao.GetAll();
            return listOfEvents;
        }
        
        [HttpPost]
        [Route("/Event")]
        public void Add(Event eventModel)
        {
            _dao.Add(eventModel);
        }
    }
}