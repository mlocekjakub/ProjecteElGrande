using KeepMovinAPI.Authentication;
using KeepMovinAPI.Domain;
using KeepMovinAPI.Dtos;
using KeepMovinAPI.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using Microsoft.AspNetCore.Http;


namespace KeepMovinAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SettingController : ControllerBase
    {
        private readonly ILogger<SettingController> _logger;
        private IUserProfileRepository _userProfileDao;
        private ISettingRepository _settingRepository;
        private IValidation _validation;


        public SettingController(ILogger<SettingController> logger, ISettingRepository settingRepository,
             IValidation validation, IUserProfileRepository userProfileDao)
        {
            _logger = logger;
            _settingRepository = settingRepository;
            _validation = validation;
            _userProfileDao = userProfileDao;


        }


        [HttpPost("edit")]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        public IActionResult Edit(SettingsDto settings) 
        {
            try
            {
                string jwt = Request.Cookies["token"];
                if (!_validation.Validate(settings.UserId, jwt))              
                    return Unauthorized();               
                Setting currentSettings = _userProfileDao.GetSettingsByUserId(settings.UserId);
                _settingRepository.Update(currentSettings, settings);
                return Ok();
            }
            catch (Exception e)
            {
                _logger.LogWarning(Convert.ToString(e));
                return BadRequest();
            }
            

        }

      

        [HttpGet("upload")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(Setting))]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult Upload([FromHeader(Name = "userId")]string userId)
        {
     
            try
            {
                if (!Guid.TryParse(userId, out _))
                    return Unauthorized();
                string jwt = Request.Cookies["token"];
                if (!_validation.Validate(Guid.Parse(userId), jwt))
                    return Unauthorized();
                Setting settings = _userProfileDao.GetSettingsByUserId(Guid.Parse(userId));
                return Ok(settings);
            }
            catch(Exception e)
            {
                _logger.LogWarning(Convert.ToString(e));
                return BadRequest();
            }            

        }
        
        [HttpGet("upload/visited-user")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(Setting))]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult UploadVisited([FromHeader(Name = "userId")]string userId)    
        {
            try
            {
                Setting settings = _userProfileDao.GetSettingsByUserId(Guid.Parse(userId));
                return Ok(settings);
            }
            catch(Exception e)
            {
                _logger.LogWarning(Convert.ToString(e));
                return BadRequest();
            }            

        }

      



    }
}