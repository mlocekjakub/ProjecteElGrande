using System.Collections.Generic;
using KeepMovinAPI.DAOs.Implementations;
using KeepMovinAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace KeepMovinAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EventController : ControllerBase
    {
        private readonly ILogger<EventController> _logger;

        public EventController(ILogger<EventController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public Event Get(int id)
        {
            EventDao dao = new EventDao();
            Event eventModel = dao.Get(id);
            return eventModel;
        }
        
        // [HttpGet]
        // public IEnumerable<Event> GetAll()
        // {
        //     EventDao dao = new EventDao();
        //     var listOfEvents = dao.GetAll();
        //     return listOfEvents;
        // }
        
        [HttpPost]
        public void Add(Event eventModel)
        {
            EventDao dao = new EventDao();
            dao.Add(eventModel);
        }
    }
}