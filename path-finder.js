import { AdjacencyList } from "./adjacency-list.js";

export const pathFinder = (() => {
    const findPath = (current, target, list, path = [], root = target) => {
        if(!current || !target || !list) return;
        if(current[0] === root[0] && current[1] === root[1]) {
            path.push(current.toString())
            return path;
        }
        path.push(current.toString())
        const next = list.filter(elem => elem.child[0] === current[0] && elem.child[1] === current[1])?.at(0);
        if(next && next.parent) return findPath(next.parent, target, list, path);
    }
    
    const bfs = (start, end, q = [], visited = [],  possibleMoves = []) => {
        if(!start || !end || !q.length) return;
        const current = q.shift();
        if(visited.includes(current.toString()) && !q.length) return; // we found the end of the graph :)
        else if(visited.includes(current.toString()) && q.length) { // we already visited this vertex, continue instead
            return bfs(start, end, q, visited, possibleMoves);
        }
        else {
        visited.push(current.toString());
        const graph = new AdjacencyList(current).getList();
        for(const vertex in graph){
            for(const edge in graph[vertex]){
                possibleMoves.push({parent: current, child: [Number(vertex), graph[vertex][edge]]});
                q.push([Number(vertex), graph[vertex][edge]]);
                if(Number(vertex) === end[0] && graph[vertex][edge] === end[1]) { // found a match in queue
                    return possibleMoves;
                }
            }
        }
        return bfs(start, end, q, visited, possibleMoves);
    }
}

    const printPath = (path) => {
        if(!path) return;
        const test = path.map(elem => elem.split(",")).map((elem) => [Number(elem[0]), Number(elem[1])]).reverse()
        let str = `From [${test[0]}] to [${test[test.length-1]}] => You made it in ${test.length - 1} moves!  Here's your path:`
        test.forEach(elem => {
            str += "\n"
            str += `[${elem}]`;
        })
        console.log(str);    
    }

    return { bfs, findPath, printPath }
})();
