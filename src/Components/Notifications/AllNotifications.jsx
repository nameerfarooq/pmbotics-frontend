import { useState, useEffect } from 'react'
import './Notifications.css'
import '../MainStyling.css'
import '../Project/projects.css'
import Notification from './Notification'
import axios from '../../axiosConfig'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Table } from 'react-bootstrap'

function AllNotifications() {

    const [selectedNotification, setSelectedNotification] = useState({
        id: '',
        title: "",
        description: "",
        createdate: "",
        createtime: "",
        department: '',
        createdby: '',
        name: ""
    })
    const [show, setShow] = useState(false);

    const [notifications, setNotifications] = useState('')
    useEffect(() => {
        getAllnotifications()
    }, [])
    const getAllnotifications = async () => {
        await axios.get('allnotifications')
            .then((res) => {

                if (res.data.message === "Success") {

                    setNotifications(res.data.body)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const navigate = useNavigate()
    const gotocreatenotification = () => {
        navigate('/fyp_panel/create-notification')
    }

    // search

    const [searchQuery, setSearchQuery] = useState("");
    const filteredNotifications = notifications ? notifications.filter((notification) =>
        notification.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
        :
        null;
    // update notifications
    const handleClose = () => setShow(false);
    const handleShow = (notification) => {
        setSelectedNotification(notification)
        setShow(true);

    }
    const updateClicked = (ClickedNotification) => {
        setSelectedNotification(ClickedNotification)
        handleShow()

    }
    const UpdateNotification = async () => {

        // eslint-disable-next-line
        const response = await axios.patch('updatenotification',
            selectedNotification)
            .then(res => {

                if (res.data.message === "Success") {
                    alert("updated Successfully")
                    setSelectedNotification({
                        id: '',
                        title: "",
                        description: "",
                        createdate: "",
                        createtime: "",
                        department: '',
                        createdby: '',
                        name: ""
                    })
                    handleClose()
                    getAllnotifications()

                }
                else if (res.data.exception === "some exception") {
                    let errorMessages = [];
                    if (typeof res.data.message === "object") {
                        // If the message is an object, extract the error messages from it
                        for (let field in res.data.message) {
                            if (Array.isArray(res.data.message[field])) {
                                errorMessages.push(...res.data.message[field]);
                            }
                        }
                    } else {
                        // Otherwise, add the message to the error messages array
                        errorMessages.push(res.data.message);
                    }
                    if (errorMessages.length > 0) {
                        // If there are error messages, show them in an alert box
                        alert(errorMessages[0]);
                    } else {
                        // Otherwise, show the exception message
                        alert(res.data.exception);
                    }
                } else {
                    alert(res.data.exception);
                }
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleChange = (e) => {
        setSelectedNotification({ ...selectedNotification, [e.target.name]: e.target.value });
    };

    return (
        <>
            {notifications ?
                <div>
                    {/* showing popup for updating student */}

                   


                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Edit Notification</Modal.Title>
                        </Modal.Header>



                        <Modal.Body>
                            <form >
                                <div className="form-group">
                                    <label htmlFor="email">title</label>
                                    <input required type="email" className="form-control" id="title" name="title" value={selectedNotification.title} onChange={handleChange} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="name">Description</label>
                                    <input required type="text" className="form-control" id="description" name="description" value={selectedNotification.description} onChange={handleChange} />
                                </div>


                            </form>


                        </Modal.Body>





                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={UpdateNotification}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>


                    <div className='ProjectHeader'>
                        <button className='New-Project-btn' onClick={() => { gotocreatenotification() }}>New</button>
                        <h2 className='ProjectHeading'>Notifications</h2>
                    </div>
                    <div className="searchbar-container">
                        <input type="text" placeholder='Search notifications by title' className="searchbar" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />

                    </div>
                    <div className='MainContainerDiv'>

                        <Table striped>
                            <thead>
                                <tr style={{ fontWeight: 'bold' }}>
                                    <td>S #</td>
                                    <td>Title</td>
                                    <td>Details</td>
                                    <td>Created by</td>
                                    <td>Create Date</td>
                                    <td>Create Time</td>
                                    <td>Actions</td>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredNotifications.map((notification, Index) => (
                                    <Notification key={'Noti' + Index} Index={Index} handleShow={handleShow} refreshnotifications={getAllnotifications} details={notification} />
                                ))}
                            </tbody>
                        </Table>





                    </div>
                </div >
                :
                <p>Loading</p>
            }
        </>
    )
}

export default AllNotifications