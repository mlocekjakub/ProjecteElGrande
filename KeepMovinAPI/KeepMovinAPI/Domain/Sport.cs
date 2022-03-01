using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace KeepMovinAPI.Domain
{
    public class Sport
    {
        [Key] [Column("sport_id")] public Guid SportId { get; set; }
        
        [Column("name")] public string Name { get; set; }
        

    }
}