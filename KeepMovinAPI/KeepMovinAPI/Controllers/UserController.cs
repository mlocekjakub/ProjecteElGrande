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
using Microsoft.AspNetCore.Http;


namespace KeepMovinAPI.Controllers
{
    [Authorize]
    [ApiController]
    public class UserController : ControllerBase
    {

        private readonly ILogger<UserController> _logger;
        private UserDao _dao;
        private readonly IJwtAuthenticationManager _jwtAuthenticationManager;
        public UserController(ILogger<UserController> logger, UserDao dao, IJwtAuthenticationManager jwt)
        {
            _logger = logger;
            _dao = dao;
            _jwtAuthenticationManager = jwt;

        }

        [AllowAnonymous]
        [HttpPost]
        [Route("/user/register")]
        public StatusCodeResult Register(User user)
        {
            if (_dao.CheckIfUserExists(user))
            {
                return StatusCode(303);
            }
            _dao.Add(user);
            return StatusCode(200);

        }

        [AllowAnonymous]
        [HttpPost]
        [Route("/user/login")]
        public IActionResult Login(User user)
        {
            var dataBaseUser = _dao.GetUserByEmail(user);
            var token = _jwtAuthenticationManager.Authenticate(dataBaseUser, user, _dao);
            if (token == null)
                return Unauthorized();

            Response.Cookies.Append("token", value: token, new CookieOptions
            {
                HttpOnly = true,
            });
            
            return Ok();
        }

        [HttpPost("/user/logout")]
        public IActionResult Logout()
        {
            Response.Cookies.Delete("token");
            return Ok();
                         
        }

    }









}

