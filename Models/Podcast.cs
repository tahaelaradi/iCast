using System;
using System.Collections;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace iCast.Models
{
    public class Podcast
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        public string Url { get; set; }
        [Key]
        public int AuthorId { get; set; }
        [Required]
        public string Category { get; set; }
        public string ImgSrc { get; set; }
        [MaxLength(250)]
        public string Description { get; set; }
        public int Subscribers { get; set; }

        public ICollection<Episode> Episodes { get; set; }
    }
}
