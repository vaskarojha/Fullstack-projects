import React from 'react'

function Post() {
  return (
    <div className= "post">
    <div className= "image">
      <img src = "https://www.w3schools.com/html/pic_trulli.jpg"/>
    </div>
    <div className= "texts">
    <h2>The HTML img tag is used to embed an image in a web page.</h2>
    <p className= "info">
      <a className= "author">Mr. Vas</a>
      <time>04-01-2024</time>
    </p>
    <p className= "summary">The src Attribute
      The required src attribute specifies the path URL to the image.
      Note: When a web page loads, it is the browser, at that moment, that gets the image from a web server and inserts it into the page.</p>
    </div>
  </div>
  )
}

export default Post