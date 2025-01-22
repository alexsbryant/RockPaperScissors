import React from 'react'

function Result(props) {

    const { compChoice, userChoice } = props

    const rock = (<i class="fa-regular fa-hand-back-fist fa-2xl"></i>)
    const paper = (<i class="fa-regular fa-hand fa-2xl"></i>)
    const scissors = (<i class="fa-regular fa-hand-peace fa-2xl"></i>)

    const computerRock = (<i class="fa-regular fa-hand-back-fist fa-rotate-180 fa-2xl"></i>)
    const computerPaper = (<i class="fa-regular fa-hand fa-rotate-180 fa-2xl"></i>)
    const computerScissors = (<i class="fa-regular fa-hand-peace fa-rotate-180 fa-2xl"></i>)

    return (
        <>
            <div className='row justify-content-center pb-4 mb-4'>
                <div className='col'>
                    <div>WORKING ON RESULTS PAGE</div>
                </div>
            </div>
        </>
    )
}

export default Result