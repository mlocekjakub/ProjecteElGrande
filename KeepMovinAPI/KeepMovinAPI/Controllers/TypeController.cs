using System.Collections.Generic;
using KeepMovinAPI.Repository;
using KeepMovinAPI.Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using Microsoft.AspNetCore.Http;

namespace KeepMovinAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TypeController : ControllerBase
    {
        private readonly ILogger<SportController> _logger;
        private ITypeRepository _repositoryType;

        public TypeController(ILogger<SportController> logger, ITypeRepository repositoryType)
        {
            _logger = logger;
            _repositoryType = repositoryType;
        }
        

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IEnumerable<EventType>))]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult GetAll()
        {
            try
            {
                var listOfTypes = _repositoryType.GetAll();
                return Ok(listOfTypes);
            }
            catch(Exception e)
            {
                _logger.LogWarning(Convert.ToString(e));
                return BadRequest();
            }
            
        }
        
        
    }
}