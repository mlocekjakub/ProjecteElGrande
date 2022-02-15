using System;
using System.Collections.Generic;
using KeepMovinAPI.DAOs;
using KeepMovinAPI.DAOs.Implementations;
using KeepMovinAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;


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
        public void Register(User user)
        {
            _dao.Add(user);
        }

        [HttpPost]
        [Route("/user/login")]
        public User Login(string Email)
        {
            _logger.LogInformation(Email);
            User user = _dao.GetUserByEmail(Email);
            _logger.LogInformation(user.Password);
            return user;
        }

    
    }









}

