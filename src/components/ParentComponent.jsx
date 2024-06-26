import { ChildComponent } from "./ChildComponent";

export function ParentComponent() {
    return <div>This is parent Component
        <ChildComponent message = "Hey Hi Child Component" />
    </div>
}