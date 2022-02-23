
using KeepMovinAPI.DAOs;
using KeepMovinAPI.DAOs.Implementations;
using KeepMovinAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using KeepMovinAPI.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using System;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;

namespace KeepMovinAPI.Controllers
{
    [Authorize]
    [ApiController]
    public class UserController : ControllerBase
    {

        private readonly ILogger<UserController> _logger;
        private IUserDao _userDao;
        private readonly IJwtAuthenticationManager _jwtAuthenticationManager;
        public UserController(ILogger<UserController> logger, IUserDao userDao, IJwtAuthenticationManager jwt)
		{
			_logger = logger;
            _userDao = userDao;
            _jwtAuthenticationManager = jwt;

        }

        [AllowAnonymous]
        [HttpPost]
        [Route("/user/register")]
        public StatusCodeResult Register(User user)
        {
            if (_userDao.CheckIfUserExists(user))
            {
                return StatusCode(303);
            }
            _userDao.Add(user);
            return StatusCode(200);
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("/user/login")]
        public IActionResult Login(User user)
        {           
            var dataBaseUser = _userDao.GetUserByEmail(user);
            var token = _jwtAuthenticationManager.Authenticate(dataBaseUser, user,_userDao);
            if (token == null)
                return Unauthorized();

            Response.Cookies.Append("token", value: token, new CookieOptions
            {
                HttpOnly = true,
            });
            
            return Ok();
        }

        [AllowAnonymous] //Tag tylko i wyłącznie dla testów ,skasować po pełnej implementacji !!!
        [HttpPost("/user/logOut")]
        public IActionResult Logout()
        {
            Response.Cookies.Delete("token");
            return Ok();
                         
        }

        [AllowAnonymous]
        [HttpGet("/user/validate")]
        public IActionResult Validate()
        {
            try
            {
                var jwt = Request.Cookies["token"];
                var token = _jwtAuthenticationManager.Verify(jwt);
                var tokenClaims = token.Claims.ToList();
                var user = _userDao.GetUserByEmail(tokenClaims[0].Value);
                return Ok(Convert.ToString(user.userid));
            }
            catch(Exception)
            {
                return Unauthorized();
            }
        
        }

    }









}

