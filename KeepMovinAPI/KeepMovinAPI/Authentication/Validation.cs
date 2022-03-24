using System;
using System.Linq;
using KeepMovinAPI.Authentication;
using KeepMovinAPI.Controllers;
using KeepMovinAPI.Domain;
using KeepMovinAPI.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

public class Validation:IValidation
{

    private IJwtAuthenticationManager _jwtAuthenticationManager;
    private IUserRepository _userRepository;
    private readonly ILogger<Validation> _logger;


    public Validation(IJwtAuthenticationManager jwt,IUserRepository userRepository, ILogger<Validation> logger)
	{
        _jwtAuthenticationManager = jwt;
        _userRepository = userRepository;
        _logger = logger;


	}

    public bool Validate(Guid userId, string jwt)
    {
        try
        {
            var token = _jwtAuthenticationManager.Verify(jwt);
            var tokenClaims = token.Claims.ToList();
            var user = _userRepository.GetUserByEmail(tokenClaims[0].Value);
            if (userId == user.Userid)
                return true;
            return false;
        }
        catch (Exception e)
        {
            _logger.LogWarning(Convert.ToString(e));
            return false;
        }
    }
}
