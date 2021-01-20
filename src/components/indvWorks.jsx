import React from 'react';

function indvWorks(props) {
    return (
        <div>
            <h3>A Thing I've Done</h3>
            <p>A page with item {props.match.params.id} </p>
        </div>
    )
};

export default indvWorks;