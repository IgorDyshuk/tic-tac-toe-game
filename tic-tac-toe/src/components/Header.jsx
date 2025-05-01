import ResetButton from "./reset-button.jsx";
import Cross from "./cross.jsx";
import Zero from "./zero.jsx";
import {X, Circle} from "lucide-react";
import AdaptiveIcon from "../utils/adaptive-icon.jsx";

export default function Header({onClick, XisNext, winner}) {
    return (
        <div className={"w-74 sm:w-83 flex justify-center items-center  relative"}>
            <div className={"absolute left-0 flex"}>
                <Cross maxSize={35} minSize={35} strokeWidth={3}/>
                <Zero maxSize={25} minSize={25} strokeWidth={4}/>
            </div>
            <div
                className={`w-22 h-8 sm:w-25 sm:h-9 py-2 rounded-xl bg-[#19152c] text-white font-bold flex items-center justify-center`}>
                <div className="flex items-center gap-1">
                    <div className="w-5 h-5 flex items-center justify-center">
                        {winner ? (
                            <AdaptiveIcon
                                icon={winner === "X" ? X : Circle}
                                maxSize={19}
                                minSize={19}
                                strokeWidth={4}
                            />
                        ) : XisNext ? (
                            <AdaptiveIcon
                                icon={X}
                                maxSize={19}
                                minSize={19}
                                strokeWidth={4}
                            />
                        ) : (
                            <AdaptiveIcon
                                icon={Circle}
                                maxSize={16}
                                minSize={16}
                                strokeWidth={4}
                            />
                        )}
                    </div>

                    <div className="text-base leading-none">
                        {winner ? "wins" : "turn"}
                    </div>
                </div>
            </div>
            <ResetButton onClick={onClick}/>
        </div>
    )
}