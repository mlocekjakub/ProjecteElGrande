using KeepMovinAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace KeepMovinAPI
{
    public class KeepMovinDbContext : DbContext
    {
        private readonly string _connectionString;

        public KeepMovinDbContext(string connectionString)
        {
            _connectionString = connectionString;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }
        
        public DbSet<Event> Event { get; set; }
    }
}