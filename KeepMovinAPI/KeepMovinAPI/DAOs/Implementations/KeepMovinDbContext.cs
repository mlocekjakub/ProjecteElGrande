using KeepMovinAPI.Domain;
using Microsoft.EntityFrameworkCore;

namespace KeepMovinAPI
{
    public class KeepMovinDbContext : DbContext
    {
        public KeepMovinDbContext(DbContextOptions<KeepMovinDbContext> options) : base(options)
        {
        }

        public DbSet<Event> Event { get; set; }
        public DbSet<User> User { get; set; }
        public DbSet<Sport> Sport { get; set; }
        public DbSet<Setting> Setting { get; set; }
        public DbSet<ExperienceLevel> ExperienceLevel { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Event>()
                            .Property(p => p.Price)
                            .HasPrecision(6, 2);
            modelBuilder.Entity<Event>()
                .Property(p => p.Rating)
                .HasPrecision(3, 2);

            #region ExperienceLevelSeed

            modelBuilder.Entity<ExperienceLevel>().HasData(
                new ExperienceLevel {Name = "Beginner"},
                new ExperienceLevel {Name = "Intermediate"},
                new ExperienceLevel {Name = "Expert"}
            );

            #endregion

            #region EventTypeSeed

            modelBuilder.Entity<EventType>().HasData(
            new EventType {Name = "Professional"},
            new EventType {Name = "Recreational"}
            );

            #endregion
        }
    }
}