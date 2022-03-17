using System;
using System.Collections.Generic;
using KeepMovinAPI.Repository;
using KeepMovinAPI.Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections;
using System.Linq;

namespace KeepMovinAPI.Controllers
{
    [Route("api/[controller]")]
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
        public IEnumerable<Sport> GetAll()
        {
            try
            {
                var listOfSports = _daoSport.GetAll();
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
                var listOfEvents = _daoSport.GetByInput(input);
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
                var sport = _daoSport.Get(id);
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