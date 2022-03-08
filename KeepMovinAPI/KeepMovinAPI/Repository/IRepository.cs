using System;
using System.Collections.Generic;

namespace KeepMovinAPI.Repository
{
    public interface IDao<T>
    {
        void Add(T item);
        void Remove(Guid id);
        T Get(Guid id);
        IEnumerable<T> GetAll();
    }
}