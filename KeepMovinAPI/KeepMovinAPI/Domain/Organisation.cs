using System;

namespace KeepMovinAPI.Domain
{
    public class Organisation
    {
        public Guid OrganisationId { get; set; }
        public string Name { get; set; }
        public Boolean IsVerify { get; set; }
    }
}