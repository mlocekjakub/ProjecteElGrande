using KeepMovinAPI.Models;
using KeepMovinAPI.DAOs;
using System.IdentityModel.Tokens.Jwt;

namespace KeepMovinAPI.Authentication
{
	public interface IJwtAuthenticationManager
	{
		string Authenticate(User dataBaseUser,User loginUser,IUserDao dao);

		JwtSecurityToken Verify(string jwt);
	}
}
