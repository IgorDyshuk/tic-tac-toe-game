export default function Status({winner, xIsNext}) {
    return (
        <div className={"pb-2 w-[332px] h-[100px] bg-[#2a2342] rounded-lg"}>
            {winner ?
                `Winner: ${winner}`
                :
                `Next player: ${xIsNext ? "X" : "O"}`
            }
        </div>
    )
}