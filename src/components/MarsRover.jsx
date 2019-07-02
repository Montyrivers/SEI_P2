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
  componentWillUnmount() {
    clearInterval(this.marsRoverPhotos)
  }  //clears marsRoverPhotos upon dismount of component to halt potential memory leaks.  might not keep this.


  render() {

    return (


      <div >
        <section>
          <h1>Red Rock</h1>
          <h1>You won't be building a summer house here any time soon...</h1>

          <div className="marsphotos">
            {this.state.roverData.length ? (this.state.roverData.map((image) => (
              <div id={image.id}><img className="curio" src={image.img_src} /></div>
            ))) : (
                <div>Loading...</div>
              )}
          </div>
        </section>
      </div>


    )


  }
}

// />