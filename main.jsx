import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  const username = "Joydeb Roy";
  return (
    <h1>Chai aur {username}</h1>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherUser = "chai aur react"

const ReactElement = React.createElement(
      'a',
      {href: "https://google.com", target:"_blank"},
      'Click me to visit google !',
      anotherUser
)

const AnotherElement = (
  <a href="https://google.com" target="_blank">Visit google</a>
)
ReactDOM.createRoot(document.getElementById('root')).render(
 
  ReactElement
  
)
