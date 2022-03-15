using KeepMovinAPI.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using KeepMovinAPI.Domain.Dtos;

namespace KeepMovinAPI.Repository.Implementations
{
    public class UserProfileRepository : IUserProfileRepository
    {
        private readonly KeepMovinDbContext _context;


        public UserProfileRepository(KeepMovinDbContext context)
        {
            _context = context;
        }


        public void Add(UserProfile item)
        {
            _context.UserProfile.Add(item);
            _context.SaveChanges();
        }

        public UserProfile Get(Guid userId)
        {
            /*var sports = _context.Sport.ToList();
            var events = _context.Event.ToList();
            var experiences = _context.ExperienceLevel.ToList();
            var types = _context.EventType.ToList();
            var locations = _context.Location.ToList();
            
            var joinedTables =
                from eventModel in events
                join sport in sports on eventModel.Sports.SportId equals sport.SportId
                join experience in experiences on eventModel.ExperienceLevel.ExperienceLevelId equals experience.ExperienceLevelId
                join type in types on eventModel.Type.TypeId equals type.TypeId
                join location in locations on eventModel.Location.LocationId equals location.LocationId
                
                select new ProfilePageDto()
                {
                    EventId = eventModel.EventId,
                    Name = eventModel.Name,
                    StartEvent = eventModel.StartEvent,
                    EndEvent = eventModel.StartEvent,
                    User = eventModel.User,
                    Sport = eventModel.Sports.Name,
                    ExperienceLevel = eventModel.ExperienceLevel.Name,
                    EventInfo = eventModel.EventInfo,
                    MaxParticipants = eventModel.MaxParticipants,
                    Status = eventModel.Status,
                    Price = eventModel.Price,
                    Currency = eventModel.Currency,
                    Type = eventModel.Type.Name,
                    Location = eventModel.Location.City,
                };*/
            throw new NotImplementedException();
        }

        public IEnumerable<UserProfile> GetAll()
        {
            throw new NotImplementedException();
        }

        public void Remove(Guid id)
        {
            throw new NotImplementedException();
        }
    }
}
