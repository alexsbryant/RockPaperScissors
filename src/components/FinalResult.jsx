import React from 'react'

function FinalResult(props) {

    const { userScore, compScore, setUserScore, setCompScore, winner, handleReset } = props

    const resultStatement = () => {
        if (winner === 'user' ) {
            return (
                <div className='col mx-auto'>
                    <i className="fa-solid fa-award fa-beat fa-2xl pb-4 mb-3"></i>
                    <h1 className='display-2 pt-3'>WINNER!!!!!</h1>
                </div>
            )
        } else {
            return (
                <div className='col mx-auto'>
                    <i className="fa-solid fa-hand-middle-finger fa-bounce fa-2xl pb-4 mb-3"></i>
                    <h1 className='display-2 pt-3'>Loser...   :(</h1>
                </div>
            )
        }
    }

    function handleFullRestart() {
        setUserScore(0)
        setCompScore(0)
        handleReset()
    }

    return (
        <>
            <div className='row pb-5 mx-auto justify-content-center'>
                <div className='col justify-content-center text-center'>
                    <h1 className='display-3 '>Rock<span className='text-muted'>Paper</span><span className='text-body-tertiary'>Scissors</span></h1>
                </div>
            </div>
            <div className='row pt-4 pb-4 mx-auto justify-content-center'>
                {resultStatement()}
            </div>
            <div className='row py-4'>
                <div className='col'>
                    <button
                        id="full_reset"
                        type="button"
                        className="btn btn-outline-secondary bg-light text-dark"
                        onClick={handleFullRestart}>
                        Play again!
                    </button>
                </div>
            </div>
        </>
    )
}

export default FinalResult