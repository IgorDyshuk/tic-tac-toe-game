export function Square({value, onSquareClick}) {
    return (
        <button
            className={"square hover:cursor-pointer"}
            onClick={onSquareClick}
        >
            {value}
        </button>

    )
}