using System;
using KeepMovinAPI.Domain;
using KeepMovinAPI.Domain.Dtos;

namespace KeepMovinAPI.Repository
{
    public interface IUserProfileRepository : IDao<UserProfile>
    {
        public ProfilePersonalInfoDto GetProfilePersonalInfoById(Guid userId);
    }
}
