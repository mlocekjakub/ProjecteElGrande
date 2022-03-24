using System.Collections.Generic;
using KeepMovinAPI.Repository;
using KeepMovinAPI.Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;

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
        public IEnumerable<EventType> GetAll()
        {
            try
            {
                var listOfTypes = _repositoryType.GetAll();
                return listOfTypes;
            }
            catch(Exception e)
            {
                _logger.LogWarning(Convert.ToString(e));
                return null;
            }
            
        }
        
        
    }
}