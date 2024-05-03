import { useContext } from "react";
import ChangeProfile from "./ChangeProfile";
import { AppContext } from "../App";

function Profile() {
    const {userName} = useContext(AppContext);
    return <div>This is {userName} Profile
    <ChangeProfile/></div>;
}

export default Profile;