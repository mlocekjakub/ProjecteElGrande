using System;
using System.ComponentModel.DataAnnotations;

namespace KeepMovinAPI.Domain
{
    public class Organisation
    {
        [Key]
        public Guid OrganisationId { get; set; } = Guid.NewGuid();
        
        [MaxLength(30)]
        public string Name { get; set; }

        public string IsVerify { get; set; }
    }
}