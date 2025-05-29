import {Square} from "./Square.jsx";
import Cross from "./cross.jsx";
import Zero from "./zero.jsx";
import {useEffect, useState} from "react";
import {useInitialStore} from "../stores/game-store.js";

export default function GameGrid({winnerLine, handleClick, winnerPlayer}) {
    const {
        squares,
        latestMove,
    } = useInitialStore()

    const [highlighted, setHighlighted] = useState([])

    useEffect(() => {
        if (squares.every((sq) => sq === null)) {
            setHighlighted([]);
        }
    }, [squares]);

    useEffect(() => {
        if (!winnerLine.length || latestMove === null) return;

        const startIndex = winnerLine.indexOf(latestMove);
        const ordered = [
            ...winnerLine.slice(startIndex),
            ...winnerLine.slice(0, startIndex),
        ];

        const timeouts = [];

        ordered.forEach((index, i) => {
            const timeoutId = setTimeout(() => {
                setHighlighted((prev) => [...prev, index]);
            }, i * 300);
            timeouts.push(timeoutId);
        });

        return () => {
            timeouts.forEach(clearTimeout);
            setHighlighted([]);
        };
    }, [winnerLine, latestMove]);


    return (
        <div className="flex flex-col gap-4 sm:gap-5">
            {Array(3).fill(null).map((_, row) => (
                <div key={row} className="flex gap-4 sm:gap-5">
                    {Array(3).fill(null).map((_, col) => {
                        const index = row * 3 + col;
                        const isWinningSquare = highlighted.includes(index);
                        return (
                            <Square
                                key={index}
                                value={
                                    squares[index] === "X"
                                        ?
                                        <Cross maxSize={102} minSize={85} strokeWidth={3} isWinning={isWinningSquare}/>
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