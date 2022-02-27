using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using KeepMovinAPI.Authentication;
using KeepMovinAPI.DAOs;
using KeepMovinAPI.Models;
using Microsoft.AspNetCore.Authorization;
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
        private readonly IJwtAuthenticationManager _jwtAuthenticationManager;
        private IUserDao _userDao;


        public EventController(ILogger<EventController> logger, IEventDao daoEvent, IJwtAuthenticationManager jwt)
        {
            _logger = logger;
            _daoEvent = daoEvent;
            _jwtAuthenticationManager = jwt;
        }

        [HttpGet("{id:int}")]
        public Event Get(int id)
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
        public IEnumerable<Event> GetAll()
        {
            var listOfEvents = _daoEvent.GetAll();
            return listOfEvents;
        }
        

        [HttpPost]
        public IActionResult Add(Event eventModel)
        {
            string jwt = Request.Cookies["token"];
            if (Validate(eventModel.OrganizerUserId,jwt))
            {
                _daoEvent.Add(eventModel);
                return Ok(); 
               
            }
            return Unauthorized();

        }


        [NonAction]
        public bool Validate(int userId, string jwt)
        {
            try
            {
                var token = _jwtAuthenticationManager.Verify(jwt);
                var tokenClaims = token.Claims.ToList();
                var user = _userDao.Get(Convert.ToInt32(tokenClaims[0].Value));
                if (userId == user.userid)
                    return true;
                else
                    return false;
            }
            catch (Exception)
            {
                return false; 
            }

        }
    }
}