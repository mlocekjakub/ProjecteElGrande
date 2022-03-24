using System;
using System.Collections.Generic;

namespace KeepMovinAPI.Repository
{
    public interface IRepository<T>
    {
        void Add(T item);
        void Remove(Guid id);
        T Get(Guid id);
        IEnumerable<T> GetAll();
    }
}