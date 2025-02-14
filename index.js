import { AdjacencyList } from "./adjacency-list.js";
import { pathFinder } from "./path-finder.js";

const knightMoves = (start, end) => {
    if(!AdjacencyList.checkCoordinates(start) || !AdjacencyList.checkCoordinates(end)) console.error("Please enter two valid coordinates from start to target in this format: knightMoves([0, 0], [3, 3])");
    const possibleMoves = pathFinder.bfs(start, end, [start]);
    const path = pathFinder.findPath(end, start, possibleMoves);
    pathFinder.printPath(path);
}

knightMoves([0, 0], [7, 7])
knightMoves([3, 3], [0, 0])
knightMoves([2, 3], [6, 7])