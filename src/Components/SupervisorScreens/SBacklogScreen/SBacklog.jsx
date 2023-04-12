import React from 'react'
import './SBacklog.css'
import SBTask from './SBTask'
function SBacklog() {
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
                        <SBTask details={["Documentation","Ushna Karim","Yellow"]}/>
                        <SBTask details={["Database","Usama Ali","Yellow"]}/>
                        <SBTask details={["UI/UX","Ushna Karim","Yellow"]}/>
                        <SBTask details={["Frontend","Muhammad Nameer","Yellow"]}/>
                        
                       
                    </div>
                </div>






                <div className='BacklogLane'>
                    <h3 className='HeadingBacklog Pink'>
                        In Progress
                    </h3>
                    <div className='BacklogStream'>
                      
                    <SBTask details={["Documentation","Ushna Karim","Pink"]}/>
                        <SBTask details={["Database","Usama Ali","Pink"]}/>
                      
                       
                       
                    </div>
                </div>










                <div className='BacklogLane'>
                    <h3 className='HeadingBacklog Blue'>
                        Review
                    </h3>
                    <div className='BacklogStream'>
                      
                    <SBTask details={["Documentation","Ushna Karim","Blue"]}/>
                       
                    </div>
                </div>






                <div className='BacklogLane'>
                    <h3 className='HeadingBacklog Green' >
                        Completed !
                    </h3>
                    <div className='BacklogStream'>
                      
                       
                      
                        <div className="backlogTasks Green">
                            <p>
                                Backend
                            </p>
                            
                        </div>
                        <div className="backlogTasks Green">
                            <p>
                                POC
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SBacklog