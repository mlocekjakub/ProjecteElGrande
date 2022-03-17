using KeepMovinAPI.Domain;

namespace KeepMovinAPI.Repository
{
    public interface ISettingDao:IDao<Setting>
    {

        public void Update(Setting setting);
    }
}
