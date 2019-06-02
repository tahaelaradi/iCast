using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using iCast.Models;
using iCast.Data;

namespace iCast.Controllers
{
    [Route("api/[controller]")]
    public class EpisodeController : Controller
    {
        private readonly StoreContext _context;

        public EpisodeController(StoreContext context)
        {
            _context = context;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<Episode> Get()
        {
            return _context.Episodes.ToList();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Episode Get(int id)
        {
            return _context.Episodes.FirstOrDefault(x => x.Id == id);
        }

        [HttpGet("podcast/{id}")]
        public IEnumerable<Episode> PodcastEpisodes(int id)
        {
            return _context.Episodes.Where(x => x.PodcastId == id);
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]Episode value)
        {
            _context.Episodes.Add(value);
            _context.SaveChanges();
            return StatusCode(201, value);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
