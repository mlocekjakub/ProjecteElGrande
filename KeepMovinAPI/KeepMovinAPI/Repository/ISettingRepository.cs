using KeepMovinAPI.Domain;
using KeepMovinAPI.Dtos;
using System;

namespace KeepMovinAPI.Repository
{
    public interface ISettingRepository:IRepository<Setting>
    {

        public void Update(Setting current,SettingsDto upDated);

       
    }
}
