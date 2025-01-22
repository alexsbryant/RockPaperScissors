import React, { useState } from 'react'

function Play(props) {

const { handleRock, handlePaper, handleScissors, handlePlay } = props


const rock = (<i class="fa-regular fa-hand-back-fist fa-2xl"></i>)
const paper = (<i class="fa-regular fa-hand fa-2xl"></i>)
const scissors = (<i class="fa-regular fa-hand-peace fa-2xl"></i>)

  return (
    <>
        <div className='row pb-5'>
            <div className='col-4'>
                <button 
                    id="btn"
                    type="button" 
                    className='btn bg-info-subtle bg-opacity-25 btn-lg py-3 px-3'
                    data-bs-toggle="button"
                    onClick={handleRock}>
                        {rock}
                </button>
            </div>
            <div className='col-4'>
                <button 
                    id="btn"
                    type="button" 
                    className='btn bg-info-subtle bg-opacity-25 btn-lg py-3 px-3'
                    data-bs-toggle="button"
                    onClick={handlePaper}>
                        {paper}
                </button>
            </div>
            <div className='col-4'>
                <button 
                    id="btn"
                    type="button" 
                    className='btn bg-info-subtle bg-opacity-25 btn-lg py-3 px-3'
                    data-bs-toggle="button"
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