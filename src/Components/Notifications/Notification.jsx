import React from 'react'
import './Notifications.css'
import '../../Components/MainStyling.css'
import axios from '../../axiosConfig'
function Notification(props) {
    const handleShow = props.handleShow
    const getAllnotifications = props.refreshnotifications
    const notification = props.details
    const { id, createdby, title, description, name, createdate, createtime } = notification
const deleteNotification =async()=>{
    await axios.delete(`deletenotification/${id}`)
    .then((res)=>{
        console.log(res)
        if(res.data.message==="Successfuly deleted"){
            alert("notification deleted")
            getAllnotifications()
        }
    })
    .catch((err)=>{
        console.log(err)
    })
}
    return (
        <div className='Card-Notification AddShadow'>
            <h2 className='Notification-title'>
                {title.length > 14 ?
                    `${title.slice(0, 14)}...`
                    :
                    title
                }
                {createdby == localStorage.getItem('userId') ?

                    <span className='notispanright'>
                        <button className='Icon-btn-EM'>
                            <img alt='iconsimages' onClick={()=>{handleShow(notification)}} src={require('../../Images/pencil.png')} className="Icons-EM" />
                        </button>
                        <button className='Icon-btn-EM'>
                            <img alt='iconsimages' onClick={deleteNotification} src={require('../../Images/delete.png')} className="Icons-EM" />
                        </button>
                    </span>

                    :
                    null
                }

            </h2>
            <p className='Notification-desc'>
                {description}
            </p>
            <p className='Notification-author'>
                Created By: {name}
            </p>
            <p className='Notification-time'>
                Created on: {createtime} ,{createdate}
            </p>
        </div>
    )
}

export default Notification