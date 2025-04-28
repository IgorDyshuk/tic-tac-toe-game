export function Square({value, onSquareClick, isWinning}) {
    const squareStyle = isWinning ? "bg-[#2a2342]" : "bg-[#19152c]";

    return (
        <button
            className={`square hover:cursor-pointer ${squareStyle}`}
            onClick={onSquareClick}
        >
            {value}
        </button>

    )
}