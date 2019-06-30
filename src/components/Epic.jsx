import React from 'react'


export default class Epic extends React.Component {


  componentDidMount() {
    const initialEpic = this.props.epicClick(this.props.epicFeed.date, this.props.epicFeed.image)
    return initialEpic
  }




  render() {

    return (
      <section className="epic">
        <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css' />
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>

        <form >
          <input onChange={this.props.handleChange} name="epicDate" type="date" min="2015-06-13" />
          <button onClick={this.props.handleSubmit}>Look Back</button>
        </form>
        <>

          <h1>Blue Marble</h1>
          <img className="blue-marble" src={this.props.renderEpic} />
        </>
        <div className="epic-timestamps" >
          {this.props.epicFeed.map((photo) => (

            <div key={photo.identifier}>
              <h3>{photo.date}</h3>
              <h5>Lunar J2000 Position:</h5>
              <ul>
                <li>{photo.lunar_j2000_position.x}</li>
                <li>{photo.lunar_j2000_position.y}</li>
                <li>{photo.lunar_j2000_position.z}</li>
              </ul>
              <h5>Sun J2000 Position:</h5>
              <ul>
                <li>{photo.sun_j2000_position.x}</li>
                <li>{photo.sun_j2000_position.y}</li>
                <li>{photo.sun_j2000_position.z}</li>
              </ul>
              <h5>DSCOVR J2000 Position:</h5>
              <ul>
                <li>{photo.dscovr_j2000_position.x}</li>
                <li>{photo.dscovr_j2000_position.y}</li>
                <li>{photo.dscovr_j2000_position.z}</li>
              </ul>
              <small>{photo.caption}</small>
              <button onClick={() => this.props.epicClick(photo.date, photo.image)}>Go to Image</button> <hr />
            </div>
          ))}
        </div>
      </section>
    )
  }

}