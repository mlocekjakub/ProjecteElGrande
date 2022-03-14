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

    private readonly IJwtAuthenticationManager _jwtAuthenticationManager;
    private readonly IUserDao _userDao;


    public Validation(IJwtAuthenticationManager jwt,IUserDao userDao)
	{
        _jwtAuthenticationManager = jwt;
        _userDao = userDao;


	}

    public bool Validate(Guid userId, string jwt)
    {
        try
        {
            var token = _jwtAuthenticationManager.Verify(jwt);
            var tokenClaims = token.Claims.ToList();
            var user = _userDao.GetUserByEmail(tokenClaims[0].Value);
            if (userId == user.Userid)
                return true;
            return false;
        }
        catch (Exception)
        {
            return false;
        }
    }
}
