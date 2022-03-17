using KeepMovinAPI.Repository;
using KeepMovinAPI.Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using KeepMovinAPI.Authentication;
using System;
using System.Linq;
using KeepMovinAPI.Domain.Dtos;
using Microsoft.AspNetCore.Http;
using KeepMovinAPI.Dtos;
using AutoMapper;

namespace KeepMovinAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserProfileController : ControllerBase
    {
        private readonly ILogger<UserProfileController> _logger;
        private IUserProfileRepository _userProfileDao;
        private readonly IMapper _mapper;
        private IValidation _validation;

        public UserProfileController(ILogger<UserProfileController> logger,
            IUserProfileRepository userProfileDao,IValidation validation, IMapper mapper)
        {
            _logger = logger;
            _userProfileDao = userProfileDao;
            _validation = validation;
            _mapper = mapper; 

        }

        [HttpGet("uploadProfileInformation")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(UserProfileDto))]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        public IActionResult Upload([FromHeader(Name = "etag")] string userId)
        {
            try
            {
                if (!Guid.TryParse(userId, out _))
                    return Unauthorized();
                string jwt = Request.Cookies["token"];
                if (!_validation.Validate(Guid.Parse(userId), jwt))
                    return Unauthorized();

                UserProfile userProfile = _userProfileDao.Get(Guid.Parse(userId));
                return Ok(_mapper.Map<UserProfileDto>(userProfile));

            }
            catch(Exception e)
            {
                _logger.LogError(Convert.ToString(e));
                return Unauthorized();
            }
        }
        
        [HttpGet("{id}")]
        public ProfilePageDto GetProfileById(Guid id)
        {
            var profilePage = _userProfileDao.GetProfilePersonalInfoById(id);
            return profilePage;
            
            
        }


    }
}