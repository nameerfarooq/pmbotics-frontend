import { useState, useEffect } from 'react'
import '../../Notifications/Notifications.css'
import '../../MainStyling.css'
import '../../Project/projects.css'
import Notification from '../../Notifications/Notification'
import axios from '../../../axiosConfig'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Table } from 'react-bootstrap'

function SAllNotifications() {




    const [notifications, setNotifications] = useState('')
    useEffect(() => {
        getAllnotifications()
    }, [])
    const getAllnotifications = async () => {
        await axios.get('getallnotifications')
            .then((res) => {

                if (res.data.message === "Success") {

                    setNotifications(res.data.body)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }



    // search

    const [searchQuery, setSearchQuery] = useState("");
    const filteredNotifications = notifications ? notifications.filter((notification) =>
        notification.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
        :
        null;

    return (
        <>
            {notifications ?
                <div>



                    <div className='ProjectHeader'>
                        <h2 className='ProjectHeading'>Announcements</h2>
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
                                    <Notification key={'Noti' + Index} Index={Index} refreshnotifications={getAllnotifications} details={notification} />
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

export default SAllNotifications