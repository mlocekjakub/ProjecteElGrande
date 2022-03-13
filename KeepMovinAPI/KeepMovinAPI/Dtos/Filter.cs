using System;
using System.Collections.Generic;


namespace KeepMovinAPI.Domain.Dtos
{
    public class Filter
    {
        
        public List<string> Sports { get; set; } = new List<string>();
        
        public List<string> Experience { get; set; } = new List<string>();

        public string SearchPhrase { get; set; } = "";

        public List<string> Type { get; set; } = new List<string>();

        public int MinPrice { get; set; } = 0;

        public int MaxPrice { get; set; } = 9999;
        
        public string MinDate { get; set; }
        
        public string MaxDate { get; set; }

        public int MinParticipants { get; set; } = 0;

        public int MaxParticipants { get; set; } = 9999;

        public int CurrentPageNumber { get; set; } = 1;



    }
}