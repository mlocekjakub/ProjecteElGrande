using KeepMovinAPI.DAOs.Implementations;
using KeepMovinAPI.Models;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using System.Security.Claims;

namespace KeepMovinAPI.Authentication
{
    public class JwtAuthenticationManager : IJwtAuthenticationManager
    {
        private readonly string key;

        public JwtAuthenticationManager(string key)
        {
            this.key = key;
     
        }
        public string Authenticate(User dataBaseUser, User loginUser,UserDao dao)
        {

            if (!dao.CompareUsers(dataBaseUser, loginUser))
            {
                return null;
            }

            var tokenHandler = new JwtSecurityTokenHandler();
            var tokenKey = Encoding.ASCII.GetBytes(key);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, loginUser.Email)
                }),
                Expires = DateTime.UtcNow.AddHours(1),
                SigningCredentials = new SigningCredentials(
                                        new SymmetricSecurityKey(tokenKey),
                                       SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
            
        }
    }





}

