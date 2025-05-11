import {Circle, X} from "lucide-react";

export default function Status({xWins, oWins, draws, isPlayerX}) {
    return (<div className={"pb-2 w-80 sm:w-100 flex justify-around gap-4 sm:gap-5 text-[#090518]"}>

        <div className={"flex flex-col justify-center items-center w-24 rounded-xl sm:w-30 bg-[#1b92ed] p-1"}>
            <span className={"flex items-center"}>
                <X size={20}/>
                <span className={'text-bold text-sm flex items-center'}>
                    {isPlayerX !== undefined &&
                        (isPlayerX ? "(YOU)" : "(CPU)")}
                </span>
            </span>
            <span className={"font-bold text-lg"}>{xWins}</span>
        </div>

        <div className={"flex flex-col justify-center items-center w-24 rounded-xl sm:w-30 bg-[#a8bfc9]"}>
            Draws
            <span className={"font-bold text-lg"}>{draws}</span>
        </div>

        <div className={"flex flex-col justify-center items-center w-24 rounded-xl sm:w-30 bg-[#a437ff] p-1"}>
            <span className={"flex items-center gap-1 justify-center"}>
                <Circle size={17} strokeWidth={3}/>
                <span className={'text-bold text-sm'}>
                    {isPlayerX !== undefined &&
                        (isPlayerX ? "(CPU)" : "(YOU)")}
                </span>
            </span>
            <span className={"font-bold text-lg"}>{oWins}</span>
        </div>

    </div>)
}