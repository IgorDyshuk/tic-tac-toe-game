import {useEffect, useState} from "react";
import {calculateWinner} from "../utils/CalculateWinner.js";
import Status from "../components/status.jsx";
import Header from "../components/Header.jsx";
import GameGrid from "../components/game-grid.jsx";
import {getSmartBotMove} from "../utils/bot-moves.js";
import {useLocation} from "react-router-dom";
import {useBotScores} from "../hooks/use-bot-scores.js";
import GameResultModal from "../components/game-result-modal.jsx";
import {motion} from "framer-motion";

export default function VsBotPage() {
    const location = useLocation();
    const isPlayerX = location.state?.isPlayerX ?? true;

    const playerSymbol = isPlayerX ? "X" : "O";
    const botSymbol = isPlayerX ? "O" : "X";

    const {botWins, playerWins, botDraws, incrementBotWins, incrementPLayerWins, incrementBotDraws} = useBotScores();

    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [roundNumber, setRoundNumber] = useState(0);
    const [latestMove, setLatestMove] = useState(null);

    const winner = calculateWinner(squares);
    const winnerPlayer = winner === "draw" ? "draw" : winner ? winner[0] : null;
    const winnerLine = winner === "draw" ? [] : winner ? winner[1] : [];

    function handleClick(i) {
        if (squares[i] || winnerPlayer || xIsNext !== isPlayerX) {
            return;
        }

        const nextSquares = squares.slice();
        nextSquares[i] = playerSymbol;
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
        setLatestMove(i);
    }

    useEffect(() => {
        const isBotTurn = xIsNext !== isPlayerX;

        if (isBotTurn && !winnerPlayer) {
            const timer = setTimeout(() => {
                const botIndex = getSmartBotMove(squares, isPlayerX);
                if (botIndex !== null) {
                    const nextSquares = squares.slice();
                    nextSquares[botIndex] = botSymbol;
                    setSquares(nextSquares);
                    setXIsNext(!xIsNext);
                    setLatestMove(botIndex);
                }
            }, 500);

            return () => clearTimeout(timer);
        }
    }, [xIsNext, winnerPlayer, squares, isPlayerX, botSymbol]);

    useEffect(() => {
        const shouldXStart = roundNumber % 2 === 0;
        setXIsNext(shouldXStart);
    }, [roundNumber]);

    function resetGame() {
        setSquares(Array(9).fill(null));
        setRoundNumber(prev => prev + 1);
    }

    useEffect(() => {
        if (winnerPlayer === playerSymbol) {
            incrementPLayerWins();
        } else if (winnerPlayer === botSymbol) {
            incrementBotWins();
        } else if (winnerPlayer === "draw") {
            incrementBotDraws();
        }
    }, [winnerPlayer, incrementPLayerWins, incrementBotWins, incrementBotDraws, botSymbol, playerSymbol]);

    useEffect(() => {
        const setVh = () => {
            document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
        };

        setVh();
        window.addEventListener("resize", setVh);

        return () => {
            window.removeEventListener("resize", setVh);
        };
    }, []);

    const isBotTurn = xIsNext !== isPlayerX;

    return (
        <motion.div
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
                        xIsNext={xIsNext}
                        isBotTurn={isBotTurn}
                    />

                    <Status
                        winner={winnerPlayer}
                        xWins={isPlayerX ? playerWins : botWins}
                        oWins={isPlayerX ? botWins : playerWins}
                        draws={botDraws}
                        isPlayerX={isPlayerX}
                    />
                </div>

                {winnerPlayer && (
                    <GameResultModal
                        winner={winnerPlayer}
                        botSymbol={botSymbol}
                        playerSymbol={playerSymbol}
                        onRestart={resetGame}
                    />
                )}
            </div>
        </motion.div>

    );
}
