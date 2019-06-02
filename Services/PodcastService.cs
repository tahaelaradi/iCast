using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using iCast.Data;
using iCast.Models;

namespace iCast.Services
{
    public class PodcastService : IPodcastService
    {
        private readonly StoreContext _context;

        public PodcastService(StoreContext context)
        {
            _context = context;
        }

        public IEnumerable<Podcast> GetAll() => _context.Podcasts.ToList();

        public Podcast GetPodcastById(int id)
        {
            return Task.FromResult(_context.Podcasts.Single(x => Equals(x.Id, id))).Result;
        }
    }

    public interface IPodcastService
    {
        IEnumerable<Podcast> GetAll();
        Podcast GetPodcastById(int id);
    }
}
