import { useEffect, useState } from 'react'
import './App.css'
import Play from './components/Play'
import Reset from './components/Reset'
import Result from './components/Result'

// TO DO: 
//        - Sort out hover and click styling for buttons
//        - Fix double alert and results page half rendering if nothing selected


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
// Button State Variables

const [rockSelect, setRockSelect] = useState('unselected')
const [paperSelect, setPaperSelect] = useState('unselected')
const [scissorsSelect, setScissorsSelect] = useState('unselected')

// Button Classes

const unselectedBtn = 'btn bg-info-subtle bg-opacity-25 btn-lg py-3 px-3'
const selectedBtn = 'btn bg-info-subtle bg-opacity-25 btn-outline-secondary btn-lg py-3 px-3'


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
