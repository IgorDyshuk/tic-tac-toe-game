export function getSmartBotMove(squares, isPlayerX) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    let move = null;
    let defendMove = null;
    if (isPlayerX) {
        move = "O"
        defendMove = "X"
    } else {
        move = "X"
        defendMove = "O"
    }

    for (const [a, b, c] of lines) {
        const line = [squares[a], squares[b], squares[c]];
        const indexes = [a, b, c];
        const oCount = line.filter(v => v === move).length;
        const emptyCount = line.filter(v => v === null).length;
        if (oCount === 2 && emptyCount === 1) {
            return indexes[line.indexOf(null)];
        }
    }

    for (const [a, b, c] of lines) {
        const line = [squares[a], squares[b], squares[c]];
        const indexes = [a, b, c];
        const xCount = line.filter(v => v === defendMove).length;
        const emptyCount = line.filter(v => v === null).length;
        if (xCount === 2 && emptyCount === 1) {
            return indexes[line.indexOf(null)];
        }
    }

    if (squares[4] === null) return 4;

    const corners = [0, 2, 6, 8].filter(i => squares[i] === null);
    if (corners.length > 0) return corners[Math.floor(Math.random() * corners.length)];

    const emptyIndexes = squares
        .map((val, idx) => (val === null ? idx : null))
        .filter((val) => val !== null);

    if (emptyIndexes.length === 0) return null;

    return emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];
}
