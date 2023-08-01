import { useState, useEffect } from 'react'
import { Table, Button } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'
const TasksInner = ({ projectId }) => {
    const [show, setShow] = useState(false)
    const [data, setdata] = useState([])
    const handleShow = () => { setShow(true) }
    const handleClose = () => { setShow(false) }
    // const handlechange = (e) => {
    //     setdata({ ...notification, [e.target.name]: e.target.value })
    // }
    return (
        <div className='main-inner-for-tasks'>
            <br /><br />
            <h2>All Tasks</h2>
            <Table striped hover>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Title</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <th>UI/UX</th>
                        <th>10-5-2024</th>
                        <th>12-6-2030</th>
                        <th>
                            <span className='notispanright no-float'>
                                <button className='Icon-btn-EM'>
                                    <img alt='iconsimages' src={require('../../../../Images/pencil.png')} className="Icons-EM" />
                                </button>
                                <button className='Icon-btn-EM'>
                                    <img alt='iconsimages' src={require('../../../../Images/delete.png')} className="Icons-EM" />
                                </button>
                            </span>
                        </th>
                    </tr>
                    <tr>
                        <th>1</th>
                        <th>UI/UX</th>
                        <th>10-5-2024</th>
                        <th>12-6-2030</th>
                        <th>
                            <span className='notispanright no-float'>
                                <button className='Icon-btn-EM'>
                                    <img alt='iconsimages' src={require('../../../../Images/pencil.png')} className="Icons-EM" />
                                </button>
                                <button className='Icon-btn-EM'>
                                    <img alt='iconsimages' src={require('../../../../Images/delete.png')} className="Icons-EM" />
                                </button>
                            </span>
                        </th>
                    </tr>
                    <tr>
                        <th>1</th>
                        <th>UI/UX</th>
                        <th>10-5-2024</th>
                        <th>12-6-2030</th>
                        <th>
                            <span className='notispanright no-float'>
                                <button className='Icon-btn-EM'>
                                    <img alt='iconsimages' src={require('../../../../Images/pencil.png')} className="Icons-EM" />
                                </button>
                                <button className='Icon-btn-EM'>
                                    <img alt='iconsimages' src={require('../../../../Images/delete.png')} className="Icons-EM" />
                                </button>
                            </span>
                        </th>
                    </tr>
                    <tr>
                        <th>1</th>
                        <th>UI/UX</th>
                        <th>10-5-2024</th>
                        <th>12-6-2030</th>
                        <th>
                            <span className='notispanright no-float'>
                                <button className='Icon-btn-EM'>
                                    <img alt='iconsimages' src={require('../../../../Images/pencil.png')} className="Icons-EM" />
                                </button>
                                <button className='Icon-btn-EM'>
                                    <img alt='iconsimages' src={require('../../../../Images/delete.png')} className="Icons-EM" />
                                </button>
                            </span>
                        </th>
                    </tr>
                    <tr>
                        <th>1</th>
                        <th>UI/UX</th>
                        <th>10-5-2024</th>
                        <th>12-6-2030</th>
                        <th>
                            <span className='notispanright no-float'>
                                <button className='Icon-btn-EM'>
                                    <img alt='iconsimages' src={require('../../../../Images/pencil.png')} className="Icons-EM" />
                                </button>
                                <button className='Icon-btn-EM'>
                                    <img alt='iconsimages' src={require('../../../../Images/delete.png')} className="Icons-EM" />
                                </button>
                            </span>
                        </th>
                    </tr>
                    <tr>
                        <th>1</th>
                        <th>UI/UX</th>
                        <th>10-5-2024</th>
                        <th>12-6-2030</th>
                        <th>
                            <span className='notispanright no-float'>
                                <button className='Icon-btn-EM'>
                                    <img alt='iconsimages' src={require('../../../../Images/pencil.png')} className="Icons-EM" />
                                </button>
                                <button className='Icon-btn-EM'>
                                    <img alt='iconsimages' src={require('../../../../Images/delete.png')} className="Icons-EM" />
                                </button>
                            </span>
                        </th>
                    </tr>
                    <tr>
                        <th>1</th>
                        <th>UI/UX</th>
                        <th>10-5-2024</th>
                        <th>12-6-2030</th>
                        <th>
                            <span className='notispanright no-float'>
                                <button className='Icon-btn-EM'>
                                    <img alt='iconsimages' src={require('../../../../Images/pencil.png')} className="Icons-EM" />
                                </button>
                                <button className='Icon-btn-EM'>
                                    <img alt='iconsimages' src={require('../../../../Images/delete.png')} className="Icons-EM" />
                                </button>
                            </span>
                        </th>
                    </tr>
                    <tr>
                        <th>1</th>
                        <th>UI/UX</th>
                        <th>10-5-2024</th>
                        <th>12-6-zz2030</th>
                        <th>
                            <span className='notispanright no-float'>
                                <button onClick={handleShow} className='Icon-btn-EM'>
                                    <img alt='iconsimages' src={require('../../../../Images/pencil.png')} className="Icons-EM" />
                                </button>
                                <button className='Icon-btn-EM'>
                                    <img alt='iconsimages' src={require('../../../../Images/delete.png')} className="Icons-EM" />
                                </button>
                            </span>
                        </th>
                    </tr>
                    <tr>
                        <th>1</th>
                        <th>UI/UX</th>
                        <th>10-5-2024</th>
                        <th>12-6-2030</th>
                        <th>
                            <span className='notispanright no-float'>
                                <button className='Icon-btn-EM'>
                                    <img alt='iconsimages' src={require('../../../../Images/pencil.png')} className="Icons-EM" />
                                </button>
                                <button className='Icon-btn-EM'>
                                    <img alt='iconsimages' src={require('../../../../Images/delete.png')} className="Icons-EM" />
                                </button>
                            </span>
                        </th>
                    </tr>
                </tbody>
            </Table>
            <div className="addTask">
                + Add Task
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Department</Modal.Title>
                </Modal.Header>



                <Modal.Body>
                    <form >

                        aaaaa
                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={() => setShow("hello")} variant="primary">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    )
}

export default TasksInner