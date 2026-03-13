import { useEffect, useState } from 'react'
import type { Bowler } from '../types/Bowler'

function BowlerTable() {
  const [bowlers, setBowlers] = useState<Bowler[]>([])

  useEffect(() => {
    fetch('http://localhost:5247/api/bowlers')
      .then((res) => res.json())
      .then((data) => setBowlers(data))
      .catch((error) => console.log('Error fetching bowlers:', error))
  }, [])

  return (
    <table>
      <thead>
        <tr>
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
        {bowlers.map((b, index) => (
          <tr key={index}>
            <td>
              {b.bowlerFirstName} {b.bowlerMiddleInit} {b.bowlerLastName}
            </td>
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