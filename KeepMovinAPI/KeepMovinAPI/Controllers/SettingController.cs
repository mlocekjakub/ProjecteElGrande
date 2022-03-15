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

namespace KeepMovinAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SettingController : ControllerBase
    {
        private readonly ILogger<SettingController> _logger;
        private ISettingDao _settingDao;
        private IValidation _validation;

        public SettingController(ILogger<SettingController> logger, ISettingDao settingDao,
             IValidation validation)
        {
            _logger = logger;
            _settingDao = settingDao;
            _validation = validation;
        }


        [HttpPost("edit")]  
        public IActionResult Edit(SettingsDto settings) 
        {
            try
            {
                string jwt = Request.Cookies["token"];
                if (_validation.Validate(settings.UserId, jwt))
                {
                    ///jeżeli tak to mapujemy na model i wysyłamy do bazy danych
                    return Ok();
                }
                return Unauthorized();
            }
            catch (Exception e)
            {
                _logger.LogWarning(Convert.ToString(e));
                return Unauthorized();
            }
            

        }

        [HttpGet("upload")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(Setting))]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        public IActionResult Upload([FromHeader(Name = "etag")]string userId)
        {

            try
            {
                if (!Guid.TryParse(userId, out _))
                    return Unauthorized();
                string jwt = Request.Cookies["token"];
                if (!_validation.Validate(Guid.Parse(userId), jwt))
                    return Unauthorized();
                //////// Wyciągamy obiekt z bazy///
                Setting setting = new Setting
                {
                    Location = true,
                    FollowersFollowing = false,
                    Statistics = true,
                    AboutMe = false,
                    UpcomingEvents = true,
                    PreviousEvents = false,
                    Photo = true

                };
                return Ok(setting);
            }
            catch(Exception e)
            {
                _logger.LogWarning(Convert.ToString(e));
                return Unauthorized();
            }            

        }



    }
}