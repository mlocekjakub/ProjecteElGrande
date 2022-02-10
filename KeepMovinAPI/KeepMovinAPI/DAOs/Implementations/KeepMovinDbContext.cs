using System;
using KeepMovinAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace KeepMovinAPI
{
    public class KeepMovinDbContext : DbContext
    {
        public KeepMovinDbContext(DbContextOptions<KeepMovinDbContext> options) : base(options)
        {
        }
        // public KeepMovinDbContext(string connectionString)
        // {
        //     _connectionString = connectionString;
        // }
        //
        // protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        // {
        //     optionsBuilder.UseSqlServer(_connectionString);
        // }
        
        public DbSet<Event> Event { get; set; }
    }
}