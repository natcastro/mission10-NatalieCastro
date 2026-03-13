using Microsoft.EntityFrameworkCore;
using BowlingAPI.Models;

namespace BowlingAPI.Data;

// This class represents the Bowling League database
// It inherits from DbContext, which is the main class for database access
public class BowlingLeagueContext : DbContext
{
    public BowlingLeagueContext(DbContextOptions<BowlingLeagueContext> options)
        : base(options)
    {
    }

    public DbSet<Bowler> Bowlers { get; set; }

    public DbSet<Team> Teams { get; set; }
}