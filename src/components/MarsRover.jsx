import React from 'react'
// import { marsRoverPhotos } from '/api-nasa'
import { marsRoverPhotos } from '../services/api-nasa'


export default class MarsRover extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      roverData: [],
    }
  }

  async componentDidMount() {
    const resp = await marsRoverPhotos()
    this.setState({
      roverData: resp,
    })
  }



  render() {

    return (


      <div>
        <section>
          <h1>Greetings From Mars</h1>
          <button >ShowPic</button>
          <h1>Managed to return data, but still ironing out how best to parse through and display the photos from this object</h1>


          {this.state.roverData.length ? (this.state.roverData.map((image) => (
            <img src={image.img_src} />
          ))) : (
              <div>Loading...</div>
            )}
        </section>
      </div>


    )


  }
}

// />