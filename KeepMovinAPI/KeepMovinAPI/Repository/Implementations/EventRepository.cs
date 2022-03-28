using System;
using System.Collections.Generic;
using System.Linq;
using KeepMovinAPI.Domain;
using KeepMovinAPI.Domain.Dtos;
using KeepMovinAPI.Dtos;
using Microsoft.EntityFrameworkCore;


namespace KeepMovinAPI.Repository.Implementations
{
    public class EventRepository : IEventRepository
    {
        private readonly KeepMovinDbContext _context;

        public EventRepository(KeepMovinDbContext context)
        {
            _context = context;
        }

        public void Add(Event eventModel, Guid userId)
        {
            ExperienceLevel experienceLevel = _context.ExperienceLevel.Find(eventModel.ExperienceLevel.ExperienceLevelId);
            eventModel.ExperienceLevel = experienceLevel;
            Sport sport = _context.Sport.Find(eventModel.Sports.SportId);
            eventModel.Sports = sport;
            EventType eventType = _context.EventType.Find(eventModel.Type.TypeId);
            eventModel.Type = eventType;
            UserProfile userProfile = _context.UserProfile.FirstOrDefault(userProfile => userProfile.Organiser.Userid == userId);
            eventModel.User = userProfile;
            
            _context.Event.Add(eventModel);
            _context.SaveChanges();
        }

        public void Add(Event item)
        {
            throw new NotImplementedException();
        }

        public void Remove(Guid id)
        {
            throw new System.NotImplementedException();
        }

        public Event Get(Guid id)
        {
            var query = _context.Event.Find(id);
            return query;
        }

        public IEnumerable<EventCardDto> GetByInput(string input)
        {
            var sports = _context.Sport.ToList();
            var events = _context.Event.ToList();
            var experiences = _context.ExperienceLevel.ToList();
            //TODO refactor includes
            var joinedTables =
                from eventModel in events
                join sport in sports on eventModel.Sports.SportId equals sport.SportId
                join experience in experiences on eventModel.ExperienceLevel.ExperienceLevelId equals experience
                    .ExperienceLevelId
                select new EventCardDto()
                {
                    EventId = eventModel.EventId,
                    Name = eventModel.Name,
                    StartEvent = eventModel.StartEvent,
                    Sport = eventModel.Sports.Name,
                    ExperienceLevel = eventModel.ExperienceLevel.Name,
                    MaxParticipants = eventModel.MaxParticipants,
                };

            var filteredEvents = joinedTables.Where(i =>
                i.Name.ToLower().StartsWith(input.ToLower()));

            return filteredEvents;
        }

        public IEnumerable<Event> GetAll()
        {
            return _context.Event.ToList();
        }

        public EventsSearchedDto GetFiltered(Filter filter)
        {
            var eventsPerPage = 4;

            var filteredEvents = _context.Event
                .Include(eventModel => eventModel.Location)
                .Include(eventModel => eventModel.Sports)
                .Include(eventModel => eventModel.User)
                .Include(eventModel => eventModel.User.Organiser)
                .Include(eventModel => eventModel.Type)
                .Include(eventModel => eventModel.ExperienceLevel)
                .Where(i =>
                    (i.Price >= filter.MinPrice
                     && i.Price <= filter.MaxPrice)
                    && (i.MaxParticipants >= filter.MinParticipants
                        && i.MaxParticipants <= filter.MaxParticipants)
                    && filter.Sports.Contains(i.Sports.Name)
                    && filter.Type.Contains(i.Type.Name)
                    && (DateTime.Compare(i.StartEvent, DateTime.Parse(filter.MinDate)) > 0)
                    && (DateTime.Compare(i.EndEvent, DateTime.Parse(filter.MaxDate)) < 0)
                    && filter.Experience.Contains(i.ExperienceLevel.Name)).ToList();


            var numberOfPages = Math.Ceiling((decimal) filteredEvents.ToList().Count / eventsPerPage);

            filteredEvents = filteredEvents
                .Skip((filter.CurrentPageNumber - 1) * eventsPerPage)
                .Take(eventsPerPage)
                .ToList();

            var searchedEvents = new EventsSearchedDto(numberOfPages, filteredEvents);

            return searchedEvents;
        }

        public IEnumerable<Event> GetAllByDateRange(DateTime startDate, DateTime endDate)
        {
            var query = _context.Event
                .Where(i =>
                    i.StartEvent >= startDate
                    && i.StartEvent <= endDate
                    || i.EndEvent >= startDate
                ).ToList();
            return query;
        }

        public IEnumerable<Event> GetUserEventsByDateRange(Guid userId, DateTime startDate, DateTime endDate)
        {
            var query = _context.Event
                .Include(e => e.Users)
                .Where(
                    i => i.Users.Any(j => j.Userid == userId)
                         && (i.StartEvent >= startDate
                             && i.StartEvent <= endDate
                             || i.EndEvent >= startDate));
            return query;
        }

        public IEnumerable<Event> GetUserEventsByUserId(Guid id)
        {
            var query = _context.Event
                .Include(e => e.Users)
                .Include(eventModel => eventModel.Location)
                .Include(eventModel => eventModel.Sports)
                .Include(eventModel => eventModel.Type)
                .Include(eventModel => eventModel.ExperienceLevel)
                .Where(i => i.Users.Any(j => j.Userid == id));
            return query;
        }

        public UserEventsDto GetUpcomingEventsById(Guid id, int currentPage)
        {
            var eventsPerPage = 6;
            var eventsPage = _context.Event
                .Include(e => e.Users)
                .Include(e => e.Sports)
                .Where(i => i.Users.Any(j => j.Userid == id) && (i.Status == "Upcoming"));

            var numberOfPages = Math.Ceiling((decimal) eventsPage.ToList().Count / eventsPerPage);

            eventsPage = eventsPage
                .Skip((currentPage - 1) * eventsPerPage)
                .Take(eventsPerPage);

            var profilePageContent = new UserEventsDto(numberOfPages, eventsPage);

            return profilePageContent;
        }

        public UserEventsDto GetPreviousEventsById(Guid id, int currentPage)
        {
            var eventsPerPage = 6;
            var eventsPage = _context.Event
                .Include(e => e.Users)
                .Include(e => e.Sports)
                .Where(i => i.Users.Any(j => j.Userid == id) && (i.Status == "Finished"));

            var numberOfPages = Math.Ceiling((decimal) eventsPage.ToList().Count / eventsPerPage);

            eventsPage = eventsPage
                .Skip((currentPage - 1) * eventsPerPage)
                .Take(eventsPerPage);

            var profilePageContent = new UserEventsDto(numberOfPages, eventsPage);

            return profilePageContent;
        }

        public UserEventsDto GetHostedEventsById(Guid id, int currentPage)
        {
            var eventsPerPage = 6;
            var eventsPage = _context.Event
                .Include(e => e.Users)
                .Include(e => e.User)
                .Include(e => e.Sports)
                .Where(i => i.User.Organiser.Userid == id);

            var numberOfPages = Math.Ceiling((decimal) eventsPage.ToList().Count / eventsPerPage);

            eventsPage = eventsPage
                .Skip((currentPage - 1) * eventsPerPage)
                .Take(eventsPerPage);

            var profilePageContent = new UserEventsDto(numberOfPages, eventsPage);

            return profilePageContent;
        }

        public IEnumerable<Event> GetHostedEventsStatisticsById(Guid id)
        {
            var eventsList = _context.Event
                .Include(e => e.User)
                .Include(e => e.Sports)
                .Where(i => i.User.Organiser.Userid == id);
            return eventsList;
        }



        public void JoinToEvent(Guid userId, Guid eventId)
        {
            var user = _context.User.Find(userId);
            var eventModel = _context.Event.Find(eventId);
            user.Events = new List<Event>();
            user.Events.Add(eventModel);
            _context.SaveChanges();
        }
        
        public void UpdateStatus()
        {
            var eventModelList = _context.Event.Where(eve =>eve.EndEvent<DateTime.Now && eve.Status == "Upcoming" ).ToList();
            foreach (var eventModel in eventModelList)
            {
                eventModel.Status = "Finished";
            }
            _context.SaveChanges();
        }
        
        public IEnumerable<User> GetUsersByEventId(Guid id)
        {
            var query = _context.User
                .Include(e => e.Events)
                .Where(i => i.Events.Any(j => j.EventId == id));
            return query;
        }
    }
}