using KeepMovinAPI.Repository;
using KeepMovinAPI.Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using KeepMovinAPI.Authentication;
using System;
using System.Linq;
using Microsoft.AspNetCore.Http;

namespace KeepMovinAPI.Controllers
{
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        private readonly ILogger<UserProfileController> _logger;
        private IUserProfileRepository _userProfileDao;
        private IValidation _validation;

        public UserProfileController(ILogger<UserProfileController> logger,
            IUserProfileRepository userProfileDao,IValidation validation)
        {
            _logger = logger;
            _userProfileDao = userProfileDao;
            _validation = validation;

        }

        [HttpGet("uploadProfileInformation")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(Setting))]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        public IActionResult Upload([FromHeader(Name = "etag")] string userId)
        {
            if (!Guid.TryParse(userId, out _))
                return Unauthorized();
            string jwt = Request.Cookies["token"];
            if (!_validation.Validate(Guid.Parse(userId), jwt))
                return Unauthorized();

            //////// Wyciągamy obiekt z bazy///
           
            return Ok();



        }





    }
}