import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext, useState } from 'react'
import MyContext from '../../Context/MyContext'

function EditMilestone() {

    const { id } = useParams()
    const { milestones } = useContext(MyContext)
    const filteredMilestone = milestones.filter(milestone => milestone.id == id)
    const [milestone, setMilestone] = useState(filteredMilestone[0])
    console.log(milestone)


    // return (
    //     // <div>
    //     //     <h3 className='CP-Title2'>
    //     //         Add Milestone details
    //     //     </h3>

    //     //     <div className='FormMainContainer'>
    //     //         <Form>

    //     //             <label >Milestone Name</label>
    //     //             <Form.Control value={MilestoneName} onChange={(e) => setMilestoneName(e.target.value)} type="text" />

    //     //             <label >Document Submission Date</label>
    //     //             <Form.Group controlId="duedate">
    //     //                 <Form.Control
    //     //                     type="date"
    //     //                     name="duedate"
    //     //                     placeholder="Due date"
    //     //                     value={Duedate}
    //     //                     onChange={(e) => setDueDate(e.target.value)}
    //     //                 />
    //     //             </Form.Group>
    //     //             <label >Milestone Defending Date</label>
    //     //             <Form.Group controlId="duedate">
    //     //                 <Form.Control
    //     //                     type="date"
    //     //                     name="duedate"
    //     //                     placeholder="Due date"
    //     //                     value={Defendingdate}
    //     //                     onChange={(e) => setDefendingDate(e.target.value)}
    //     //                 />
    //     //             </Form.Group>


    //     //             <label >Milestone Details</label>
    //     //             <Form.Control value={MilestoneDetails} onChange={(e) => setMilestoneDetails(e.target.value)} type="text" className='CM-Des' />


    //     //             <label >FYP Panel</label>
    //     //             <Form.Control value={FYPpanel} onChange={(e) => setFYPpanel(e.target.value)} type="text" className='' />


    //     //             <div className='PC-btnHolder'>
    //     //                 <Button onClick={ClearForm} className='PC-btn1' variant="secondary" type="submit">
    //     //                     Cancel
    //     //                 </Button>
    //     //                 <Button onClick={SubmitForm} className='PC-btn2' variant="primary" type="submit">
    //     //                     Create Milestone
    //     //                 </Button>
    //     //             </div>
    //     //         </Form>

    //     //     </div>
    //     // </div>

    // )
}

export default EditMilestone