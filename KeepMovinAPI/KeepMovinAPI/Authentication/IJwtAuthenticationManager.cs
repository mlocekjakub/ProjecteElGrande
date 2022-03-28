using KeepMovinAPI.Domain;
using KeepMovinAPI.Repository;
using System.IdentityModel.Tokens.Jwt;

namespace KeepMovinAPI.Authentication
{
	public interface IJwtAuthenticationManager
	{
		string Authenticate(User dataBaseUser,User loginUser,IUserRepository userRepository);

		JwtSecurityToken Verify(string jwt);
	}
}
