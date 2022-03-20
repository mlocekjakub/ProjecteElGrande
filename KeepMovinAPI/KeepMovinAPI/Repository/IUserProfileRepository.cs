using System;
using KeepMovinAPI.Domain;
using KeepMovinAPI.Domain.Dtos;
using System;

namespace KeepMovinAPI.Repository
{
    public interface IUserProfileRepository : IDao<UserProfile>
    {
        public ProfilePersonalInfoDto GetProfilePersonalInfoById(Guid userId);
        public Setting GetSettingsByUserId(Guid userId);






    }
}
