import { useEffect } from 'react'
import './App.css'

function App() {

  useEffect(() => {
    const keyEvent = (event: KeyboardEvent) => {
      if(event.ctrlKey && event.key.toLocaleLowerCase() === 'k') {
        console.log('CTRL + K');
        event.preventDefault();
      }
    }

    window.addEventListener('keydown', keyEvent)
  }, [])

  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  )
}

export default App
