import React from 'react'
import './TNotifications.css'
import '../../../Components/MainStyling.css'
import '../../Project/projects.css'
import TNotification from './TNotification'

function TAllNotifications() {
    return (
        <div>
            <div className='ProjectHeader'>
               
                <h2 className='ProjectHeading'>Notifications</h2>
            </div>
            <div className='MainContainerDiv'>

                <TNotification details={
                    {
                        title:"Project Submission Guidelines",
                        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos magni sequi accusantium dicta, dolore ut rerum soluta autem porro, perspiciatis numquam harum hic. Maiores nemo eum accusantium reiciendis optio atque!",
                        author: "Sir Syed Faisal Ali",
                        timeline: "10:45 PM, 20 Jan 2023"
                    }
                }/>
                <TNotification details={
                    {
                        title:"FYP Report Submission",
                        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos magni sequi accusantium dicta, dolore ut rerum soluta autem porro, perspiciatis numquam harum hic. Maiores nemo eum accusantium reiciendis optio atque!",
                        author: "Sir Zeeshan Saleem Khan",
                        timeline: "10:45 PM, 22 Jan 2023"
                    }
                }/>
                <TNotification details={
                    {
                        title:"Deadline Extended",
                        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos magni sequi accusantium dicta, dolore ut rerum soluta autem porro, perspiciatis numquam harum hic. Maiores nemo eum accusantium reiciendis optio atque!",
                        author: "Syed Faisal Ali",
                        timeline: "10:45 PM, 01 Jan 2023"
                    }
                }/>


            </div>
        </div>
    )
}

export default TAllNotifications