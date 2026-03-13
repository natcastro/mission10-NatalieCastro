import { useEffect, useState } from 'react'
import type { Bowler } from '../types/Bowler'

// Component that displays a table of bowlers
function BowlerTable() {

  // State to store the list of bowlers coming from the API
  const [bowlers, setBowlers] = useState<Bowler[]>([])

  // useEffect runs once when the component loads
  // It fetches the bowlers data from the backend API
  useEffect(() => {
    fetch('http://localhost:5247/api/bowlers')
      .then((res) => res.json()) // convert response to JSON
      .then((data) => setBowlers(data)) // save the data into state
      .catch((error) => console.log('Error fetching bowlers:', error)) // error handling
  }, [])

  // Return the table that will display all bowlers
  return (
    <table>
      <thead>
        <tr>
          {/* Table headers */}
          <th>Bowler Name</th>
          <th>Team Name</th>
          <th>Address</th>
          <th>City</th>
          <th>State</th>
          <th>Zip</th>
          <th>Phone Number</th>
        </tr>
      </thead>

      <tbody>
        {/* Loop through each bowler and create a table row */}
        {bowlers.map((b, index) => (
          <tr key={index}>
            {/* Combine first, middle, and last name */}
            <td>
              {b.bowlerFirstName} {b.bowlerMiddleInit} {b.bowlerLastName}
            </td>

            {/* Display bowler information */}
            <td>{b.team}</td>
            <td>{b.bowlerAddress}</td>
            <td>{b.bowlerCity}</td>
            <td>{b.bowlerState}</td>
            <td>{b.bowlerZip}</td>
            <td>{b.bowlerPhoneNumber}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default BowlerTable