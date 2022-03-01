using System;
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


    }
}