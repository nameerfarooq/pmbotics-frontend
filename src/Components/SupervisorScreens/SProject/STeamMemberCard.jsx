import React from 'react'
import '../../MainStyling.css'
import '../../Project/projects.css'
function STeamMemberCard(props) {
    const {MemberName, Due, Done} = props.details
  return (
    <div className='MemberCard ' >
        <h2 className='cardTitle'>
            {MemberName}
        </h2>
        <br />
        <div className='TextBoxesHolder'>
            <div className='TextBox'>
                <h3 className='taskCount'>
                    {Done}
                </h3>
                <p>Done</p>
            </div>
            <div className='TextBox2'>
                <h3 className='taskCount'>
                    {Due}
                </h3>
                <p>Due</p>
            </div>
        </div>
    </div>
  )
}

export default STeamMemberCard