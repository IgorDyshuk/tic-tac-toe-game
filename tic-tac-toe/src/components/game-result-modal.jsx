import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import AdaptiveIcon from "../utils/adaptive-icon.jsx";
import {Circle, X} from "lucide-react";

export default function GameResultModal({winner, playerSymbol = null, botSymbol = null, onRestart}) {
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        let timer = null
        if (winner === "draw") {
            timer = setTimeout(() => setVisible(true), 500);
        } else {
            timer = setTimeout(() => setVisible(true), 1200);
        }
        return () => clearTimeout(timer);
    }, [winner]);

    const handleRestart = () => {
        setVisible(false);
        setTimeout(() => onRestart(), 500);
    };

    const handleQuit = () => {
        setVisible(false);
        setTimeout(() => navigate("/"), 500);
    };

    let title = "";
    if (winner === "draw") {
        title = "OH, that's just draw";
    } else if (winner === playerSymbol) {
        title = "YOU WON!";
    } else if (winner === botSymbol) {
        title = "OH NO, YOU LOST...";
    } else {
        title = `${winner} WINS!`;
    }

    return (
        <div className={`fixed flex items-center justify-center z-50 w-full h-screen bg-black bg-opacity-30`}
             style={{
                 transition: "ease",
                 transitionDuration: "0.5s",
                 backgroundColor: visible ? "rgba(0, 0, 0, 0.3)" : "rgba(0, 0, 0, 0)"
             }}
        >
            <div className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-out 
              ${visible ? "translate-y-0" : "translate-y-140"} 
              w-full bg-[#2a2342] py-7 sm:py-12 text-center text-white`}
            >
                {winner === "draw" ? (
                        <h1 className={'flex justify-center items-center text-3xl sm:text-5xl font-bold mb-5 sm:mb-8 text-white'}>
                            Oh, that's just draw!
                        </h1>
                    ) :
                    (<>
                        <h2 className="font-bold pb-1 text-[#a8bfc9]">{title}</h2>

                        <div className={"flex flex-col gap-3 sm:gap-4"}>
                            {winner === "X" ?
                                (
                                    <h1 className={'flex justify-center items-center text-3xl sm:text-5xl font-bold text-[#1b92ed]'}>
                                        <AdaptiveIcon icon={X} maxSize={85} minSize={55} strokeWidth={3}/>
                                        TAKES THE ROUND
                                    </h1>
                                ) : (
                                    <h1 className={'flex justify-center items-center text-3xl gap-2 sm:gap-2.5 py-1 sm:py-2 sm:text-5xl font-bold text-[#a437ff]'}>
                                        <AdaptiveIcon icon={Circle} maxSize={74} minSize={47} strokeWidth={3}/>
                                        TAKES THE ROUND
                                    </h1>
                                )}
                        </div>
                    </>)
                }

                <div className="flex justify-center gap-4 text-[#090518] font-bold mt-2 sm:mt-3">
                    <button
                        className={"flex items-center bg-[#a8bfc9] hover:bg-[#c1d4dc] transition duration-100 ease-in-out px-4 py-2 sm:px-6 sm:py-3 rounded-xl hover:cursor-pointer"}
                        onClick={handleQuit}
                    >
                        QUIT
                    </button>
                    <button
                        className={`${winner === "X" ? "bg-[#a437ff] hover:bg-[#c178fe]" : "bg-[#1b92ed] hover:bg-[#4db0fb]"} 
                        px-4 py-2 sm:px-6 sm:py-3 rounded-xl hover:cursor-pointer transition duration-100 ease-in-out`}
                        onClick={handleRestart}
                    >
                        NEXT ROUND
                    </button>
                </div>
            </div>
        </div>
    );
}
