using System;
using System.Collections;
using System.Collections.Generic;
using KeepMovinAPI.Authentication;
using KeepMovinAPI.DAOs;
using KeepMovinAPI.Models;
using KeepMovinAPI.Authentication;
using KeepMovinAPI.DAOs;
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
        private readonly IJwtAuthenticationManager _jwtAuthenticationManager;

        public CalendarController(ILogger<CalendarController> logger, IEventDao daoEvent, IJwtAuthenticationManager jwt)
        {
            _logger = logger;
            _daoEvent = daoEvent;
            _jwtAuthenticationManager = jwt;
        }

        [HttpGet]
        public IEnumerable<Event> GetAll(DateTime inputDate)
        {
            var listOfEvents = _daoEvent.GetAllByMonthAndYear(inputDate);
            return listOfEvents;
        }
    }
}