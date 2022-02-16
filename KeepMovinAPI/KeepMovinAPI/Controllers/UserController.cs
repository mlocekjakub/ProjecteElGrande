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
        private UserDao _dao;
        public UserController(ILogger<UserController> logger, UserDao dao)
		{
			_logger = logger;
            _dao = dao;
                  
		}

		[HttpPost]
        [Route("/user/register")]
        public StatusCodeResult Register(User user)
        {
            if (_dao.CheckIfUserExists(user))
            {
                return StatusCode(666);            
            }
            _dao.Add(user);
            return StatusCode(200);

        }

        [HttpPost]
        [Route("/user/login")]
        public StatusCodeResult Login(User user)
        {           
            var dataBaseUser = _dao.GetUserByEmail(user);
            if(!_dao.CheckIfUserExists(user))
            {
                return StatusCode(666);
            }
            if (!_dao.CompareUsers(dataBaseUser,user))
            {
                return StatusCode(666);
            }
            return StatusCode(200);
                
        }

    
    }









}

