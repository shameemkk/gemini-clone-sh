import React from 'react'
import { useState } from 'react'
import './Sidebar.css'
import { assets } from '/src/assets/assets'
const Sidebar = () => {
    const [extened, setExtened] = useState(false)

    return (
        <div className='sidebar'>
            <div className="top">

                <img onClick={()=>{setExtened(prev=>!prev)}} className='menu' src={assets.menu_icon} alt="menu_icon" />
                <div className="newchat">
                    <img src={assets.plus_icon} alt="plus_icon" />
                    {extened ? <p>New Chat</p> : null}
                </div>
                {extened ?
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        <div className="recent-entry">
                            <img src={assets.message_icon} alt="message_icon" />
                            <p>What is react...</p>
                        </div>
                    </div> : null}

            </div>
            <div className="bottom">
                <div className="botton-item recent-entry">
                    <img src={assets.question_icon} alt="question_icon" />
                    {extened? <p>Help</p>: null}
                </div>
                <div className="botton-item recent-entry">
                    <img src={assets.history_icon} alt="history_icon" />
                    {extened?<p>Activity</p>:null}
                </div>
                <div className="botton-item recent-entry">
                    <img src={assets.setting_icon} alt="setting_icon" />
                    {extened?<p>Settings</p>:null}
                </div>

            </div>
        </div>
    )
}

export default Sidebar