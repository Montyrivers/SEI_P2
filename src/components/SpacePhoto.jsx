import React from 'react'

export default function SpacePhoto(props) {

  return (
    <section >


      {(props.astroPhoto.media_type === 'image' && (
        <img className="astrophoto" src={props.astroPhoto.hdurl} />
      ))}
      {(props.astroPhoto.media_type === 'video' && (
        <iframe className="astrovideo" src={props.astroPhoto.url} />
      ))}

      <p className="explanation">{props.astroPhoto.explanation}</p>

      {(props.astroPhoto.copyright !== false && (
        <strong>{props.astroPhoto.copyright}</strong>
      ))}
      <h1>{props.astroPhoto.title}</h1>
      <h4>{props.astroPhoto.date}</h4>


    </section>
  )
}