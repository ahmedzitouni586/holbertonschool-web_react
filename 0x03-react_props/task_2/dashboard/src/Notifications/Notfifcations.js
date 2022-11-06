import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

function Notifications() {
    const btnStyle = {
        background: 'transparent',
        padding: '1rem 2rem',
        border: 'none',
        position: 'absolute',
        right: 10,
        fontSize: '1rem'
    };
    return <div className='Notifications'>
        <button style={btnStyle}><img width='15px' height='15px' alt='close icon' src={closeIcon} /></button>
        <p>Here is the list of notifications</p>
        <ul>
            <NotificationItem type='urgent' value='New course available' />
            <NotificationItem type='urgent' value='New course available' />
            <NotificationItem type='urgent' html={{ __html: getLatestNotification() }} />
            
        </ul>
    </div>;
}
export default Notifications;