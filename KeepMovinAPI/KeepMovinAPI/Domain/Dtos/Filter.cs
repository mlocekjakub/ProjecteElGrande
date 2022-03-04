using System;
using System.Collections.Generic;
using KeepMovinAPI.Controllers;
using KeepMovinAPI.Domain;
using Microsoft.AspNetCore.Mvc;

namespace KeepMovinAPI.Models.Dtos
{
    public class Filter
    {
        
        public List<Guid> Sports { get; set; } = new List<Guid>();
        
        public List<Guid> Experience { get; set; } = new List<Guid>();

        public string? SearchPhrase { get; set; } = "";

        public List<Guid> Type { get; set; } = new List<Guid>();

        public int? MinPrice { get; set; } = 0;

        public int? MaxPrice { get; set; } = 9999;
        
        /*public DateTime MinDate { get; set; }
        
        public DateTime MaxDate { get; set; }*/

        public int? MinParticipants { get; set; } = 0;

        public int? MaxParticipants { get; set; } = 9999;

        public int? PageNumber { get; set; } = 1;




    }
}