using System;
using KeepMovinAPI.Domain;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using KeepMovinAPI.Dtos;

namespace KeepMovinAPI.Repository.Implementations


{
    public class SettingDao : ISettingDao
    {
        private readonly KeepMovinDbContext _context;

        public SettingDao(KeepMovinDbContext context)
        {
            _context = context;
        }

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
            var query = _context.Setting.Find(id);
            return query;
        }


        public IEnumerable<Setting> GetAll()
        {
            throw new System.NotImplementedException();
        }



        public void Update(Setting current,SettingsDto upDated)
        {
            current.AboutMe = upDated.AboutMe;
            current.PreviousEvents = upDated.PreviousEvents;
            current.FollowersFollowing = upDated.FollowersFollowing;
            current.Statistics = upDated.Statistics;
            current.UpcomingEvents = upDated.UpcomingEvents;
            current.Location = upDated.Location;
            current.Photo = upDated.Photo;

            _context.Setting.Update(current);
            _context.SaveChanges();

        }


    }
}
