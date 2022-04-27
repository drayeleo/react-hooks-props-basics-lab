import React from "react";

function Links(props) {
    //console.log(props.links);
    
    return (
        <div>
            <h3>Links</h3>
            {props.github ? <a href={props.github}>{props.github}</a> : <a></a>}
            {props.linkedin ? <a href={props.linkedin}>{props.linkedin}</a> : <a></a>}
        </div>
    );
}

export default Links;