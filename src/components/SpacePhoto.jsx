import React from 'react'

export default function SpacePhoto(props) {

  return (
    <section>


      {(props.astroPhoto.media_type === 'image' && (
        <img src={props.astroPhoto.hdurl} />
      ))}
      {(props.astroPhoto.media_type === 'video' && (
        <iframe src={props.astroPhoto.url} />
      ))}

      <p>{props.astroPhoto.explanation}</p>
      {(props.astroPhoto.copyright !== false && (
        <strong>-Copyright: {props.astroPhoto.copyright}</strong>
      ))}
      <h1>{props.astroPhoto.title}</h1>
      <h4>{props.astroPhoto.date}</h4>


    </section>
  )
}