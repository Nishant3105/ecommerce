import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'


const Home = () => {
  return (
    <>
      <h1 style={{textAlign:'center'}}>Tours</h1>
      <Table>
        <thead>
          <tr>
            <th width="170">Date</th>
            <th width="170">City & Country</th>
            <th width="170">Venue</th>
            <th width="170">Tickets</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2024-05-22</td>
            <td>New York, USA</td>
            <td>Madison Square Garden</td>
            <td><Button variant="primary">Buy Tickets</Button></td>
            {/* <td><button onclick="location.href='link_to_tickets'">Buy Tickets</button></td> */}
          </tr>
          <tr>
            <td>2024-06-15</td>
            <td>Los Angeles, USA</td>
            <td>Staples Center</td>
            <td><Button variant="primary">Buy Tickets</Button></td>
          </tr>
          <tr>
            <td>2024-07-10</td>
            <td>Chicago, USA</td>
            <td>United Center</td>
            <td><Button variant="primary">Buy Tickets</Button></td>
          </tr>
          <tr>
            <td>2024-08-05</td>
            <td>London, UK</td>
            <td>O2 Arena</td>
            <td><Button variant="primary">Buy Tickets</Button></td>
          </tr>
          <tr>
            <td>2024-09-12</td>
            <td>Paris, France</td>
            <td>AccorHotels Arena</td>
            <td><Button variant="primary">Buy Tickets</Button></td>
          </tr>
        </tbody>
      </Table>

    </>
  )
}

export default Home