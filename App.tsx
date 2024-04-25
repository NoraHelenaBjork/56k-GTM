import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://56kdigital.com/" target="_blank">
          <img src="/56k_digital_logo.jpeg" className="logo" alt="56k digital" />
        </a>
      </div>
      <h1>Hej Allihopa på 56k digital!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Räkna {count}
        </button>
        <p>
          Denna sida kan användas för att testimplementera GTM och GA4.
        </p>
      </div>
      <p className="read-the-docs">
        Klicka på bilderna!
      </p>
    </div>
  )
}

export default App