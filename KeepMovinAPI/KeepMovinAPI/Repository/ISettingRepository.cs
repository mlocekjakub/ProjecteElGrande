using KeepMovinAPI.Domain;
using KeepMovinAPI.Dtos;
using System;

namespace KeepMovinAPI.Repository
{
    public interface ISettingDao:IDao<Setting>
    {

        public void Update(Setting current,SettingsDto upDated);

       
    }
}
