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

namespace KeepMovinAPI.Controllers
{

	[ApiController]
    public class UserController :  ControllerBase
	{

        private readonly ILogger<UserController> _logger;
        private IUserDao _userDao;
        public UserController(ILogger<UserController> logger, UserDao userDao)
		{
			_logger = logger;
            _userDao = userDao;
                  
		}

		[HttpPost]
        [Route("/user/register")]
        public StatusCodeResult Register(User user)
        {
            if (_userDao.CheckIfUserExists(user))
            {
                return StatusCode(666);            
            }
            _userDao.Add(user);
            return StatusCode(200);

        }

        [HttpPost]
        [Route("/user/login")]
        public StatusCodeResult Login(User user)
        {           
            var dataBaseUser = _userDao.GetUserByEmail(user);
            if(!_userDao.CheckIfUserExists(user))
            {
                return StatusCode(666);
            }
            if (!_userDao.CompareUsers(dataBaseUser,user))
            {
                return StatusCode(666);
            }
            return StatusCode(200);
                
        }

    
    }









}

