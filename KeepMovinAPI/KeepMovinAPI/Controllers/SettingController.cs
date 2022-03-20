using KeepMovinAPI.Authentication;
using KeepMovinAPI.Domain;
using KeepMovinAPI.Dtos;
using KeepMovinAPI.Domain.Dtos;
using KeepMovinAPI.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Linq;
using static KeepMovinAPI.Dtos.SettingsDto;
using Microsoft.AspNetCore.Http;
using AutoMapper;
using KeepMovinAPI.Repository.Implementations;

namespace KeepMovinAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SettingController : ControllerBase
    {
        private readonly ILogger<SettingController> _logger;
        private IUserProfileRepository _userProfileDao;
        private ISettingDao _settingDao;
        private IValidation _validation;


        public SettingController(ILogger<SettingController> logger, ISettingDao settingDao,
             IValidation validation, IUserProfileRepository userProfileDao)
        {
            _logger = logger;
            _settingDao = settingDao;
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
                if (_validation.Validate(settings.UserId, jwt))
                {
                    Setting currentSettings = _userProfileDao.GetSettingsByUserId(settings.UserId);
                    _settingDao.Update(currentSettings, settings);
                    return Ok();
                }
                return Unauthorized();
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
        public IActionResult Upload([FromHeader(Name = "etag")]string userId)
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

      



    }
}