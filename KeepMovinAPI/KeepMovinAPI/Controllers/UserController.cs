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
        private IDao<User> _dao;
        public UserController(ILogger<UserController> logger, IDao<User> dao)
		{
			_logger = logger;
            _dao = dao;
        
		}

		[HttpPost]
        [Route("/user/register")]
        public void Register(User user)
        {
           _logger.LogInformation(user.Password);
            _logger.LogInformation(user.Email);

        }

        [HttpPost]
        [Route("/user/login")]
        public void Login(User user)
        {
           _logger.LogInformation(user.Password);
            _logger.LogInformation(user.Email);

        }
	
    }









}

