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
        private IUserRepository _userRepository;
        private ISettingRepository _settingRepository;
        private IUserProfileRepository _profileRepository;
        private readonly IJwtAuthenticationManager _jwtAuthenticationManager;
        private IValidation _validation;

        public UserController(ILogger<UserController> logger, IUserRepository userRepository, IJwtAuthenticationManager jwt, ISettingRepository setting,
           IUserProfileRepository profileRepository, IValidation validation)
        {
            _settingRepository = setting;
            _logger = logger;
            _userRepository = userRepository;
            _jwtAuthenticationManager = jwt;
            _profileRepository = profileRepository;
            _validation = validation;

        }

        [HttpPost]
        [Route("/user/changePassword")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public StatusCodeResult ChangePassword(ChangePasswordDto changePasswordItems)
        {
            try
            {
                string jwt = Request.Cookies["token"];
                User user = _userRepository.Get(changePasswordItems.Userid);
                if (!ChangePasswordProcedureValidation(changePasswordItems,jwt,user))
                    return Unauthorized();
                _userRepository.UpdatePassword(user, changePasswordItems.NewPassword);
                return Ok();

            }
            catch(Exception e)
            {
                _logger.LogWarning(Convert.ToString(e));
                return BadRequest() ;
            }
            
        }


        [HttpPost]
        [Route("/user/reminder")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public StatusCodeResult Reminder(UserEmail userEmail)
        {
            try
            {
                User user = _userRepository.GetUserByEmail(userEmail.Email);
                if (_userRepository.CheckIfUserExists(user))
                {
                    // Some Actions Made // in construction
                    return Ok();
                }

                return BadRequest();
            }
            catch (Exception e)
            {
                _logger.LogWarning(Convert.ToString(e));
                return BadRequest();
            }
        }

        [HttpPost]
        [Route("/user/register")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status409Conflict)]
        public StatusCodeResult Register(User user)
        {
            try
            {
                if (_userRepository.CheckIfUserExists(user))
                {
                    return StatusCode(409);
                }
                CreateAUserInfrastructure(user);
                return Ok();


            }
            catch(Exception e)
            {
                
                _logger.LogWarning(Convert.ToString(e));
                return BadRequest();
            }
            
        }


        [HttpPost]
        [Route("/user/login")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(Guid))]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        public IActionResult Login(User user)
        {
            try
            {
                var dataBaseUser = _userRepository.GetUserByEmail(user);
                var token = _jwtAuthenticationManager.Authenticate(dataBaseUser, user, _userRepository);
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
                return BadRequest();
            }
            

        }



        [HttpPost("/user/logOut")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
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
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(String))]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        public IActionResult Validate()
        {

            try
            {
                var jwt = Request.Cookies["token"];
                var token = _jwtAuthenticationManager.Verify(jwt);
                var tokenClaims = token.Claims.ToList();
                var user = _userRepository.GetUserByEmail(tokenClaims[0].Value);
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
            _userRepository.Add(user);
            Setting settings = new Setting();
            _settingRepository.Add(settings);
            UserProfile profile = new UserProfile();
           
            profile.AddUser(user);
            profile.AddSettings(settings);
            _profileRepository.Add(profile);
        }

        [NonAction]
        private bool ChangePasswordProcedureValidation(ChangePasswordDto changePasswordItems, string jwt,User user)
        {

            if (changePasswordItems.NewPassword != changePasswordItems.ConfirmPassword)
                return false;

            if (!_validation.Validate(changePasswordItems.Userid, jwt))
                return false;

            
            if (!_userRepository.ComparePasswords(changePasswordItems.OldPassword, user.Password))
                return false;

            return true;
        }
    }
}