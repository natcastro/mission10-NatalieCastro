// Interface that defines the structure of a Bowler object
// This helps TypeScript know what data we expect from the API
export interface Bowler {

  // Bowler first name
  bowlerFirstName: string

  // Middle initial of the bowler
  bowlerMiddleInit: string

  // Bowler last name
  bowlerLastName: string

  // Street address
  bowlerAddress: string

  // City where the bowler lives
  bowlerCity: string

  // State of the address
  bowlerState: string

  // Zip code
  bowlerZip: string

  // Bowler phone number
  bowlerPhoneNumber: string

  // Name of the team the bowler belongs to
  team: string
}