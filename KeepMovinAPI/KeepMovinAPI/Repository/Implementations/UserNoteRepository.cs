using System;
using System.Collections.Generic;
using System.Linq;
using KeepMovinAPI.Domain;

namespace KeepMovinAPI.Repository.Implementations
{
    public class UserNoteRepository : IUserNoteRepository
    {
        private readonly KeepMovinDbContext _context;

        public UserNoteRepository(KeepMovinDbContext context)
        {
            _context = context;
        }

        public void Add(UserNote item)
        {
            _context.UserNote.Add(item);
            _context.SaveChanges();
        }

        public void Remove(Guid id)
        {
            var noteToRemove = _context.UserNote.First(note => note.NoteId == id);
            _context.UserNote.Remove(noteToRemove);
            _context.SaveChanges();
        }

        public UserNote Get(Guid id)
        {
            var query = _context.UserNote.First(i => i.NoteId == id);
            return query;
        }

        public IEnumerable<UserNote> GetAllUserNotesByEventId(Guid userId, Guid eventId)
        {
            var query = _context.UserNote.Where(i => i.UserId == userId && i.EventId == eventId);
            return query;
        }

        public IEnumerable<UserNote> GetAllByUser(Guid userId)
        {
            var query = _context.UserNote.Where(i => i.UserId == userId);
            return query;
        }
        
        public IEnumerable<UserNote> GetAll()
        {
            throw new NotImplementedException();
        }
    }
}