import React from "react";


export default function CourseListRow(props) {
    if (props.isHeader) {
        if (props.textSecondCell === null) {
            return (
                <tr>
                    <th colSpan = {2}>{props.textFirstCell} </th>
                </tr>
            )
        }
        if (props.textSecondCell !== null) {
            return (
                <tr>
                    <th>{props.textFirstCell}</th>
                    <th>{props.textSecondCell}</th>
                </tr>
            )
        }
    }
    else if (!props.isHeader) {
        return (
            <tr>
                <td>{props.textFirstCell}</td>
                <td>{props.textSecondCell}</td>
            </tr>
            
        )
    }
}