export default function Status({winner, xIsNext}) {
    return (
        <div className={"pb-2"}>
            {winner ?
                `Winner: ${winner}`
                :
                `Next player: ${xIsNext ? "X" : "O"}`
            }
        </div>
    )
}