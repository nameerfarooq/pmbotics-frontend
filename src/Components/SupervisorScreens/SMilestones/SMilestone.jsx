import React from 'react'

function SMilestone(props) {
    const {title, description} = props.details
    return (
        <div className='MS-Card'>
            <h2 className='MS-Card-heading'>
                {title}
            </h2>
            <p className='MS-Card-para'>
                {description}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus in, reprehenderit pariatur nesciunt facere dolor ullam minima nulla sint, numquam necessitatibus vitae quas dolore unde dolorum! Minus, aperiam. Quod, totam.
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

export default SMilestone