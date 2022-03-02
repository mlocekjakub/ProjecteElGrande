using System;
using System.ComponentModel.DataAnnotations;

namespace KeepMovinAPI.Domain
{
    public class Picture
    {
        [Key]
        public Guid PictureId { get; set; } = Guid.NewGuid();
        public Byte[] PicturePath { get; set; }
        public string PictureInfo { get; set; }
        
    }
}