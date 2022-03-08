using System.Collections.Generic;
using KeepMovinAPI.Repository;
using KeepMovinAPI.Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace KeepMovinAPI.Controllers
{
    [Route("api/[controller]")]
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
        public IEnumerable<EventType> GetAll()
        {
            var listOfTypes = _daoType.GetAll();
            return listOfTypes;
        }
        
        
    }
}