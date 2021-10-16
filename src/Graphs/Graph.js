"use strict";

const { IGraph, } = require('./Contracts/IGraph');

/**
 * @class
 * @implements {IGraph}
 * @namespace Graphs
 */
module.exports = class Graph
{
    /**
     * @type {Array}
     */
    vertices = [];

    /**
     * @type {Array}
     */
    edges = [[]];

    /**
     * @param {number} capacity
     *
     * @returns {void}
     */
    constructor(capacity = 10)
    {
        for (let i = 0; i < capacity; i++) {

            this.edges[i] = [];

            for (let j = 0; j < capacity; j++) {

                this.edges[i][j] = 0;
            }
        }
    }

    /**
     * @param {number|string} value
     *
     * @returns {void}
     */
    push (value)
    {
        this.vertices.push(value);
    }

    /**
     * @returns {void}
     */
    pop ()
    {
        for (let i = 0, last = this.vertices.length - 1; i <= last; i++) {

            this.removeEdge(last, i);
        }

        this.vertices.pop();
    }

    /**
     * @param {number|string} value
     *
     * @returns {void}
     */
    enqueue (value)
    {
        this.vertices.unshift(value);
    }

    /**
     * @returns {void}
     */
    dequeue ()
    {
        for (let i = 0, first = 0, last = this.vertices.length - 1; i <= last; i++) {

            this.removeEdge(first, i);
        }

        this.vertices.shift();
    }

    /**
     * @param {number} row
     * @param {number} column
     * @param {number} weight
     *
     * @returns {void}
     * @abstract
     */
    addEdge (row, column, weight) {}

    /**
     * @param {number} row
     * @param {number} column
     *
     * @returns {void}
     * @abstract
     */
    removeEdge (row, column) {}

    /**
     * @param {number} edged
     *
     * @returns {void}
     */
    breadth (edged)
    {
        for (let queue = [ edged, ], log = []; queue.length > 0;) {

            let front = queue.shift();
            let rear;
            log.push(front);

            process.stdout.write(this.vertices[front] + "\n");

            for (let i = 0; i < this.vertices.length; i++) {

                if (this.edges[front][i] !== 0 && !log.includes(i)) queue.push(i);
            }
        }
    }

    /**
     * @param {number} edged
     *
     * @returns {void}
     */
    depth (edged)
    {
        var log = [], reference = this;

        function recurse(i)
        {
            log.push(i);

            for (let j = 0; j < reference.vertices.length; j++) {

                if (reference.edges[i][j] !== 0 && !log.includes(i)) recurse(j);
            }

            process.stdout.write(reference.vertices[i] + "\n");
        }

        recurse(edged);
    }
};