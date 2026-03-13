namespace BowlingAPI.Models;

// This class represents a team in the database
public class Team
{
    public int TeamId { get; set; }

    public string? TeamName { get; set; }

    public List<Bowler> Bowlers { get; set; } = new();
}