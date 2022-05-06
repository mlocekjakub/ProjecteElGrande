using System;
using System.Collections.Generic;
using AutoMapper;
using KeepMovinAPI.Authentication;
using KeepMovinAPI.Domain;
using KeepMovinAPI.Domain.Dtos;
using KeepMovinAPI.Dtos;
using KeepMovinAPI.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace KeepMovinAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserNoteController : ControllerBase
    {
        private readonly ILogger<UserNoteController> _logger;
        private readonly IMapper _mapper;
        private IValidation _validation;
        private IUserNoteRepository _userNoteRepository;
        private IUserRepository _userRepository;

        public UserNoteController(ILogger<UserNoteController> logger, IUserNoteRepository userNoteRepository,
            IUserRepository userRepository, IMapper mapper, IValidation validation)
            
        {
            _logger = logger;
            _mapper = mapper;
            _userNoteRepository = userNoteRepository;
            _userRepository = userRepository;
            _validation = validation;
            
        }

        [HttpGet("note")]
        public IActionResult GetNoteById([FromHeader(Name = "Note")]Guid noteId)
        {
            try
            {
                UserNote userNote = _userNoteRepository.Get(noteId);
                return Ok(userNote);
            }
            catch (Exception e)
            {
                _logger.LogWarning(Convert.ToString(e));
                return BadRequest();
            }
        }
        
        [HttpGet("event-notes")]
        public IActionResult GetUserNotesByEventId([FromHeader(Name = "Session")]Guid userId, [FromHeader(Name = "Event")]Guid eventId)
        {
            try
            {
                IEnumerable<UserNote> userNote = _userNoteRepository.GetAllUserNotesByEventId(userId, eventId);
                return Ok(userNote);
            }
            catch (Exception e)
            {
                _logger.LogWarning(Convert.ToString(e));
                return BadRequest();
            }
        }

        [HttpGet("user-notes")]
        public IActionResult GetNotesByUserId([FromHeader(Name = "User")] Guid userId)
        {
            try
            {
                IEnumerable<UserNote> userNotes = _userNoteRepository.GetAllByUser(userId);
                return Ok(userNotes);
            }
            catch (Exception e)
            {
                _logger.LogWarning(Convert.ToString(e));
                return BadRequest();
            }
        }

        [HttpPost("add-note")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        public IActionResult Add(UserNoteDto newUserNote)
        {
            
            try
            {
                string jwt = Request.Cookies["token"];
                if (!_validation.Validate(newUserNote.UserId, jwt))
                    return Unauthorized();
                var userNote = _mapper.Map<UserNote>(newUserNote);
                _userNoteRepository.Add(userNote);
                return Ok();
            }
            catch (Exception e)
            {
                _logger.LogWarning(Convert.ToString(e));
                return BadRequest();
            }
        }
        
        [HttpGet("remove-note")]
        public IActionResult RemoveNoteById([FromHeader(Name = "Session")] Guid userId, [FromHeader(Name = "Note")] Guid noteId)
        {
            try
            {
                _userNoteRepository.Remove(noteId);
                return Ok();
            }
            catch (Exception e)
            {
                _logger.LogWarning(Convert.ToString(e));
                return BadRequest();
            }
        }
    }
}