using BowlingAPI.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BowlingAPI.Controllers;

// This controller handles requests related to bowlers
[ApiController]
[Route("api/[controller]")]
public class BowlersController : ControllerBase
{
    // Database context used to access the Bowling database
    private BowlingLeagueContext _context;

    // Constructor that receives the DbContext through dependency injection
    public BowlersController(BowlingLeagueContext temp)
    {
        _context = temp;
    }

    // HTTP GET endpoint that returns bowlers from specific teams
    [HttpGet]
    public IActionResult Get()
    {
        // Query the database
        // Include the Team table so we can access the team name
        var bowlers = _context.Bowlers
            .Include(b => b.Team)

            // Only return bowlers from the Marlins or Sharks teams
            .Where(b =>
                b.Team.TeamName == "Marlins" ||
                b.Team.TeamName == "Sharks")

            // Select only the fields we want to send to the frontend
            .Select(b => new
            {
                b.BowlerFirstName,
                b.BowlerMiddleInit,
                b.BowlerLastName,
                b.BowlerAddress,
                b.BowlerCity,
                b.BowlerState,
                b.BowlerZip,
                b.BowlerPhoneNumber,

                // Rename TeamName as Team for the API response
                Team = b.Team.TeamName
            })

            // Execute the query and convert results into a list
            .ToList();

        // Return the data as JSON with a 200 OK response
        return Ok(bowlers);
    }
}