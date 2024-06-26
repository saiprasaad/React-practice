export function ChildComponent(props) {
    return <div>This is Child Component.
        <br />
        Message from Parent Component:
        {(props.message && props.message.length > 0) ? <p>{props.message}</p>: <p>No messages</p>}
    </div>
}