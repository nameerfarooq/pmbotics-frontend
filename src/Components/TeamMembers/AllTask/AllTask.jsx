import { useState, useEffect } from 'react'
import axios from '../../../axiosConfig'
import { Table } from 'react-bootstrap'
const AllTask = ({ projectId }) => {
    const [tickets, setTickets] = useState([])

    const getAlltickets = async () => {
        const response = await axios.get(`ticket?pro_id=${projectId}?pro_id=${projectId}`)
            .then((res) => {
                if (res.data.message == "Success") {
                    console.log(res, "Mubarakasss")
                    setTickets(res.data.data)
                }
            })
            .then((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        getAlltickets()

    }, [projectId])
    return (
        <div className='All-task-for-student'>
            <h3>All Tasks</h3>
            <div className='download-task-log-btn'>
                <a href={`https://usamaali.pythonanywhere.com/ticketlog?id=${projectId}`}>
                    <button className='btn'>Download Tasks Log</button>
                </a>
            </div>
            <Table striped hover bordered>
                <thead>
                    <tr>
                        <th>S No</th>
                        <th>Title</th>
                        <th>Start date</th>
                        <th>End date</th>
                        <th>Assigned to</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tickets?.length > 0 ?

                            tickets.map((ticket, Index) => (


                                <tr key={Index}>
                                    <td>{Index + 1}</td>
                                    <td>{ticket.title}</td>
                                    <td>{ticket.start_date}</td>
                                    <td>{ticket.end_date}</td>
                                    <td>{ticket.assignee_name}</td>
                                </tr>

                            ))


                            :
                            <tr>
                                <td colspan={5}>No tasks available</td>
                            </tr>
                    }
                </tbody>
            </Table >
        </div >
    )
}

export default AllTask