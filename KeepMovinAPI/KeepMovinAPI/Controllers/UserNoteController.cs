using System;
using AutoMapper;
using KeepMovinAPI.Authentication;
using KeepMovinAPI.Domain;
using KeepMovinAPI.Domain.Dtos;
using KeepMovinAPI.Dtos;
using KeepMovinAPI.Repository;
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
        private readonly IJwtAuthenticationManager _jwtAuthenticationManager;
        private IUserNoteRepository _userNoteRepository;
        private IUserRepository _userRepository;

        public UserNoteController(ILogger<UserNoteController> logger, IUserNoteRepository userNoteRepository,
            IUserRepository userRepository, IMapper mapper,
            IJwtAuthenticationManager jwt)
        {
            _logger = logger;
            _mapper = mapper;
            _userNoteRepository = userNoteRepository;
            _userRepository = userRepository;
            _jwtAuthenticationManager = jwt;
        }

        [HttpPost("add-note")]
        public IActionResult Add(UserNoteDto newUserNote)
        {
            try
            {
                UserNote userNote = new UserNote //TODO refactor, need to use automapper
                {
                    Time = newUserNote.Time,
                    Title = newUserNote.Title,
                    Message = newUserNote.Message,
                    EventId = newUserNote.EventId,
                    UserId = newUserNote.UserId
                };
                // // var userNote = _mapper.Map<UserNote>(newUserNote);
                _userNoteRepository.Add(userNote);
                return Ok();
            }
            catch (Exception e)
            {
                _logger.LogWarning(Convert.ToString(e));
                return Unauthorized();
            }
        }
    }
}