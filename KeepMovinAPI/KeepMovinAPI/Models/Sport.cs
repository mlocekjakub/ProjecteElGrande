using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace KeepMovinAPI.Models
{
    public class Sport
    {
        [Key] [Column("sport_id")] public int SportId { get; set; }
        
        [Column("name")] public string Name { get; set; }
    }
}