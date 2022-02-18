
using KeepMovinAPI.DAOs;
using KeepMovinAPI.DAOs.Implementations;
using KeepMovinAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using KeepMovinAPI.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;


namespace KeepMovinAPI.Controllers
{
    [Authorize]
	[ApiController]
    public class UserController :  ControllerBase
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

            Response.Cookies.Append("token",value:token,new CookieOptions
            {
                HttpOnly = true,
            });

            return Ok();
        }

    
    }









}

