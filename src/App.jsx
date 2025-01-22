import { useState } from 'react'
import './App.css'
import Play from './components/Play'
import Reset from './components/Reset'
import Result from './components/Result'

// TO DO: - Fix if else if statements so that setCompChoice works
//        - Sort out hover and click styling for buttons


function App() {

const [inPlay, setInPlay] = useState(false)
const [compChoice, setCompChoice] = useState('none')
const [userChoice, setUserChoice] = useState('none')

function compDecision() {
  let random = Math.floor(Math.random() * 3)
  console.log(random)
  if (random === 0) {
    setCompChoice('rock')
  } else if (random === 1) {
    setCompChoice('paper')
  } else if (random === 2) {
    setCompChoice('scissors')
  }
}

const handleRock = () => {
    setUserChoice('rock')
}

const handlePaper = () => {
    setUserChoice('paper')
}

const handleScissors = () => {
    setUserChoice('scissors')
}

const handlePlay = () => {
  setInPlay(true)
  compDecision()
  console.log(`Player Choice: ${userChoice} Computer Choice: ${compChoice}`)
}

const handleReset = () => {
  setUserChoice('none')
  setCompChoice('none')
  setInPlay(false)
}

  return (
    <div className='container'>
      <div className='row'>
        <div className='col justify-center'>
          {inPlay ? (
            <>
              <Result compChoice={compChoice} userChoice={userChoice} />
              <Reset handleReset={handleReset}/>
            </>
          ) : (
            <Play 
              handleRock={handleRock}
              handlePaper={handlePaper}
              handleScissors={handleScissors}
              handlePlay={handlePlay}
            /> 
          )}
        </div>
      </div>
    </div>
  )
}

export default App
