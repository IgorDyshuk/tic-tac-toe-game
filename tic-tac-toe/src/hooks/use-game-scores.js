import {useLocalStorage} from "./use-local-storage.js";
import {useCallback} from "react";

export function useGameScores() {
    const [xWins, setXWins] = useLocalStorage("xWins", 0);
    const [oWins, setOWins] = useLocalStorage("oWins", 0);
    const [draws, setDraws] = useLocalStorage("draws", 0);

    const incrementXWins = useCallback(() => {
        setXWins((prev) => prev + 1);
    }, [setXWins]);

    const incrementOWins = useCallback(() => {
        setOWins((prev) => prev + 1);
    }, [setOWins]);

    const incrementDraws = useCallback(() => {
        setDraws((prev) => prev + 1);
    }, [setDraws]);

    return {
        xWins,
        oWins,
        draws,
        incrementXWins,
        incrementOWins,
        incrementDraws,
    };
}
