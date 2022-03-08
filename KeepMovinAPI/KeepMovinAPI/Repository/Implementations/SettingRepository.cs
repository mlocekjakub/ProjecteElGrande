using System;
using KeepMovinAPI.Domain;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using KeepMovinAPI.Domain.Dtos;


namespace KeepMovinAPI.Repository.Implementations


{
    public class SettingDao : ISettingDao
    {
        private readonly KeepMovinDbContext _context;

        public void Add(Setting item)
        {
            _context.Setting.Add(item);
            _context.SaveChanges();
        }

        public void Remove(Guid id)
        {
            throw new System.NotImplementedException();
        }

        public Setting Get(Guid id)
        {
            throw new System.NotImplementedException();
        }

        public IEnumerable<Setting> GetAll()
        {
            throw new System.NotImplementedException();
        }
    }
}
