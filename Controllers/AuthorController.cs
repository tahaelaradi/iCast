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
    public class AuthorController : Controller
    {
        private readonly StoreContext _context;

        public AuthorController(StoreContext context)
        {
            _context = context;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<Author> Get()
        {
            return _context.Authors.ToList();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Author Get(int id)
        {
            return _context.Authors.FirstOrDefault(x => x.Id == id);
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]Author value)
        {
            _context.Authors.Add(value);
            _context.SaveChanges();
            return StatusCode(201, value);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]Author value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
