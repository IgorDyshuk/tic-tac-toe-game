import {Circle} from "lucide-react";
import AdaptiveIcon from "../utils/adaptive-icon.jsx";

export default function Zero({maxSize, minSize, strokeWidth}) {
    return <div className={"flex justify-center items-center text-5xl font-bold text-[#a437ff]"}>
        <AdaptiveIcon icon={Circle} maxSize={maxSize} minSize={minSize} strokeWidth={strokeWidth}/>
    </div>
}