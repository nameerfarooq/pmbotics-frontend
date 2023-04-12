import React from 'react'
import './Grades.css'
function Grades() {
    return (
        <div className='MainDiv'>
            <h2 className='TitleScore'>
                Final Score
            </h2>
            <br /><br />
            <div className="scoreCard">
                <div className='ParaName'>
                    Muhammad Nameer

                </div>
                <span className='ParaScore'>
                    85
                </span>
            </div>
            <div className="scoreCard">
                <div className='ParaName1'>
                    Ushna Karim

                </div>
                <span className='ParaScore'>
                    90
                </span>
            </div>
            <div className="scoreCard">
                <div className='ParaName2'>
                    Usama Ali

                </div>
                <span className='ParaScore'>
                    87
                </span>
            </div>
        </div>
    )
}

export default Grades