using KeepMovinAPI.Domain;
using System;

namespace KeepMovinAPI.Repository
{
    public interface IUserProfileRepository : IDao<UserProfile>
    {
        public Setting GetSettingsByUserId(Guid userId);
    }
}
