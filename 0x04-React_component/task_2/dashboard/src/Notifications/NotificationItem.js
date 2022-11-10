import React from "react";
import PropTypes from 'prop-types';

function NotificationItem(props) {
    const html = props.html;
    const type = props.type;
    const value = props.value;
    const markAsRead = props.markAsRead;
    const id = props.id
    let listItem;

    if (value) {
        listItem = <li data-notification-type={type} onClick={() => markAsRead(id)}>{value}</li>;
    } else {
        listItem = (
        <li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)}></li>
        );
    }

    return listItem;
}

NotificationItem.propTypes = {
    html : PropTypes.shape({
        __html: PropTypes.string
    }),
    value: PropTypes.string,
    type: PropTypes.string
}

NotificationItem.defaultProp = {
    type: "default"
}

export default NotificationItem;