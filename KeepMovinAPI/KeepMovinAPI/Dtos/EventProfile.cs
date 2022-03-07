using AutoMapper;

namespace KeepMovinAPI.Domain.Dtos
{
    public class EventProfile : Profile
    {
        public EventProfile()
        {
            CreateMap<Event, EventDto>().ReverseMap();
        }
    }
}