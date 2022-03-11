using KeepMovinAPI.Domain;

namespace KeepMovinAPI.Repository
{
    public interface IUserDao : IDao<User>
    {
        public User GetUserByEmail(User user);
        public User GetUserByEmail(string email);
        public bool CheckIfUserExists(User user);
        public bool CompareUsers(User dataBaseUser, User loginUser);

    }
}