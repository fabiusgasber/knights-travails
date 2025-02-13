import { pathFinder } from "./path-finder.js";

const knightMoves = (start, end) => {
    const possibleMoves = pathFinder.bfs(start, end, [start]);
    const path = pathFinder.findPath(end, start, possibleMoves);
    pathFinder.printPath(path);
}

knightMoves([0, 0], [7, 7])
knightMoves([3, 3], [0, 0])
knightMoves([2, 3], [6, 7])