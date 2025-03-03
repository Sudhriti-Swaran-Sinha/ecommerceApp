import { useState } from 'react'
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id="container">

      <div id="navbar">
        <div id="logo">
          <a href=""><img src="/images/logo.svg" alt="??%%"/></a>
        </div>
        <div id='search-box'>
          
        </div>
        <div id="logout">
          <a href=""><img src="/images/logout.svg" alt="" /></a>
        </div>
      </div>
      <hr />
      <div id="body">
        <div className="item-box">
          <p>Item 1</p>
        </div>
        <div className="item-box">
          <p>Item 1</p>
        </div>
        <div className="item-box">
          <p>Item 1</p>
        </div>
        <div className="item-box">
          <p>Item 1</p>
        </div>
        


      </div>
      
    </div>
      
    </>
  )
}

export default App
