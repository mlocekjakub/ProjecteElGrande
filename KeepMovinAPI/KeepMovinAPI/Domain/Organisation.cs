using System;
using System.ComponentModel.DataAnnotations;

namespace KeepMovinAPI.Domain
{
    public class Organisation
    {
        [Key]
        public Guid OrganisationId { get; set; } = Guid.NewGuid();
        public string Name { get; set; }
        public Boolean IsVerify { get; set; }
    }
}