import React, { useEffect, useState } from 'react'

function Result(props) {

    const { compChoice, userChoice, result, setResult, handleReset, addUserScore, addCompScore } = props

    const [roundProcessed, setRoundProcessed] = useState(false)

    const userRock = (<i class="fa-regular fa-hand-back-fist fa-2xl"></i>)
    const userPaper = (<i class="fa-regular fa-hand fa-2xl"></i>)
    const userScissors = (<i class="fa-regular fa-hand-peace fa-2xl"></i>)

    const computerRock = (<i class="fa-regular fa-hand-back-fist fa-rotate-180 fa-2xl"></i>)
    const computerPaper = (<i class="fa-regular fa-hand fa-rotate-180 fa-2xl"></i>)
    const computerScissors = (<i class="fa-regular fa-hand-peace fa-rotate-180 fa-2xl"></i>)

    // ICON LOGIC

    let userIcon = ''
    let compIcon = ''

    if (userChoice === 'rock') {
        userIcon = userRock
    } else if (userChoice === 'paper') {
        userIcon = userPaper
    } else if (userChoice === 'scissors') {
        userIcon = userScissors
    }

    if (compChoice === 'rock') {
        compIcon = computerRock
    } else if (compChoice === 'paper') {
        compIcon = computerPaper
    } else if (compChoice === 'scissors') {
        compIcon = computerScissors
    }

    // WIN LOSE DRAW LOGIC

    useEffect(() => {
        if (!userChoice || !compChoice || roundProcessed) return

        const determineResult = () => {
            if  (userChoice === compChoice) {
                setResult("It's a draw.")
            } else if (
                (userChoice === 'rock' && compChoice === 'paper') ||
                (userChoice === 'paper' && compChoice === 'scissors') ||
                (userChoice === 'scissors' && compChoice === 'rock')
            ) {
                setResult('YOU LOSE...')
                addCompScore()
            } else {
                setResult('YOU WON!!!')
                addUserScore()
            }
        }
        determineResult()   
        setRoundProcessed(true)
    }, [setResult])

    useEffect(() => {
        if (userChoice && compChoice) setRoundProcessed(false)
    }, [userChoice, compChoice])

    return (
        <>
            <div className='row justify-content-center mt-4 pt-4 pb-4 mb-4'>
                <div className='col'>
                    <div className='fs-4'>{compIcon}</div>
                </div>
            </div>
            <div className='row justify-content-center pb-4 mb-4'>
                <div className='col'>
                    <div className='display-4'>{result}</div>
                </div>
            </div>
            <div className='row justify-content-center pb-3 mb-4'>
                <div className='col'>
                    <div className='fs-4'>{userIcon}</div>
                </div>
            </div>
        </>
    )
}

export default Result