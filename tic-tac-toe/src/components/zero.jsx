import {Circle} from "lucide-react";
import AdaptiveIcon from "../utils/adaptive-icon.jsx";

export default function Zero({maxSize, minSize, strokeWidth, isWinning}) {
    const textColor = isWinning ? "#090518" : "#a437ff";

    return <div className={`flex justify-center items-center text-5xl font-bold text-[${textColor}]`}>
        <AdaptiveIcon icon={Circle} maxSize={maxSize} minSize={minSize} strokeWidth={strokeWidth}/>
    </div>
}