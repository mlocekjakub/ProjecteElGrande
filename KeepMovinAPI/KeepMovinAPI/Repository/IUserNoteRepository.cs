using System;
using System.Collections;
using System.Collections.Generic;
using KeepMovinAPI.Domain;

namespace KeepMovinAPI.Repository
{
    public interface IUserNoteRepository : IRepository<UserNote>
    {
        public new void Add(UserNote item);
        public IEnumerable<UserNote> GetAllByEventId(Guid eventId);
        public IEnumerable<UserNote> GetAllByUser(Guid userId);
    }
}