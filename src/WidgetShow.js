import React from 'react';

const WidgetShow = (props) => {
    console.log(props);
    return (
        <div>
            <h1>You entered this URL parameter: {props.match.params.id}</h1>
        </div>
    )
}

export default WidgetShow;