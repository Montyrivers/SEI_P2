import React from 'react'


export default class Epic extends React.Component {




  render() {

    return (
      <section>
        <>
          <h1>Blue Marble</h1>
          <img src={this.props.renderEpic} />
        </>
        <div>
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