import AddDepartment from '../Dashboard/Departments/AddDepartment'
import AllDepartments from '../Dashboard/Departments/AllDepartments'
import Header from '../Dashboard/Header'
import './Admin.css'
import { useState } from 'react'
const Welcome = () => {
    const [showScreen, setshowScreen] = useState(0)
    return (
        <div className='Welcome-screen'>
            {showScreen === 0 &&
                <>
                    <div className='Uni-name'>
                        {localStorage.getItem('univeristyName')}
                    </div>
                    <div className='admin-actions'>
                        <div onClick={() => setshowScreen(1)} className='action'>
                            Create New Department
                        </div>
                        <div onClick={() => setshowScreen(2)} className='action'>
                            View/Edit Department
                        </div>
                    </div>
                </>
            }
            {/* Create New Department */}
            {showScreen === 1 &&
                <>
                    <AddDepartment setshowScreen={setshowScreen} />
                </>
            }
            {/* Create New Department */}
            {showScreen === 2 &&
                <>
                    <AllDepartments setshowScreen={setshowScreen} />
                </>
            }
        </div >
    )
}

export default Welcome