import React from 'react'
// import { marsRoverPhotos } from '/api-nasa'

export default class MarsRover extends React.Component {
  // await console.log(props.roverData[0].img_src)
  constructor(props) {
    super(props)
    this.state = {
      roverData: []
    }
  }

  componentDidCatch() {
    this.setState({
      roverData: this.props.rover
    })
    console.log(this.state.roverData)
  }


  render() {
    return (


      <div>
        <section>
          <h1>Greetings From Mars</h1>
          <button onClick={this.props.curious}>ShowPic</button>
          <h1>Managed to return data, but still ironing out how best to parse through and display the photos from this object</h1>
          {/* <img url={this.state.roverData} /> */}
        </section>
      </div>

    )
  }
}