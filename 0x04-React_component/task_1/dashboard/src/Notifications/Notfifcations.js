import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';


function Notifications({displayDrawer, listNotifications}) {
  
  if (displayDrawer === true) {
    return (
      <>
        <div className='menuItem'>Your notifications</div>
        <div className='Notifications'>
          <p>Here is the list of notifications</p>
          <ul>
            
            {listNotifications.length === 0 &&
              <NotificationItem type='default' value='No new notification for now' />
            }
            {listNotifications.map((item) => (
              <NotificationItem 
              key={item.id}
              html={item.html}
              type={item.type}
              value={item.value}
              />
            ))}
          </ul>
          <button
            aria-label='Close'
            type='button'
            onClick={() => console.log('Close button has been clicked')}
            style={{
              position: 'absolute',
              right: '5px',
              top: '10px',
              cursor: 'pointer',
              maxHeight: '17px',
              background: 'transparent',
              border: 'none',
            }}
          >
            <img
              src={closeIcon}
              alt='close-icon'
              style={{
                position: 'relative',
                maxHeight: '12px',
                background: 'transparent',
                border: 'none',
              }}
            />
          </button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className='menuItem'>Your notifications</div>
      </>
    );
  }
    
}

Notifications.defaultProps = {
  displayDrawer : false
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
}




export default Notifications;