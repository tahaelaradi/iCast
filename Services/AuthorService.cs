using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using iCast.Data;
using iCast.Models;

namespace iCast.Services
{
    public class AuthorService : IAuthorService
    {
        private readonly StoreContext _context;

        public AuthorService(StoreContext context)
        {
            _context = context;
        }

        public IEnumerable<Author> GetAll() => _context.Authors.ToList();

        public Author GetAuthorById(int id)
        {
            return Task.FromResult(_context.Authors.Single(x => Equals(x.Id, id))).Result;
        }
    }

    public interface IAuthorService
    {
        IEnumerable<Author> GetAll();
        Author GetAuthorById(int id);
    }
}
