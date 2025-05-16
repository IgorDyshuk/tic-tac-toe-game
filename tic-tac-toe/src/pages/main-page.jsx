import {Link} from "react-router-dom";
import AdaptiveIcon from "../utils/adaptive-icon.jsx";
import {Circle, X} from "lucide-react";
import {useEffect, useState} from "react";
import {motion} from "framer-motion";

export default function MainPage() {
    const [isPlayerX, setIsPlayerX] = useState(true);

    const selectX = () => {
        setIsPlayerX(true);
        console.log("isXFirst")
    };

    const selectO = () => {
        setIsPlayerX(false);
        console.log("isOFirst")
    };

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

    return (
        <motion.div
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: 20}}
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
                <div className="flex items-center flex-col gap-6 text-white">
                    <div className={"flex items-center"}>
                <span className={"text-[#1b92ed]"}>
                    <AdaptiveIcon icon={X} maxSize={35} minSize={35} strokeWidth={3}/>
                </span>
                        <span className={"text-[#a437ff]"}>
                    <AdaptiveIcon icon={Circle} maxSize={25} minSize={25} strokeWidth={4}/>
                </span>
                    </div>

                    <div
                        className={'w-85 sm:w-120 bg-[#2a2342] rounded-xl py-3 flex flex-col justify-center items-center gap-4'}>
                        <h1 className={"sm: text-xl font-bold"}>
                            PICK PLAYER 1’S MARK
                        </h1>
                        <div className="relative w-[300px] sm:w-[400px] bg-[#19152c] rounded-xl overflow-hidden">
                            <div
                                className={`absolute top-0 bottom-0 w-[50%] rounded-xl bg-[#a8bfc9] transition-transform duration-300 ${
                                    isPlayerX ? "translate-x-0" : "translate-x-full"
                                }`}
                            />
                            <div className="flex relative z-10">
                                <button
                                    onClick={selectX}
                                    className={`w-[50%] h-14 flex items-center justify-center ${
                                        isPlayerX ? "text-[#19152c] font-bold" : "text-white"
                                    } transition-all duration-300 hover:cursor-pointer`}
                                >
                                    <AdaptiveIcon
                                        icon={X}
                                        maxSize={35}
                                        minSize={35}
                                        strokeWidth={4}
                                    />
                                </button>
                                <button
                                    onClick={selectO}
                                    className={`w-[50%] h-14 flex items-center justify-center ${
                                        !isPlayerX ? "text-[#19152c] font-bold" : "text-white"
                                    } transition-all duration-300 hover:cursor-pointer`}
                                >
                                    <AdaptiveIcon
                                        icon={Circle}
                                        maxSize={35}
                                        minSize={35}
                                        strokeWidth={4}
                                    />
                                </button>
                            </div>
                        </div>
                        <p className="text-xs text-gray-400 font-bold tracking-wider">REMEMBER: X GOES FIRST</p>
                    </div>

                    <div className={"w-85 sm:w-120 flex gap-4 flex-col text-xl font-bold"}>
                        <Link to={"/bot-page/"} state={{isPlayerX}}
                              className={"bg-[#1b92ed] py-2 rounded-xl hover:cursor-pointer"}>
                            NEW GAME (VS CPU)
                        </Link>
                        <Link to={"/pvp-page"} className={"bg-[#a437ff] py-2 rounded-xl hover:cursor-pointer"}>
                            NEW GAME (PVP)
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}