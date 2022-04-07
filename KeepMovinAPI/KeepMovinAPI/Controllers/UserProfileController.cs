using KeepMovinAPI.Repository;
using KeepMovinAPI.Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using KeepMovinAPI.Authentication;
using System;
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
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        public IActionResult Upload([FromHeader(Name = "userId")] string userId)
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
                return BadRequest();
            }
        }
        
        [HttpGet("GetUserProfile")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(UserProfileDto))]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        public IActionResult GetUserProfileById([FromHeader(Name = "visitedUserId")] string userId)   
        {
            try
            {
                UserProfile userProfile = _userProfileDao.Get(Guid.Parse(userId));
                return Ok(_mapper.Map<UserProfileDto>(userProfile));

            }
            catch(Exception e)
            {
                _logger.LogError(Convert.ToString(e));
                return BadRequest();
            }
        }
        
        


        [HttpGet("Get")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ProfilePersonalInfoDto))]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        public IActionResult GetProfileById([FromHeader(Name = "userId")] string userId)       
        {
            try
            {
                string jwt = Request.Cookies["token"];
                if (!_validation.Validate(Guid.Parse(userId), jwt))
                    return Unauthorized();
                var profilePage = _userProfileDao.GetProfilePersonalInfoById(Guid.Parse(userId));
                return Ok(profilePage);
            }
            catch (Exception e)
            {
                _logger.LogError(Convert.ToString(e));
                return BadRequest();
            }
            
        }

        [HttpPost("editProfileInformation")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        public IActionResult Edit(UserProfileDto userProfileDto)
        {
            try
            {
                string jwt = Request.Cookies["token"];
                if (!_validation.Validate(userProfileDto.UserId, jwt))
                    return Unauthorized();
                _userProfileDao.UpdateUserProfile(userProfileDto);
                var x = userProfileDto;
                return Ok();

            }
            catch(Exception e)
            {
                _logger.LogError(Convert.ToString(e));
                return BadRequest();
            }
          
        }
        
    }
}