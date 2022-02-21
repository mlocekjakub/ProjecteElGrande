using KeepMovinAPI.Models;
using KeepMovinAPI.DAOs;

namespace KeepMovinAPI.Authentication
{
	public interface IJwtAuthenticationManager
	{
		string Authenticate(User dataBaseUser,User loginUser,IUserDao dao);
	}
}
