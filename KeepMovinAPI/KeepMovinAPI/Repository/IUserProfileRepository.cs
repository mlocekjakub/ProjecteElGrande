using System;
using KeepMovinAPI.Domain;
using KeepMovinAPI.Domain.Dtos;
using System;
using KeepMovinAPI.Dtos;

namespace KeepMovinAPI.Repository
{
    public interface IUserProfileRepository : IRepository<UserProfile>
    {
        public ProfilePersonalInfoDto GetProfilePersonalInfoById(Guid userId);
        public Setting GetSettingsByUserId(Guid userId);

        public void UpdateUserProfile(UserProfileDto upDated ); 






    }
}
