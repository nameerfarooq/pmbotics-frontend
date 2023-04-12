import React from 'react'

function TSprint(props) {
    const UserRole=props.UserRole
    const {title, tasks, deadline} = props.details
    return (
        <div className='MS-Card'>
            <h2 className='MS-Card-heading'>
                {title}
            </h2>
            <p className='MS-Card-para'>
               tasks :  {tasks}
               </p>
            <p className='MS-Card-para'>
                deadline : {deadline}
               </p>

            <div className='MS-Card-btns'>
                
                <button className='MS-Card-btn2'>
                    Submit Work
                </button>
            </div>
        </div>
    )
}

export default TSprint