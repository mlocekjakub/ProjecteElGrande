using AutoMapper;
using KeepMovinAPI.Domain;
using KeepMovinAPI.Domain.Dtos;
using KeepMovinAPI.Dtos;

namespace KeepMovinAPI.Configuration
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<UserProfile, UserProfileDto>();
            CreateMap<SettingsDto, Setting>();
            CreateMap<UserNoteDto, UserNote>();
        }
    }
}