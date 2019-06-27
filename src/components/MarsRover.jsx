import React from 'react'

export default function MarsRover(props) {
  // await console.log(props.roverData[0].img_src)
  return (
    <div>
      <section>
        <h1>Greetings From Mars</h1>
        <h1>Managed to return data, but still ironing out how best to parse through and display the photos from this object</h1>
        <img url={props.roverData} />
      </section>
    </div>

  )
}