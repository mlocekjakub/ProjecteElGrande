using System;
using System.Collections.Generic;
using KeepMovinAPI.Controllers;
using Microsoft.AspNetCore.Mvc;

namespace KeepMovinAPI.Models.Dtos
{
    public class Filter
    {
        
        public List<Guid>? Sports { get; set; } = new List<Guid>();
        
        /*public List<Experience> Experience { get; set; }*/

        public string? SearchPhrase { get; set; } = "";
        
        /*public List<Type> Type { get; set; }*/

        public int? MinPrice { get; set; } = 0;

        public int? MaxPrice { get; set; } = 9999;
        
        /*public DateTime MinDate { get; set; }
        
        public DateTime MaxDate { get; set; }*/

        public int? MinParticipants { get; set; } = 0;

        public int? MaxParticipants { get; set; } = 9999;

        public int? PageNumber { get; set; } = 1;




    }
}