import React from 'react'

function Score(props) {
    const { userScore, compScore } = props

    return (
        <>
            <div className='row py-4'></div>
            <p className='fw-lighter'>Best of five!</p>
            <div className='row py-4 mx-auto'>
                <table className='table justify-content-center mx-auto'>
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Player</th>
                            <th scope="col">Computer</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row"></td>
                            <td className='display-4'>{userScore}</td>
                            <td className='display-4'>{compScore}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Score