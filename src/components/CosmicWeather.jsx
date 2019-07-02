import React from 'react'

export default function CosmicWeather(props) {


  const lineBreaks = (string) => {
    const breaks = string.split('##').join('{<br />}')
    return breaks
  }


  return (
    <section>
      <h1>Cosmic Weather Notifications</h1>
      <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css' />
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <form >
        <input onChange={props.handleChange} name="weatherStart" type="date" />
        <input onChange={props.handleChange} name="weatherEnd" type="date" />
        <button className="submitButton" onClick={props.handleSubmit}>Check Cosmic Events</button>
        <small>*All queries spanning greater than 30 days will be narrowed down.</small>
      </form>

      <div className='notification-info'>
        {props.notification.map((notification) => (
          <div key={notification.messageID}>
            <h3>{notification.messageIssueTime}</h3>
            {/* {lineBreaks(notification.messageBody)} */}
            {notification.messageBody.split('##').map((item, key) => {
              return <span key={key}>{item}<br /></span>
            })} <br />
            <a href={notification.messageURL} target="_blank">Open External Link</a><hr />
          </div>
        ))}
      </div>





    </section>



  )
}
