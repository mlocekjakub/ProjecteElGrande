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
        private IDao<Sport> _daoSport;

        public SportController(ILogger<SportController> logger, IDao<Sport> daoSport)
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