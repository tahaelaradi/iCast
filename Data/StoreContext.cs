using System;
using Microsoft.EntityFrameworkCore;
using iCast.Models;

namespace iCast.Data
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions<StoreContext> options)
            : base(options)
        { }

        public DbSet<Author> Authors { get; set; }
        public DbSet<Podcast> Podcasts { get; set; }
        public DbSet<Episode> Episodes { get; set; }
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // ensures tables created are not plural
            modelBuilder.Entity<Author>().ToTable("Author");
            modelBuilder.Entity<Podcast>().ToTable("Podcast");
            modelBuilder.Entity<Episode>().ToTable("Episode");
            modelBuilder.Entity<User>().ToTable("User");

            // use the Fluent API to configure a single property to be the key of an entity
            modelBuilder.Entity<Podcast>().HasKey(p => new { p.Id });
            modelBuilder.Entity<Episode>().HasKey(e => new { e.Id });
        }
    }
}
