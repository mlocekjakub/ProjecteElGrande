using KeepMovinAPI.Domain;
using System;

namespace KeepMovinAPI.Repository
{
    public interface ISettingDao:IDao<Setting>
    {

        public void Update(Setting setting);

       
    }
}
