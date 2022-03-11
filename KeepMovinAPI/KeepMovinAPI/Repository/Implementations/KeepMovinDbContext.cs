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
        public DbSet<EventType> EventType { get; set; }
        public DbSet<Location> Location { get; set; }

        public DbSet<UserProfile> UserProfile { get; set; }

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

            #region SportSeed

            modelBuilder.Entity<Sport>().HasData(
                new Sport {Name = "Baseball"},
                new Sport {Name = "Football"},
                new Sport {Name = "Cycling"},
                new Sport {Name = "HandBall"},
                new Sport {Name = "Climbing"},
                new Sport {Name = "Fishing"},
                new Sport {Name = "Running"},
                new Sport {Name = "Volleyball"},
                new Sport {Name = "Basketball"},
                new Sport {Name = "Nordic Walking"}
            );

            #endregion

            #region LocationSeed

            modelBuilder.Entity<Location>().HasData(
                new Location {City = "Krakow", Country = "Poland", ZipCode = "30-389"},
                new Location {City = "Warszawa", Country = "Poland", ZipCode = "30-389"},
                new Location {City = "Gdansk", Country = "Poland", ZipCode = "30-389"},
                new Location {City = "Opole", Country = "Poland", ZipCode = "30-389"}
            );

            #endregion
        }
    }
}