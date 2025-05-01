import {useEffect, useState} from "react";
import {calculateWinner} from "../utils/CalculateWinner.js";
import {Square} from "../components/Square.jsx";
import Status from "../components/status.jsx";
import Cross from "../components/cross.jsx";
import Zero from "../components/zero.jsx";
import Header from "../components/Header.jsx";
import {useGameScores} from "../hooks/use-game-scores.js";

export default function Board() {

    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    const {xWins, oWins, draws, incrementXWins, incrementOWins, incrementDraws} = useGameScores();

    const winner = calculateWinner(squares);
    const winnerPlayer = winner === "draw" ? "draw" : winner ? winner[0] : null;
    const winnerLine = winner === "draw" ? [] : winner ? winner[1] : [];

    function handleClick(i) {
        if (squares[i] || winnerPlayer) {
            return
        }

        const nextSquares = squares.slice();
        nextSquares[i] = xIsNext ? "X" : "O"
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }

    function resetGame() {
        setSquares(Array(9).fill(null));
        setXIsNext(true);
    }


    useEffect(() => {
        if (winnerPlayer === "X") {
            incrementXWins()
        } else if (winnerPlayer === "O") {
            incrementOWins()
        } else if (winnerPlayer === "draw") {
            incrementDraws()
        }
    }, [winnerPlayer, incrementOWins, incrementXWins, incrementDraws])

    return (
        <div className={"w-full h-screen flex items-center justify-center"}>
            <div className="flex items-center flex-col  gap-6">
                <Header onClick={resetGame} XisNext={xIsNext} winner={winnerPlayer}/>

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
                                                ? <Cross maxSize={85} minSize={75} strokeWidth={3}/>
                                                : squares[index] === "O"
                                                    ? <Zero maxSize={65} minSize={57} strokeWidth={4}/>
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
                <Status winner={winnerPlayer} xWins={xWins} oWins={oWins} draws={draws}/>
            </div>
        </div>
    );
}