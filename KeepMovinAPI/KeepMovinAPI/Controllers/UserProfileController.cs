using KeepMovinAPI.Repository;
using KeepMovinAPI.Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using KeepMovinAPI.Authentication;



namespace KeepMovinAPI.Controllers
{
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        private readonly ILogger<UserProfileController> _logger;
        private readonly IJwtAuthenticationManager _jwtAuthenticationManager;
        private IUserProfileRepository _userDao;

        public UserProfileController(ILogger<UserProfileController> logger, IJwtAuthenticationManager jwt, IUserProfileRepository userDao)
        {
            _logger = logger;
            _jwtAuthenticationManager = jwt;
            _userDao = userDao;

        }

       
    }
}