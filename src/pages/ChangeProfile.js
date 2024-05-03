import { useContext, useState } from "react";
import { AppContext } from "../App";

function ChangeProfile() {
    const {setUsername} = useContext(AppContext);
    const [newUsername, setNewUsername] = useState("");
    function changeUsername(event) {
        setNewUsername(event.target.value);
    }

    return <div><input onChange={changeUsername} /><button onClick={() => setUsername(newUsername)}>Update username</button></div>
}

export default ChangeProfile;