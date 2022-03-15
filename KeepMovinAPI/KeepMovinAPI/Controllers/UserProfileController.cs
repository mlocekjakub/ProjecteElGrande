using KeepMovinAPI.Repository;
using KeepMovinAPI.Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using KeepMovinAPI.Authentication;
using System;
using System.Linq;

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


     


    }
}