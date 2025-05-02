import {X} from "lucide-react";
import AdaptiveIcon from "../utils/adaptive-icon.jsx";

export default function Cross({maxSize, minSize, strokeWidth, isWinning}) {
    const textColor = isWinning ? "#090518" : "#1b92ed";

    return <span className={`flex justify-center items-center text-5xl font-bold text-[${textColor}]`}>
        <AdaptiveIcon icon={X} maxSize={maxSize} minSize={minSize} strokeWidth={strokeWidth}/>
    </span>
}