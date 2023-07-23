import Header from '../Dashboard/Header'
import './Admin.css'
const Welcome = () => {
    return (
        <div className='Welcome-screen'>
            <div className='Uni-name'>
                {localStorage.getItem('univeristyName')}
            </div>
            <div className='admin-actions'>
                <div className='action'>
                    Create New Department
                </div>
                <div className='action'>
                    View/Edit Department
                </div>
            </div>
        </div>
    )
}

export default Welcome