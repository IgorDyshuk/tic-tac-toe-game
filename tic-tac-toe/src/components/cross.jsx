import {X} from "lucide-react";
import AdaptiveIcon from "../utils/adaptive-icon.jsx";

export default function Cross() {
    return <span className={"flex justify-center items-center text-5xl font-bold text-[#1b92ed]"}>
        <AdaptiveIcon icon={X} maxSize={85} minSize={75} strokeWidth={3}/>
    </span>
}