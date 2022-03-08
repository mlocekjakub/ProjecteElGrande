using System.Collections.Generic;
using KeepMovinAPI.Repository;
using KeepMovinAPI.Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace KeepMovinAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ExperienceController : ControllerBase
    {
        private readonly ILogger<ExperienceController> _logger;
        private IExperienceDao _daoExperience;

        public ExperienceController(ILogger<ExperienceController> logger, IExperienceDao daoExperience)
        {
            _logger = logger;
            _daoExperience = daoExperience;
        }

        [HttpGet]
        public IEnumerable<ExperienceLevel> GetAll()
        {
            var listOfExperiences = _daoExperience.GetAll();
            return listOfExperiences;
        }
    }
}