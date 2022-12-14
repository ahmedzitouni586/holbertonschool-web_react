import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

function Notifications({displayDrawer}) {
  
  if (displayDrawer === true) {
    return (
      <>
        <div className='menuItem'>Your notifications</div>
        <div className='Notifications'>
          <p>Here is the list of notifications</p>
          <ul>
            <NotificationItem type='default' value='New course available' />
            <NotificationItem type='urgent' value='New resume available' />
            <NotificationItem
              type='urgent'
              html={{ __html: getLatestNotification() }}
            />
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
    displayDrawer: PropTypes.bool
}




export default Notifications;