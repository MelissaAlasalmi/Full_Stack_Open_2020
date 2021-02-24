import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  console.log('Hello from component')
  return ( //defines a React-component with the name App
  <div>
    <p>Hello world</p>
  </div>
) //when using React, all content that needs to be rendered is usually defined as React components
}

ReactDOM.render(<App />, document.getElementById('root')) //renders its contents into the div-element, defined in the file public/index.html, having the id value 'root'


//in client-side rendering, switching pages does not load anything in between it's just like switching views
//check out client-side vs server-side rendering