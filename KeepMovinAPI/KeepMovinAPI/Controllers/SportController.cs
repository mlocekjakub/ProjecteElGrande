using System.Collections.Generic;
using KeepMovinAPI.DAOs;
using KeepMovinAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace KeepMovinAPI.Controllers
{
    [Authorize]
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
        
        [AllowAnonymous]
        [HttpGet]
        [Route("api/sports")]
        public IEnumerable<Sport> GetAll()
        {
            var listOfSports = _daoSport.GetAll();
            return listOfSports;
        }
    }
}