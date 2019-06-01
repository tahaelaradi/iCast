using System;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace iCast.Models
{
    public class Episode
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        public string Url { get; set; }
        public int PodcastId { get; set; }
        [MaxLength(250)]
        public string Description { get; set; }
        public int Like { get; set; }
    }
}
