import {RotateCw} from "lucide-react";

export default function ResetButton(props) {
    return <button
        onClick={props.onClick}
        className="bg-[#19152c] hover:bg-[#2a2342] hover:cursor-pointer text-white font-bold p-2 rounded-xl absolute right-0"
    >
        <RotateCw strokeWidth={3} size={25}/>
    </button>;
}