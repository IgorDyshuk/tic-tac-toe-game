import {useState} from "react";
import {calculateWinner} from "../utils/CalculateWinner.js";
import {Square} from "../components/Square.jsx";
import Status from "../components/status.jsx";
import Cross from "../components/cross.jsx";
import Zero from "../components/zero.jsx";

export default function Board() {

    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    const winner = calculateWinner(squares);
    const winnerPlayer = winner ? winner[0] : null;
    const winnerLine = winner ? winner[1] : [];

    function handleClick(i) {
        if (squares[i] ||winnerPlayer) {
            return
        }

        const nextSquares = squares.slice();
        nextSquares[i] = xIsNext ? "X" : "O"
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }


    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col justify-center items-center w-full h-full gap-4">
                <Status winner={winnerPlayer} xIsNext={xIsNext}/>
                <div className="flex flex-col gap-4">
                    {Array(3).fill(null).map((_, row) => (
                        <div key={row} className="flex gap-4">
                            {Array(3).fill(null).map((_, col) => {
                                const index = row * 3 + col;
                                const isWinningSquare = winnerLine.includes(index);
                                return (
                                    <Square
                                        key={index}
                                        value={
                                            squares[index] === "X"
                                                ? <Cross />
                                                : squares[index] === "O"
                                                    ? <Zero />
                                                    : null
                                        }
                                        onSquareClick={() => handleClick(index)}
                                        isWinning={isWinningSquare}
                                    />
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}