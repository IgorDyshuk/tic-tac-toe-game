import HooverCross from "./hoover-cross.jsx";
import HooverCircle from "./hoover-circle.jsx";
import AdaptiveHooverIcon from "../utils/adaptive-hoover-icon.jsx";

export function Square({value, onSquareClick, isWinning, winnerPlayer, xIsNext, isBotTurn = false}) {
    const squareStyle = winnerPlayer === "draw"
        ? "bg-[#2a2342] text-gray-500"
        : isWinning
            ? winnerPlayer === "X"
                ? "bg-[#1b92ed] text-[#090518]"
                : "bg-[#a437ff] text-[#090518]"
            : "bg-[#19152c]";

    const hoverIcon = xIsNext
        ? <AdaptiveHooverIcon icon={HooverCross} maxSize={100} minSize={84}/>
        : <AdaptiveHooverIcon icon={HooverCircle} maxSize={100} minSize={84}/>;

    return (
        <button
            className={`w-24 h-24 rounded-xl sm:w-30 sm:h-30 relative group ${squareStyle}`}
            onClick={onSquareClick}
        >
            {value}

            {!value && (

                <div
                    className={`absolute inset-0 flex items-center justify-center transform scale-0 opacity-0
                        ${isBotTurn ?
                        'pointer-events-none' :
                        'group-hover:opacity-100 group-hover:scale-100 transition duration-150 cursor-pointer'
                    }`}>

                    {hoverIcon}
                </div>
            )}
        </button>
    );
}
