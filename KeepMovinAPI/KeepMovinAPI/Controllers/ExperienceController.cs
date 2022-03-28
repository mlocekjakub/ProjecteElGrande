using System.Collections.Generic;
using KeepMovinAPI.Repository;
using KeepMovinAPI.Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;

namespace KeepMovinAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ExperienceController : ControllerBase
    {
        private readonly ILogger<ExperienceController> _logger;
        private IExperienceRepository _repositoryExperience;

        public ExperienceController(ILogger<ExperienceController> logger, IExperienceRepository repositoryExperience)
        {
            _logger = logger;
            _repositoryExperience = repositoryExperience;
        }

        [HttpGet]
        public IEnumerable<ExperienceLevel> GetAll()
        {
            try
            {
                var listOfExperiences = _repositoryExperience.GetAll();
                return listOfExperiences;
            }
            catch(Exception e)
            {
                _logger.LogWarning(Convert.ToString(e));
                return null;
            }
            
        }
    }
}