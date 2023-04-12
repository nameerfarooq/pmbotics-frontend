import React from 'react'

function Sprint(props) {
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
                <button className='MS-Card-btn1'>
                    Edit
                </button>
                <button className='MS-Card-btn2'>
                    Save
                </button>
            </div>
        </div>
    )
}

export default Sprint