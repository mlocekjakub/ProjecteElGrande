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

namespace KeepMovinAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SettingController : ControllerBase
    {
        private readonly ILogger<SettingController> _logger;
        private readonly IJwtAuthenticationManager _jwtAuthenticationManager;
        private ISettingDao _settingDao;
        private IUserDao _userDao;

        public SettingController(ILogger<SettingController> logger, ISettingDao settingDao, IUserDao userDao,
            IJwtAuthenticationManager jwt)
        {
            _logger = logger;
            _settingDao = settingDao;
            _userDao = userDao;
            _jwtAuthenticationManager = jwt;
        }

        [HttpPost("edit")]  
        public IActionResult Edit(SettingsDto settings) 
        {          
            string jwt = Request.Cookies["token"];
            if (Validate(settings.UserId, jwt))
            {
                ///jeżeli tak to mapujemy na model i wysyłamy do bazy danych
                return Ok();
            }
            return Unauthorized();

        }

        [HttpPost("upload")]  
        public IActionResult Upload (Guid userId)
        {
            string jwt = Request.Cookies["token"];
            if (Validate(userId, jwt))
            {
                return Ok();
            }

            return Unauthorized();

        }


        [NonAction]
        private bool Validate(Guid userId, string jwt)
        {
            try
            {                 
                var token = _jwtAuthenticationManager.Verify(jwt);
                var tokenClaims = token.Claims.ToList();
                var user = _userDao.GetUserByEmail(tokenClaims[0].Value);
                if (userId == user.Userid)
                    return true;
                return false;
            }
            catch (Exception)
            {
                return false;
            }
        }


    }
}