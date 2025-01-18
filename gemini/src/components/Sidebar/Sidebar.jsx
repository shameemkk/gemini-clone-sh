import React from 'react'
import './Sidebar.css'
import { assets } from '/src/assets/assets'
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
        
            <img className='menu' src={assets.menu_icon} alt="menu_icon" />
            <div className="newchat">
                <img src={assets.plus_icon} alt="plus_icon" />
                <p>New Chat</p>
            </div>
            <div className="recent">
                <p className="recentitittle">Recent</p>
                <div className="recent-entry">
                    <img src={assets.message_icon} alt="message_icon"/>
                    <p>What is react ....</p>
                </div>
            </div>
        </div>
        <div className="bottom">
            <div className="botton-item">
                <img src={assets.question_icon} alt="question_icon"/>
                <p>Help</p>
            </div>
            <div className="botton-item">
                <img src={assets.history_icon} alt="history_icon"/>
                <p>Activity</p>
            </div>
            <div className="botton-item">
                <img src={assets.setting_icon} alt="setting_icon"/>
                <p>Settings</p>
            </div>

        </div>
    </div>
  )
}

export default Sidebar