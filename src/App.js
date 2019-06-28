import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom'
import './App.css';
import { astronomyPOTD, asteroidFeed, epicImages, renderAnEpic, marsRoverPhotos } from './services/api-nasa'
import SpacePhoto from './components/SpacePhoto'
import JPLViewer from './components/JPLViewer'
import Epic from './components/Epic'
import Footer from './components/Footer'
import MarsRover from './components/MarsRover'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      astroPhoto: [],
      asteroidFeed: [],
      epicFeed: [],
      renderEpic: [],
      roverData: [],
    }
  }

  handleViewerRedirect = (id) => {
    const url = `https://ssd.jpl.nasa.gov/sbdb.cgi?sstr=${id}`
    window.open(url, '_blank');
  }



  async componentDidMount() {
    const feed = await asteroidFeed();
    const epic = await epicImages();
    const media = await astronomyPOTD();


    this.setState({
      astroPhoto: media,
      asteroidFeed: feed,
      epicFeed: epic,


    })
    console.log(this.state.astroPhoto)
    console.log(this.state.asteroidFeed)
    console.log(this.state.epicFeed)
    // console.log(this.state.renderEpic)

  }



  epicInterpolateClick = async (date = '2019-06-25 14:42:44', image = 'epic_1b_20190625144733') => {
    const epicDate = date.split('-').join('/').split(' ').join('').slice(0, 10)

    const pic = await renderAnEpic(epicDate, image);
    console.log(pic)
    this.setState({
      renderEpic: pic
    })

  }





  render() {


    return (
      <div className="App">
        <header>
          <h6>Moon Dust Will Cover You</h6>
          <Link to="/">Home</Link>
          <Link to="/viewer">Viewer</Link>
          <Link to="/epic">Epic</Link>
          <Link to="/rover">Mars Rover Data</Link>
        </header>

        <main>
          <Route path="/" exact render={() => <SpacePhoto astroPhoto={this.state.astroPhoto} />} />
          <Route path="/viewer" render={() => <JPLViewer redirect={this.handleViewerRedirect} {...this.state} />} />
          <Route path="/epic" render={() => <Epic epicClick={this.epicInterpolateClick} {...this.state} />} />
          <Route path="/" render={() => <Footer />} />
          <Route path="/rover" render={() => <MarsRover />} />
        </main>
      </div>
    );
  }
}
export default withRouter(App);
