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
    public class PodcastController : Controller
    {
        private readonly StoreContext _context;

        public PodcastController(StoreContext context)
        {
            _context = context;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<Podcast> Get()
        {
            return _context.Podcasts.ToList();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Podcast Get(int id)
        {
            return _context.Podcasts.FirstOrDefault(x => x.Id == id);
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]Podcast value)
        {
            _context.Podcasts.Add(value);
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
