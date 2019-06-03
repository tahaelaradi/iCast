using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using iCast.Data;
using iCast.Models;

namespace iCast.Services
{
    public class EpisodeService : IEpisodeService
    {
        private readonly StoreContext _context;

        public EpisodeService(StoreContext context)
        {
            _context = context;
        }

        public IEnumerable<Episode> GetAll() => _context.Episodes.ToList();

        public Episode GetEpisodeById(int id)
        {
            return Task.FromResult(_context.Episodes.Single(x => Equals(x.Id, id))).Result;
        }

        public IEnumerable<Episode> GetEpisodesByPodcastId(int id)
        {
            return _context.Episodes.Where(x => Equals(x.PodcastId, id));
        }
    }

    public interface IEpisodeService
    {
        IEnumerable<Episode> GetAll();
        IEnumerable<Episode> GetEpisodesByPodcastId(int id);
        Episode GetEpisodeById(int id);
    }
}
