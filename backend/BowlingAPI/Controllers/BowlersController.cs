using BowlingAPI.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BowlingAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BowlersController : ControllerBase
{
    private BowlingLeagueContext _context;

    public BowlersController(BowlingLeagueContext temp)
    {
        _context = temp;
    }

    [HttpGet]
    public IActionResult Get()
    {
        var bowlers = _context.Bowlers
            .Include(b => b.Team)
            .Where(b =>
                b.Team.TeamName == "Marlins" ||
                b.Team.TeamName == "Sharks")
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
                Team = b.Team.TeamName
            })
            .ToList();

        return Ok(bowlers);
    }
}