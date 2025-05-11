export function Square({value, onSquareClick, isWinning, winnerPlayer}) {
    const squareStyle = winnerPlayer === "draw" ?
        "bg-[#2a2342] text-gray-500"
        :
        isWinning ?
            winnerPlayer === "X" ?
                "bg-[#1b92ed] text-[#090518]"
                :
                "bg-[#a437ff] text-[#090518]"
            :
            "bg-[#19152c]"


    return (
        <button
            className={`w-24 h-24 rounded-xl hover:cursor-pointer ${squareStyle} sm:w-30 sm:h-30`}
            onClick={onSquareClick}
        >
            {value}
        </button>

    )
}