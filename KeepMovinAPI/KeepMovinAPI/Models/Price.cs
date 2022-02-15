using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace KeepMovinAPI.Models
{
    public class Price
    {
        [Key]
        [Column("price_id")] 
        public int PriceId { get; set; }
        [Column("value")] 
        public decimal Value { get; set; }
        [Column("currency")] 
        public string Currency { get; set; }
    }
}