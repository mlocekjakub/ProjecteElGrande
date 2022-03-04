using System;
using System.Collections.Generic;
using KeepMovinAPI.Authentication;
using KeepMovinAPI.DAOs;
using KeepMovinAPI.Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace KeepMovinAPI.Controllers
{
    [ApiController]
    public class TypeController : ControllerBase
    {
        private readonly ILogger<SportController> _logger;
        private ITypeDao _daoType;

        public TypeController(ILogger<SportController> logger, ITypeDao daoType)
        {
            _logger = logger;
            _daoType = daoType;
        }
        
        [HttpGet]
        [Route("api/types")]
        public IEnumerable<EventType> GetAll()
        {
            var listOfTypes = _daoType.GetAll();
            return listOfTypes;
        }
        
        
    }
}