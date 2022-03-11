using KeepMovinAPI.Authentication;
using KeepMovinAPI.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace KeepMovinAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SettingController : ControllerBase
    {
        private readonly ILogger<SettingController> _logger;
        private readonly IJwtAuthenticationManager _jwtAuthenticationManager;
        private ISettingDao _settingDao;

        public SettingController(ILogger<SettingController> logger, ISettingDao settingDao)
        {
            _logger = logger;
            _settingDao = settingDao;
        }
    }
}