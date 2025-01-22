import { useEffect, useState } from 'react'
import './App.css'
import Play from './components/Play'
import Reset from './components/Reset'
import Result from './components/Result'

// TO DO: - Fix if else if statements so that setCompChoice works
//        - Sort out hover and click styling for buttons


function App() {

const [inPlay, setInPlay] = useState(false)
const [compChoice, setCompChoice] = useState('')
const [userChoice, setUserChoice] = useState('')
const [result, setResult] = useState('')

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
  // console.log(`compDecision choice: ${compChoice}`)
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
  if (userChoice === 'rock' || 'paper' || 'scissors') {
    setInPlay(true)
    compDecision() } else {
    handleReset
  }
}

const handleReset = () => {
  setUserChoice('')
  setCompChoice('')
  setResult('')
  setInPlay(false)
}

useEffect(() => {
  if (inPlay) {
    console.log(`EFFECT LOG - player: ${userChoice} computer: ${compChoice}`)
  }
})

  return (
    <div className='container'>
      <div className='row'>
        <div className='col justify-center'>
          {inPlay ? (
            <>
              <Result 
                compChoice={compChoice} 
                userChoice={userChoice}
                result={result}
                setResult={setResult}
                handleReset={handleReset} />
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
