import React from 'react'
import '../../Dashboard/style.css'
import '../../Project/projects.css'
import ProjectsCards from './ProjectsCards.jsx'
function SMainProjectScreen(props) {



    return (
        <div className='MainProjectScreen'>
            <div className='ProjectHeader'>





                <h2 className='ProjectHeading'>PROJECTS</h2>
            </div>
            <div className='projectSection1'>


                <br />
                <h3>On Going Projects</h3>
                <br />
                <div className="ProjectsHolder">
                    <ProjectsCards />
                    <ProjectsCards />
                    <ProjectsCards />
                    <ProjectsCards />



                </div>
                <br />
                <h3>Previous Projects</h3>
                <br />
                <div className="ProjectsHolder">
                    <ProjectsCards />
                    <ProjectsCards />



                </div>
                <br /><br /><br />
            </div>
        </div>
    )
}

export default SMainProjectScreen