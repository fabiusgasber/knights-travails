import { AdjacencyList } from "./adjacency-list.js";

export const pathFinder = (() => {
    const findPath = (list, start, visited = [], testList, root) => {
        if(!start || start[0] === root[0] && start[1] === root[1]) {
            visited.push(start.toString())
            return visited;
        }
        visited.push(start.toString())
        testList = list.filter(elem => elem.child[0] === start[0] && elem.child[1] === start[1]);
        const next = testList[0];
        // create visited array to avoid duplicates...
        if(next && next.parent) return findPath(list, next.parent, visited, testList, root);
    
    }
    
    const bfs = (q = [], visited = [], end, test = [], root) => {
        if(!q.length) return;
        const current = q.shift();
        if(visited.includes(current.toString()) && !q.length) return; // we found the end of the graph :)
        else if(visited.includes(current.toString()) && q.length) { // we already visited this vertex, continue instead
            return bfs(q, visited, end, test, root);
        }
        else {
        visited.push(current.toString());
        const graph = new AdjacencyList(current).getList();
        for(const vertex in graph){
            for(const edge in graph[vertex]){
                test.push({parent: current, child: [Number(vertex), graph[vertex][edge]]});
                q.push([Number(vertex), graph[vertex][edge]]);
                if(Number(vertex) === end[0] && graph[vertex][edge] === end[1]) { // found a match in queue
                    return findPath(test, end, [], [], root);
                }
            }
        }
        return bfs(q, visited, end, test, root);
    }
}
    return { bfs }
})();
