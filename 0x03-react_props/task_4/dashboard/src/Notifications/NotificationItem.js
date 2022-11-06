import React from "react";
import PropTypes from 'prop-types';

function NotificationItem(props) {
    const html = props.html;
    const type = props.type;
    const value = props.value;
    let listItem;

    if (value) {
        listItem = <li data-notification-type={type}>{value}</li>;
    } else {
        listItem = (
        <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
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