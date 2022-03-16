using KeepMovinAPI.Repository;
using KeepMovinAPI.Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using KeepMovinAPI.Authentication;
using Microsoft.AspNetCore.Http;
using System;
using System.Linq;
using KeepMovinAPI.Domain.Dtos;

namespace KeepMovinAPI.Controllers
{
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly ILogger<UserController> _logger;
        private IUserDao _userDao;
        private ISettingDao _settingDao;
        private IUserProfileRepository _profileRepository;
        private readonly IJwtAuthenticationManager _jwtAuthenticationManager;
        private IValidation _validation;

        public UserController(ILogger<UserController> logger, IUserDao userDao, IJwtAuthenticationManager jwt, ISettingDao setting,
           IUserProfileRepository profileRepository, IValidation validation)
        {
            _settingDao = setting;
            _logger = logger;
            _userDao = userDao;
            _jwtAuthenticationManager = jwt;
            _profileRepository = profileRepository;
            _validation = validation;

        }

        [HttpPost]
        [Route("/user/changePassword")]
        public StatusCodeResult ChangePassword(ChangePasswordDto changePasswordItems)
        {
            try
            {
                if (changePasswordItems.NewPassword != changePasswordItems.ConfirmPassword)
                    return StatusCode(303);
                string jwt = Request.Cookies["token"];
                if (!_validation.Validate(changePasswordItems.Userid, jwt))
                    return StatusCode(303);

                User user = _userDao.Get(changePasswordItems.Userid);

                if (!_userDao.ComparePasswords(changePasswordItems.OldPassword,user.Password))
                    return StatusCode(303);

                _userDao.UpdatePassword(user, changePasswordItems.NewPassword);
                return StatusCode(200);

            }
            catch(Exception e)
            {
                _logger.LogWarning(Convert.ToString(e));
                return StatusCode(303);
            }
            
        }



        [HttpPost]
        [Route("/user/reminder")]
        public StatusCodeResult Reminder(UserEmail userEmail)
        {
            try
            {
                User user = _userDao.GetUserByEmail(userEmail.Email);
                if (_userDao.CheckIfUserExists(user))
                {
                    // Some Actions Made
                    return StatusCode(200);
                }

                return StatusCode(303);
            }
            catch (Exception e)
            {
                _logger.LogWarning(Convert.ToString(e));
                return StatusCode(303);
            }
        }

        [HttpPost]
        [Route("/user/register")]
        public StatusCodeResult Register(User user)
        {
            try
            {
                if (_userDao.CheckIfUserExists(user))
                {
                    return StatusCode(303);
                }
                CreateAUserInfrastructure(user);
                return StatusCode(200);


            }
            catch(Exception e)
            {
                _logger.LogWarning(Convert.ToString(e));
                return StatusCode(303);
            }
            
        }


        [HttpPost]
        [Route("/user/login")]
        public IActionResult Login(User user)
        {
            try
            {
                var dataBaseUser = _userDao.GetUserByEmail(user);
                var token = _jwtAuthenticationManager.Authenticate(dataBaseUser, user, _userDao);
                if (token == null)
                    return Unauthorized();

                Response.Cookies.Append("token", value: token, new CookieOptions
                {
                    HttpOnly = true,
                });

                return Ok(dataBaseUser.Userid);
            }
            catch(Exception e)
            {
                _logger.LogWarning(Convert.ToString(e));
                return StatusCode(303);
            }
            
        }



        [HttpPost("/user/logOut")]
        public IActionResult Logout()
        {
            try
            {
                Response.Cookies.Delete("token");
                return Ok();
            }
            catch(Exception e)
            {
                _logger.LogError(Convert.ToString(e));
                return BadRequest();
            }
           
        }


        [HttpGet("/user/validate")]
        public IActionResult Validate()
        {

            try
            {
                var jwt = Request.Cookies["token"];
                var token = _jwtAuthenticationManager.Verify(jwt);
                var tokenClaims = token.Claims.ToList();
                var user = _userDao.GetUserByEmail(tokenClaims[0].Value);
                return Ok(Convert.ToString(user.Userid));
            }
            catch (Exception e)
            {
                _logger.LogWarning(Convert.ToString(e));
                return Unauthorized();
            }
        }

        [NonAction]
        private void CreateAUserInfrastructure(User user)
        {
            _userDao.Add(user);
            Setting settings = new Setting();
            _settingDao.Add(settings);
            UserProfile profile = new UserProfile();
            profile.AddUser(user);
            profile.AddSettings(settings);
            _profileRepository.Add(profile);
        }
    }
}