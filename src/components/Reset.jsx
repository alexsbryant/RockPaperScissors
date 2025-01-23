import React from 'react'

function Reset(props) {

    const { handleReset } = props

    return (
        <div className='row justify-content-center'>
            <div className='col'>
                <button
                    type="button"
                    className="btn btn-outline-secondary w-50 bg-light text-dark"
                    onClick={handleReset}>
                        Play again.
                </button>
            </div>
        </div>
    )
}

export default Reset