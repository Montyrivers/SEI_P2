import React from 'react';
import { Link, Switch, Route, withRouter } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './App.css';
import { spaceWeatherRange, spaceCoronal, astronomyPOTD, asteroidFeed, epicImages, renderAnEpic, olderEpics } from './services/api-nasa'
import SpacePhoto from './components/SpacePhoto'
import JPLViewer from './components/JPLViewer'
import Epic from './components/Epic'
import Footer from './components/Footer'
import MarsRover from './components/MarsRover'
import CosmicWeather from './components/CosmicWeather'



class App extends React.Component {
  constructor(props) {
    super(props)

    const curday = (sp) => {
      let today = new Date();
      let dd = today.getDate();
      let mm = today.getMonth() + 1;
      let yyyy = today.getFullYear();

      if (dd < 10) dd = '0' + dd;
      if (mm < 10) mm = '0' + mm;

      return (yyyy + sp + mm + sp + dd)
    };
    const curdayEpic = (sp) => {
      let today = new Date();
      let dd = today.getDate() - 3;
      let mm = today.getMonth() + 1;
      let yyyy = today.getFullYear();

      if (dd < 10) dd = '0' + dd;
      if (mm < 10) mm = '0' + mm;

      return (yyyy + sp + mm + sp + dd)
    };
    // console.log(curday('-'))


    this.state = {
      astroPhoto: [],
      asteroidFeed: [],
      epicFeed: [],
      renderEpic: [],
      roverData: [],
      asteroidDate: curday('-'),
      epicDate: curdayEpic('-'),
      showComponent: true,
      weatherNotification: [],
      weatherStart: '',
      weatherEnd: '',

    }
  }

  handleViewerRedirect = (id) => {
    const url = `https://ssd.jpl.nasa.gov/sbdb.cgi?sstr=${id}`
    window.open(url, '_blank');
  }
  handleChangeWeather = (e) => {
    e.preventDefault()
    this.setState({

      [e.target.name]: e.target.value,

    })

  }

  handleSubmitWeather = async (e) => {
    e.preventDefault()
    const weatherDate = await spaceWeatherRange(this.state.weatherStart, this.state.weatherEnd)
    this.setState({
      weatherNotification: weatherDate,
    })

  }
  handleChangeAsteroid = (e) => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
    // console.log(this.state.asteroidDate)
  }
  handleSubmitAsteroid = async (e) => {
    e.preventDefault()
    const dateAsteroid = await asteroidFeed(this.state.asteroidDate)
    this.setState({
      asteroidFeed: dateAsteroid
    })
    // console.log(this.state.asteroidDate)
  }
  handleChangeEpic = (e) => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmitEpic = async (e) => {
    e.preventDefault()
    const dateEpic = await olderEpics(this.state.epicDate)
    this.setState({
      epicFeed: dateEpic
    })
    // console.log(this.state.epicDate)
    // console.log(dateEpic)
  }




  async componentDidMount() {
    const feed = await asteroidFeed(this.state.asteroidDate);
    const epic = await epicImages();
    const media = await astronomyPOTD();
    const weatherNot = await spaceCoronal()


    this.setState({
      astroPhoto: media,
      asteroidFeed: feed,
      epicFeed: epic,
      weatherNotification: weatherNot,


    })
    console.log(this.state.weatherNotification)
    // console.log(this.state.astroPhoto)
    // console.log(this.state.asteroidFeed)
    // console.log(this.state.epicFeed)
    // console.log(this.state.renderEpic)
    // console.log(this.state.asteroidDate)

  }



  epicInterpolateClick = async (date = '2019-06-25 14:42:44', image = 'epic_1b_20190625144733') => {
    const epicDate = date.split('-').join('/').split(' ').join('').slice(0, 10)

    const pic = await renderAnEpic(epicDate, image);
    console.log(pic)
    // console.log(epicDate)
    this.setState({
      renderEpic: pic
    })

  }





  render() {


    return (
      <div className="App">

        <header >
          <h6 className="landing-heading">Moon Dust Will Cover You</h6>
          <Link to="/"><button>Home</button></Link>
          <Link to="/viewer"><button>Viewer</button></Link>
          <Link to="/epic"><button>Epic</button></Link>
          <Link to="/rover"><button>Mars Rover Data</button></Link>
          <Link to="/weather"><button>Space Weather</button></Link>
        </header>

        <main>
          {/* <TransitionGroup className="transition-group">
            <CSSTransition
              key=''
              timeout={{ enter: 300, exit: 300 }}
              classNames="fade"
            >
              <section className='route-section'>
                <Switch location=''> */}

          <Route path="/" exact render={() => <SpacePhoto astroPhoto={this.state.astroPhoto} />} />



          <Route path="/viewer" render={() => <JPLViewer handleChange={this.handleChangeAsteroid} handleSubmit={this.handleSubmitAsteroid} redirect={this.handleViewerRedirect} {...this.state} />} />

          <Route path="/epic" render={() => <Epic handleChange={this.handleChangeEpic} handleSubmit={this.handleSubmitEpic} epicClick={this.epicInterpolateClick} {...this.state} />} />

          <Route path="/" render={() => <Footer />} />
          <Route path="/rover" render={() => <MarsRover />} />
          <Route path="/weather" render={() => <CosmicWeather notification={this.state.weatherNotification} handleChange={this.handleChangeWeather} handleSubmit={this.handleSubmitWeather} />} />

          {/* </Switch>
              </section>
            </CSSTransition>
          </TransitionGroup> */}
        </main>


      </div>
    );
  }
}
export default withRouter(App);
