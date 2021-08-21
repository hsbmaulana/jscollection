"use strict";

module.exports = class Graph
{
    constructor(length = 10)
    {
        this.index = 0;
        this.vertices = Array(length);

        this.edge = Array(length);

        for(let i = 0; i < length; i++) {

            this.edge[i] = Array(length);

            for(let j = 0; j < length; j++) {

                this.edge[i][j] = false;
            }
        }

        Object.seal(this);
    }

    addEdge(i, j, weight)
    {
        this.edge[i][j] = weight;
        this.edge[j][i] = weight;
    }

    removeEdge(i, j)
    {
        this.edge[i][j] = false;
        this.edge[j][i] = false;
    }

    push(value)
    {
        this.vertices[this.index++] = value;
    }

    pop()
    {
        for(let i = 0; i < this.index; i++) {

            this.removeEdge(this.index - 1, i);
        }

        this.vertices[this.index - 1] = undefined;
        this.index--;
    }

    breadth(edged)
    {
        for(let log = Array(), queue = Array.of(edged); queue.length > 0; ) {

            let front = queue.shift();
                log.push(front);

            console.log(this.vertices[front]);

            for(let i = 0; i < this.vertices.length; i++) {

                if(this.edge[front][i] != false && !log.includes(i)) {

                    queue.push(i);
                }
            }
        }
    }

    depth(edged)
    {
        var log = Array(), reference = this;

        function recurse(i) {

            log.push(i);

            for(let j = 0; j < reference.vertices.length; j++) {

                if(reference.edge[i][j] != false && !log.includes(j)) {

                    recurse(j);
                }
            }

            console.log(reference.vertices[i]);
        }

        recurse(edged);
    }
}