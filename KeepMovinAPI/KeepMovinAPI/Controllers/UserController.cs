using System;
using System.Collections.Generic;
using KeepMovinAPI.DAOs;
using KeepMovinAPI.DAOs.Implementations;
using KeepMovinAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using KeepMovinAPI.Authentication;
using Microsoft.AspNetCore.Authorization;

namespace KeepMovinAPI.Controllers
{
    [Authorize]
	[ApiController]
    public class UserController :  ControllerBase
	{

        private readonly ILogger<UserController> _logger;
        private IUserDao _userDao;
        private readonly IJwtAuthenticationManager _jwtAuthenticationManager;
        public UserController(ILogger<UserController> logger, UserDao userDao, IJwtAuthenticationManager jwt)
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
            return Ok(token);
        }

    
    }









}

