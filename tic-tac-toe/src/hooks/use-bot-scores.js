import {useLocalStorage} from "./use-local-storage.js";
import {useCallback} from "react";

export function useBotScores() {
    const [botWins, setBotWins] = useLocalStorage("botWins", 0);
    const [playerWins, setPlayerWins] = useLocalStorage("playerWins", 0);
    const [botDraws, setBotDraws] = useLocalStorage("botDraws", 0);

    const incrementBotWins = useCallback(() => {
        setBotWins((prev) => prev + 1);
    }, [setBotWins]);

    const incrementPLayerWins = useCallback(() => {
        setPlayerWins((prev) => prev + 1);
    }, [setPlayerWins]);

    const incrementBotDraws = useCallback(() => {
        setBotDraws((prev) => prev + 1);
    }, [setBotDraws]);

    return {
        botWins,
        playerWins,
        botDraws,
        incrementBotWins,
        incrementPLayerWins,
        incrementBotDraws,
    }
}