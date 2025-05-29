import {create} from "zustand";
import {persist} from "zustand/middleware";

export const useBotStore = create()(
    persist((set) => {
            const oldBotWins = parseInt(window.localStorage.getItem("botWins") ?? "0");
            const oldPlayerWins = parseInt(window.localStorage.getItem("playerWins") ?? "0");
            const oldBotDraws = parseInt(window.localStorage.getItem("botDraws") ?? "0");

            if (oldBotWins) window.localStorage.removeItem("botWins")
            if (oldPlayerWins) window.localStorage.removeItem("playerWins")
            if (oldBotDraws) window.localStorage.removeItem("botDraws")

            return {
                botWins: oldBotWins,
                playerWins: oldPlayerWins,
                botDraws: oldBotDraws,

                incrementBotWins: () => set((state) => ({botWins: state.botWins + 1})),
                incrementPlayerWins: () => set((state) => ({playerWins: state.playerWins + 1})),
                incrementBotDraws: () => set((state) => ({botDraws: state.botDraws + 1})),
            }
        }, {
            name: "vs-bot-scores",
        }
    )
)