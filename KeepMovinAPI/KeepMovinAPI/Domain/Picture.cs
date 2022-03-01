using System;

namespace KeepMovinAPI.Domain
{
    public class Picture
    {
        public Guid PictureId { get; set; }
        public Byte[] PicturePath { get; set; }
        public string PictureInfo { get; set; }
        
    }
}