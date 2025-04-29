export function Square({value, onSquareClick, isWinning}) {
    const squareStyle = isWinning ? "bg-[#2a2342]" : "bg-[#19152c]";

    return (
        <button
            className={`w-22 h-22 rounded-xl hover:cursor-pointer ${squareStyle} sm:w-25 sm:h-25`}
            onClick={onSquareClick}
        >
            {value}
        </button>

    )
}