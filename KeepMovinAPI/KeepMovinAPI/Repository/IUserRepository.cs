using KeepMovinAPI.Domain;
using System;

namespace KeepMovinAPI.Repository
{
    public interface IUserRepository : IRepository<User>
    {
        public User GetUserByEmail(User user);
        public User GetUserByEmail(string email);
        public bool CheckIfUserExists(User user);
        public bool CompareUsers(User dataBaseUser, User loginUser);

        public void UpdatePassword(User user, string newPassword);

        public bool ComparePasswords(string passwordInput, string passwordDataBase);

    }
}