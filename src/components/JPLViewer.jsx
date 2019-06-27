import React from 'react'
import { Link } from 'react-router-dom'
export default function JPLViewer(props) {

  return (
    <div>
      <h1>Viewer</h1>

      {props.asteroidFeed.map((asteroid) => (
        <div key={asteroid.id}>
          <h5>Asteroid Name: {asteroid.name}</h5>
          <h5>Asteroid ID: {asteroid.id}</h5>
          <button onClick={() => props.redirect(asteroid.id)}>Nasa Tracker</button>
          {(asteroid.is_potentially_hazardous_asteroid && (
            <h6>•Potentially dangerous asteroid•</h6>
          ))}
          <hr />

        </div>
      ))}
      <iframe src='https://cneos.jpl.nasa.gov/ov/index.html#load=&orientation=0,0,0,1&lookat=SSB&interval=3&eclipticgrid=false&distance=29919.57414&pitch=0&roll=0&yaw=0&scale=0.005890779006806091&rotateX=-25.985006106485574&rotateY=56.94898857168325&begin=2019-06-15T14:05&end=2019-6-25T14:05$sat=3842896'></iframe>


    </div>
  )
}