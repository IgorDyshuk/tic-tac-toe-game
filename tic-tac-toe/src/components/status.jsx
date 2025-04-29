export default function Status({winner, xIsNext}) {
    const X = <span className={"text-[#1b92ed]"}> X</span>;
    const O = <span className={"text-[#a437ff]"}> O</span>;

    return (<div className={"pb-2 w-74 sm:w-83 h-[100px] bg-[#2a2342] rounded-lg flex flex-col"}>
        <div className={"flex justify-between p-2 font-bold"}>
            <span className={"text-[#1b92ed]"}>Player X:</span>
            <span className={"text-[#a437ff]"}>Player O:</span>
        </div>
        <div className={"flex-1 flex justify-center items-start text-2xl font-bold text-white pt-2"}>
            {winner ? (<span className={"flex gap-1 items-center"}>
                Winner: {' '}
                <span className={winner === "X" ? "text-[#1b92ed]" : "text-[#a437ff]"}>
                    {winner}
                </span>
            </span>) : (
                <span className={"flex gap-1 items-center"}>
                    Next player: {' '}
                    {xIsNext ? X : O}
                </span>
            )}
        </div>
    </div>)
}