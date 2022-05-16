using System;
using System.Collections;
using System.Collections.Generic;
using KeepMovinAPI.Domain;

namespace KeepMovinAPI.Repository
{
    public interface IUserNoteRepository : IRepository<UserNote>
    {
        public new void Add(UserNote item);
        public new void Remove(Guid id);
        public void Edit(Guid noteId, DateTime newTime, string newTitle, string newMessage);

        public IEnumerable<UserNote> GetAllUserNotesByEventId(Guid userId, Guid eventId);
        public IEnumerable<UserNote> GetAllByUser(Guid userId);
    }
}