using System;
using System.Collections.Generic;
using KeepMovinAPI.Repository;
using KeepMovinAPI.Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Http;

namespace KeepMovinAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SportController : ControllerBase
    {
        private readonly ILogger<SportController> _logger;
        private ISportRepository _repositorySport;

        public SportController(ILogger<SportController> logger, ISportRepository repositorySport)
        {
            _logger = logger;
            _repositorySport = repositorySport;
        }
        

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IEnumerable<Sport>))]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult GetAll()
        {
            try
            {
                var listOfSports = _repositorySport.GetAll();
                return Ok(listOfSports);
            }
            catch (Exception e)
            {
                _logger.LogWarning(Convert.ToString(e));
                return BadRequest();
            }
            
        }
        

        [HttpGet]
        [Route("{input}")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IEnumerable<Sport>))]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult GetByInput(string input)
        {
            try
            {
                var listOfEvents = _repositorySport.GetByInput(input);
                return Ok(listOfEvents);
            }
            catch(Exception e)
            {
                _logger.LogWarning(Convert.ToString(e));
                return BadRequest();
            }
            
        }
        
        [HttpGet]
        [Route("id/{id}")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(Sport))]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult Get(Guid id)
        {
            try
            {
                var sport = _repositorySport.Get(id);
                return Ok(sport);
            }
            catch(Exception e)
            {

                _logger.LogWarning(Convert.ToString(e));
                return BadRequest();
            }
            
        }




    }
}