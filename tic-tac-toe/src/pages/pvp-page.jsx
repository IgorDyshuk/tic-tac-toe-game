import {useEffect, useState} from "react";
import {calculateWinner} from "../utils/CalculateWinner.js";
import Status from "../components/status.jsx";
import Header from "../components/Header.jsx";
import {useGameScores} from "../hooks/use-game-scores.js";
import GameGrid from "../components/game-grid.jsx";
import GameResultModal from "../components/game-result-modal.jsx";
import {motion} from "framer-motion";

export default function PvpPage() {

    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [roundNumber, setRoundNumber] = useState(0);
    const [latestMove, setLatestMove] = useState(null);

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
        setLatestMove(i);
    }

    useEffect(() => {
        const shouldXStart = roundNumber % 2 === 0;
        setXIsNext(shouldXStart);
    }, [roundNumber]);

    function resetGame() {
        setSquares(Array(9).fill(null));
        setRoundNumber(prev => prev + 1);
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

    useEffect(() => {
        const setVh = () => {
            document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
        };

        setVh();
        window.addEventListener("resize", setVh);

        return () => {
            window.removeEventListener("resize", setVh);
        };
    }, []);

    return (<motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -20}}
            transition={{duration: 0.3}}
            className="app-container flex items-center justify-center text-white"
            style={{
                height: "calc(var(--vh, 1vh) * 100)",
            }}
        >
            <div
                className={"app-container flex items-center justify-center text-white"}
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "calc(var(--vh, 1vh) * 100)",
                }}
            >
                <div className="flex items-center flex-col gap-8 sm:gap-10">
                    <Header onClick={resetGame} XisNext={xIsNext} winner={winnerPlayer}/>

                    <GameGrid
                        squares={squares}
                        handleClick={handleClick}
                        winnerLine={winnerLine}
                        winnerPlayer={winnerPlayer}
                        latestMove={latestMove}
                    />

                    <Status winner={winnerPlayer} xWins={xWins} oWins={oWins} draws={draws}/>
                </div>

                {winnerPlayer && (<GameResultModal
                        winner={winnerPlayer}
                        onRestart={resetGame}
                    />)}
            </div>
        </motion.div>

    );
}