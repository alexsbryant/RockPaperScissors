import { useEffect, useState } from 'react'
import './App.css'
import Play from './components/Play'
import Reset from './components/Reset'
import Result from './components/Result'

// TO DO: 
//        - Work on button hover and selected designs
//        - Create a best-of-3 or best-of-5 round
//        - Work out a way to add a set timed animation before results


function App() {

// State variables

const [inPlay, setInPlay] = useState(false)
const [compChoice, setCompChoice] = useState('')
const [userChoice, setUserChoice] = useState('')
const [result, setResult] = useState('')

// Computer's random choice generator

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

// Button rendering option logic

// Button Classes

const unselectedBtn = 'btn bg-info-subtle bg-opacity-25 btn-lg py-3 px-3'
const selectedBtn = 'btn bg-info-subtle bg-opacity-25 btn-outline-secondary btn-lg py-3 px-3'

// Button State Variables

const [rockSelect, setRockSelect] = useState(unselectedBtn)
const [paperSelect, setPaperSelect] = useState(unselectedBtn)
const [scissorsSelect, setScissorsSelect] = useState(unselectedBtn)

// Handler functions

const handleRock = () => {
    setUserChoice('rock')
    setRockSelect(selectedBtn)
    setPaperSelect(unselectedBtn)
    setScissorsSelect(unselectedBtn)
}

const handlePaper = () => {
    setUserChoice('paper')
    setPaperSelect(selectedBtn)
    setRockSelect(unselectedBtn)
    setScissorsSelect(unselectedBtn)
}

const handleScissors = () => {
    setUserChoice('scissors')
    setScissorsSelect(selectedBtn)
    setPaperSelect(unselectedBtn)
    setRockSelect(unselectedBtn)
}

const handlePlay = () => {
  if (!userChoice) {
    alert('Please choose your weapon!')
    handleReset
    return
} else if (userChoice === 'rock' || 'paper' || 'scissors') {
    setInPlay(true)
    compDecision() } else {
    handleReset
  }
}

const handleReset = () => {
  setUserChoice('')
  setCompChoice('')
  setResult('')
  setRockSelect(unselectedBtn)
  setPaperSelect(unselectedBtn)
  setScissorsSelect(unselectedBtn)
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
              rockSelect={rockSelect}
              paperSelect={paperSelect}
              scissorsSelect={scissorsSelect}
            /> 
          )}
        </div>
      </div>
    </div>
  )
}

export default App
