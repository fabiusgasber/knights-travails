import { pathFinder } from "./path-finder.js";

const knightMoves = (start, end) => {
    const path = pathFinder.bfs([start], [], end, [], start);
    const test = path.map(elem => elem.split(",")).map((elem) => [Number(elem[0]), Number(elem[1])]).reverse()
    let str = `knightMoves([${start}], [${end}])`
    str += "\n"
    str += ` => You made it in ${test.length - 1} moves!  Here's your path:`
    test.forEach(elem => {
        str += "\n"
        str += `[${elem}]`;
    })
    console.log(str);
}

knightMoves([0, 0], [7, 7])
knightMoves([3, 3], [0, 0])
knightMoves([2, 3], [6, 7])