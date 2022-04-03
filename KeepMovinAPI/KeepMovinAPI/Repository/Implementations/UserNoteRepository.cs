using System;
using System.Collections.Generic;
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
        // public void Add(UserNote newUserNote)
        // {
        //     _context.UserNote.Add(newUserNote);
        //     _context.SaveChanges();
        // }

        public void Add(UserNote item)
        {
            _context.UserNote.Add(item);
            _context.SaveChanges();
        }

        public void Remove(Guid id)
        {
            throw new NotImplementedException();
        }

        public UserNote Get(Guid id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<UserNote> GetAll()
        {
            throw new NotImplementedException();
        }

        public IEnumerable<UserNote> GetAllByUser(Guid userId)
        {
            throw new NotImplementedException();
        }
    }
}