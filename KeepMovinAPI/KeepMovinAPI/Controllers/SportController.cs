using System;
using System.Collections.Generic;
using KeepMovinAPI.DAOs;
using KeepMovinAPI.Domain;
using System;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace KeepMovinAPI.Controllers
{
    [ApiController]
    public class SportController : ControllerBase
    {
        private readonly ILogger<SportController> _logger;
        private ISportDao _daoSport;

        public SportController(ILogger<SportController> logger, ISportDao daoSport)
        {
            _logger = logger;
            _daoSport = daoSport;
        }
        
        [HttpGet]
        [Route("api/sports")]
        public IEnumerable<Sport> GetAll()
        {
            var listOfSports = _daoSport.GetAll();
            return listOfSports;
        }
        

        [HttpGet]
        [Route("api/sports/{input}")]
        public IEnumerable<Sport> GetByInput(string input)
        {
            var listOfEvents = _daoSport.GetByInput(input);
            return listOfEvents;
        }
        
        [AllowAnonymous]
        [HttpGet]
        [Route("api/sport/{id}")]
        public Sport Get(Guid id)
        {
            var sport = _daoSport.Get(id);
            return sport;
        }




    }
}