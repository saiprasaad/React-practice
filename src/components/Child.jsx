import React from "react";

export const Child = React.memo((props) => {
    return <div>{props.message}
        <button onClick={props.onAction}>Click</button></div>
});