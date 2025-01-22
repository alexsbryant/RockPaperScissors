import React from 'react'

function Result(props) {

    const { compChoice, userChoice } = props

    const userRock = (<i class="fa-regular fa-hand-back-fist fa-2xl"></i>)
    const userPaper = (<i class="fa-regular fa-hand fa-2xl"></i>)
    const userScissors = (<i class="fa-regular fa-hand-peace fa-2xl"></i>)

    const computerRock = (<i class="fa-regular fa-hand-back-fist fa-rotate-180 fa-2xl"></i>)
    const computerPaper = (<i class="fa-regular fa-hand fa-rotate-180 fa-2xl"></i>)
    const computerScissors = (<i class="fa-regular fa-hand-peace fa-rotate-180 fa-2xl"></i>)

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

    return (
        <>
            <div className='row justify-content-center pb-4 mb-4'>
                <div className='col'>
                    <div>{compIcon}</div>
                </div>
            </div>
            <div className='row justify-content-center pb-4 mb-4'>
                <div className='col'>
                    <div>WORKING ON RESULTS PAGE</div>
                </div>
            </div>
            <div className='row justify-content-center pb-4 mb-4'>
                <div className='col'>
                    <div>{userIcon}</div>
                </div>
            </div>
        </>
    )
}

export default Result