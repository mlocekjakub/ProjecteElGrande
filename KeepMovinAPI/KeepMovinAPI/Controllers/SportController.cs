using System;
using System.Collections.Generic;
using KeepMovinAPI.Repository;
using KeepMovinAPI.Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;


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
        public IEnumerable<Sport> GetAll()
        {
            try
            {
                var listOfSports = _repositorySport.GetAll();
                return listOfSports;
            }
            catch (Exception e)
            {
                _logger.LogWarning(Convert.ToString(e));
                return null;
            }
            
        }
        

        [HttpGet]
        [Route("{input}")]
        public IEnumerable<Sport> GetByInput(string input)
        {
            try
            {
                var listOfEvents = _repositorySport.GetByInput(input);
                return listOfEvents;
            }
            catch(Exception e)
            {
                _logger.LogWarning(Convert.ToString(e));
                return null;
            }
            
        }
        
        [HttpGet]
        [Route("id/{id}")]
        public Sport Get(Guid id)
        {
            try
            {
                var sport = _repositorySport.Get(id);
                return sport;
            }
            catch(Exception e)
            {

                _logger.LogWarning(Convert.ToString(e));
                return null;
            }
            
        }




    }
}