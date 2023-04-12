import React from 'react'
import './Backlog.css'
function Backlog() {
    return (
        <div className='MainDiv'>
        <h2 className='Heading'>
            Backlog
        </h2>
        <div className='BacklogArea'>




            <div className='BacklogLane'>
                <h3 className='HeadingBacklog Yellow'>
                    Todo
                </h3>
                <div className='BacklogStream'>
                    <div className="backlogTasks Yellow">
                        <p>
                            ABCDEF
                        </p>
                        <button className='BtnTask'>In Progress</button>
                    </div>
                    <div className="backlogTasks Yellow">
                        <p>
                            ABCDEF
                        </p>
                        <button className='BtnTask'>In Progress</button>
                    </div>
                    <div className="backlogTasks Yellow" >
                        <p>
                            ABCDEF
                        </p>
                        <button className='BtnTask'>In Progress</button>
                    </div>
                    <div className="backlogTasks Yellow">
                        <p>
                            ABCDEF
                        </p>
                        <button className='BtnTask'>In Progress</button>
                    </div>
                </div>
            </div>






            <div className='BacklogLane'>
                <h3 className='HeadingBacklog Pink'>
                    In Progress
                </h3>
                <div className='BacklogStream'>
                  
                   
                    <div className="backlogTasks Pink">
                        <p>
                            ABCDEF
                        </p>
                        <button className='BtnTask'>Review</button>
                    </div>
                    <div className="backlogTasks Pink">
                        <p>
                            ABCDEF
                        </p>
                        <button className='BtnTask'>Review</button>
                    </div>
                </div>
            </div>










            <div className='BacklogLane'>
                <h3 className='HeadingBacklog Blue'>
                    Review
                </h3>
                <div className='BacklogStream'>
                  
                   
                    <div className="backlogTasks Blue">
                        <p>
                            ABCDEF
                        </p>
                        <button className='BtnTask'>Approve</button>
                    </div>
                    <div className="backlogTasks Blue">
                        <p>
                            ABCDEF
                        </p>
                        <button className='BtnTask'>Approve</button>
                    </div>
                    <div className="backlogTasks Blue">
                        <p>
                            ABCDEF
                        </p>
                        <button className='BtnTask'>Approve</button>
                    </div>
                </div>
            </div>






            <div className='BacklogLane'>
                <h3 className='HeadingBacklog Green' >
                    Completed !
                </h3>
                <div className='BacklogStream'>
                  
                   
                  
                    <div className="backlogTasks Green">
                        <p>
                            ABCDEF
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Backlog