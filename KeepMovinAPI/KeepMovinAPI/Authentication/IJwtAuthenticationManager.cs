using KeepMovinAPI.DAOs.Implementations;
using KeepMovinAPI.Models;
using System;

namespace KeepMovinAPI.Authentication
{
	public interface IJwtAuthenticationManager
	{
		string Authenticate(User dataBaseUser,User loginUser,UserDao dao);
	}
}
