import {Square} from "./Square.jsx";
import Cross from "./cross.jsx";
import Zero from "./zero.jsx";

export default function GameGrid({winnerLine, squares, handleClick, winnerPlayer}) {
    return (
        <div className="flex flex-col gap-4 sm:gap-5">
            {Array(3).fill(null).map((_, row) => (
                <div key={row} className="flex gap-4 sm:gap-5">
                    {Array(3).fill(null).map((_, col) => {
                        const index = row * 3 + col;
                        const isWinningSquare = winnerLine.includes(index);
                        return (
                            <Square
                                key={index}
                                value={
                                    squares[index] === "X"
                                        ? <Cross maxSize={98} minSize={85} strokeWidth={3} isWinning={isWinningSquare}/>
                                        : squares[index] === "O"
                                            ? <Zero maxSize={75} minSize={63} strokeWidth={4} isWinning={isWinningSquare}/>
                                            : null
                                }
                                onSquareClick={() => handleClick(index)}
                                isWinning={isWinningSquare}
                                winnerPlayer={winnerPlayer}
                            />
                        );
                    })}
                </div>
            ))}
        </div>
    )
}