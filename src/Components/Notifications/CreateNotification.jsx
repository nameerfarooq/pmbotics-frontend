import './Notifications.css'
import '../../Components/MainStyling.css'
import '../Project/projects.css'
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import axios from '../../axiosConfig';
function CreateNotification() {

    const [notification, setNotification] = useState({
        title: "",
        description: "",
        department: localStorage.getItem('departmentId'),
        createdby: localStorage.getItem('userId')
    })


    const handlechange = (e) => {
        setNotification({ ...notification, [e.target.name]: e.target.value })
    }
    const navigate = useNavigate()
    const Goback = () => {
        navigate('/fyp_panel/all-notifications')
    }


    const submitNotification = async (e) => {
        e.preventDefault()
        await axios.post('createnotification', notification)
            .then((res) => {
                console.log(res)
                if(res.data.message === "Success"){
                    alert("Notification Created Successfully")
                    Goback()
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }





    return (
        <div className='CreateProjectScreen'>
            <h2 className='Heading BlueTxt'>
                Create Notification
            </h2>
            <div className='FormMainContainer'>
                <Form>

                    {/* <label >Department</label>
                    <Form.Select aria-label="Default select example">
                        <option>select</option>
                        <option value="1">Computer Science</option>
                        <option value="2">Software Engineering</option>
                        <option value="3">Electrical Engineering</option>
                        <option value="4">Power Engineering</option>
                        <option value="5">Electronics Engineering</option>
                        <option value="6">Computer Engineering</option>

                    </Form.Select> */}




                    <label >Notification Title</label>
                    <Form.Control type="text" name='title' value={notification.title} onChange={handlechange} />
                    <label >Description</label>
                    <Form.Control type="text" name='description' value={notification.description} onChange={handlechange} />









                    <div className='PC-btnHolder'>
                        <Button onClick={Goback} className='PC-btn1' variant="secondary" type="submit">
                            Cancel
                        </Button>
                        <Button onClick={submitNotification} className='PC-btn2' variant="primary" type="submit">
                            Create
                        </Button>
                    </div>
                </Form>

            </div>

        </div>
    )
}

export default CreateNotification