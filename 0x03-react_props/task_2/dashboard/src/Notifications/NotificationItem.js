import React from "react";

export default function NotificationItem(props) {
    if (props.html) {
        return (
            <li type={props.type} dangerouslySetInnerHTML={props.html}>
            </li>
        );
    }
    return (
        <li type={props.type}>
            {props.value}
        </li>
    );
}