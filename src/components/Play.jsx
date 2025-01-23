import React, { useState } from 'react'

function Play(props) {

const { handleRock, handlePaper, handleScissors, handlePlay, rockSelect, paperSelect, scissorsSelect } = props

//const [select, setSelect] = useState('unselected')

const rock = (<i className="fa-regular fa-hand-back-fist fa-2xl"></i>)
const paper = (<i className="fa-regular fa-hand fa-2xl"></i>)
const scissors = (<i className="fa-regular fa-hand-peace fa-2xl"></i>)

//const unselectedBtn = 'btn bg-info-subtle bg-opacity-25 btn-lg py-3 px-3'
//const selectedBtn = 'btn bg-info-subtle bg-opacity-25 btn-outline-secondary btn-lg py-3 px-3'

  return (
    <>
        <div className='row pb-5 mx-auto justify-content-center'>
            <div className='col justify-content-center text-center'>
                <h1 className='display-3 '>Rock<span className='text-muted'>Paper</span><span className='text-body-tertiary'>Scissors</span></h1>
                <p className='pt-2'>Choose your weapon...</p>
            </div>
        </div>
        <div className='row pb-5 mx-auto justify-content-center'>
            <div className='col-4 mx-auto'>
                <button 
                    id="btn_rock"
                    type="button" 
                    className={rockSelect}
                    onClick={handleRock}>
                        {rock}
                </button>
            </div>
            <div className='col-4 mx-auto'>
                <button 
                    id="btn_paper"
                    type="button" 
                    className={paperSelect}
                    onClick={handlePaper}>
                        {paper}
                </button>
            </div>
            <div className='col-4 mx-auto'>
                <button 
                    id="btn_scissors"
                    type="button" 
                    className={scissorsSelect}
                    onClick={handleScissors}>
                        {scissors}
                </button>
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <button 
                    id="play"
                    type="button" 
                    className="btn btn-outline-secondary bg-light text-dark"
                    onClick={handlePlay}>
                        PLAY!
                </button>
            </div>
        </div>
    </>
  )
}

export default Play

// () => (userChoice ? handlePlay : alert("You must choose your weapon!"))
