using AutoMapper;
using KeepMovinAPI.Domain;
using KeepMovinAPI.Domain.Dtos;

namespace KeepMovinAPI.Configuration
{
    public class EventProfile : Profile
    {
        public EventProfile()
        {
            CreateMap<Event, EventDto>().ReverseMap();
            
            CreateMap<Event, EventCardDto>().ReverseMap();
        }
    }
}