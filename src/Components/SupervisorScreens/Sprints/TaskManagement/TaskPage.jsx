import './Task.css'
import { useState } from 'react'
import TasksInner from './TasksInner'
const TaskPage = () => {
    const [selectedTab, setSelectedTab] = useState(0)
    return (
        <div className='TaskPageMain'>
            <div className='Tabs-holder'>
                <div onClick={() => setSelectedTab(0)} className={`tabsForTask ${selectedTab === 0 && "activeTab"}`}>
                    PMBOTICS
                </div>
                <div onClick={() => setSelectedTab(1)} className={`tabsForTask ${selectedTab === 1 && "activeTab"}`}>
                    FYPManager
                </div>
                <div onClick={() => setSelectedTab(2)} className={`tabsForTask ${selectedTab === 2 && "activeTab"}`}>
                    ChatGPT
                </div>

            </div>
            <div className="tasksInner">
                <TasksInner projectId={selectedTab} />
            </div>
        </div>
    )
}

export default TaskPage