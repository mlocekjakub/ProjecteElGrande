using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace KeepMovinAPI.Domain
{
    public class Sport
    {
        [Key] 
        public Guid SportId { get; set; } = Guid.NewGuid();

        public string Name { get; set; }
    }
}