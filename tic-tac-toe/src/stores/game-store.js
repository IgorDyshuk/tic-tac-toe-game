import {create} from "zustand";

export const useInitialStore = create()(
    (set) => ({
        xIsNext: true,
        squares: Array(9).fill(null),
        roundNumber: 0,
        latestMove: null,
        isPlayerX: true,
        isVsBot: false,

        setXIsNext: (value) => set({xIsNext: value}),
        setSquares: (squares) => set({squares}),
        setLatestMove: (index) => set({latestMove: index}),
        setIsPlayerX: (value) => set({isPlayerX: value}),
        setIsVsBot: (value) => set({isVsBot: value}),

        resetGame: () => set((state) => {
            const newRound = state.roundNumber + 1;
            return {
                squares: Array(9).fill(null),
                roundNumber: newRound,
                xIsNext: newRound % 2 === 0,
                latestMove: null,
            }
        }),

        initNewGame: () =>
            set(() => ({
                squares: Array(9).fill(null),
                xIsNext: true,
                latestMove: null,
                roundNumber: 0,
            })),
    })
)

