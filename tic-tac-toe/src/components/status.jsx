import {Circle, X} from "lucide-react";

export default function Status({xWins, oWins, draws}) {
    return (<div className={"pb-2 w-74 sm:w-83 flex justify-around gap-4 text-[#090518]"}>

        <div className={"flex flex-col justify-center items-center w-22 rounded-xl sm:w-25 bg-[#1b92ed] p-1"}>
            <span className={"flex items-center"}>
                <X size={20}/>
                <span className={'text-sm'}></span>
            </span>
            <span className={"font-bold text-lg"}>{xWins}</span>
        </div>

        <div className={"flex flex-col justify-center items-center w-22 rounded-xl sm:w-25 bg-[#a8bfc9]"}>
            Draws
            <span className={"font-bold text-lg"}>{draws}</span>
        </div>

        <div className={"flex flex-col justify-center items-center w-22 rounded-xl sm:w-25 bg-[#a437ff] p-1"}>
            <span className={"flex items-center gap-1 justify-center"}>
                <Circle size={17} strokeWidth={3}/>
                <span className={'text-sm'}></span>
            </span>
            <span className={"font-bold text-lg"}>{oWins}</span>
        </div>

    </div>)
}