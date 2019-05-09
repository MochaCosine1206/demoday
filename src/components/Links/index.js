import React from "react";
import "./style.css";


export function Links(props) {
    return (
        <div id="links" style={props.style}>
            <a href={props.url} target="_blank" rel="noopener noreferrer" style={{ color: props.style.color }}>{props.text}</a>
        </div>

    );
}


export default Links