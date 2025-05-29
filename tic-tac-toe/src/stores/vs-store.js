import {create} from "zustand";
import {persist} from "zustand/middleware";

export const useVsStore = create()(
    persist(
        (set) => {
            const oldX = parseInt(localStorage.getItem("xWins") ?? "0");
            const oldO = parseInt(localStorage.getItem("oWins") ?? "0");
            const oldD = parseInt(localStorage.getItem("draws") ?? "0");

            if (oldX) window.localStorage.removeItem("xWins");
            if (oldO) window.localStorage.removeItem("oWins");
            if (oldD) window.localStorage.removeItem("draws");

            return {
                xWins: oldX,
                oWins: oldO,
                draws: oldD,

                incrementXWins: () => set((state) => ({xWins: state.xWins + 1})),
                incrementOWins: () => set((state) => ({oWins: state.oWins + 1})),
                incrementDraws: () => set((state) => ({draws: state.draws + 1})),
            };
        },
        {
            name: "vs-game-scores",
        }
    )
);
