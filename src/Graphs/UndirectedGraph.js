"use strict";

const Graph = require('./Graph');

/**
 * @class
 * @extends {Graph}
 * @namespace Graphs
 */
module.exports = class UndirectedGraph extends Graph
{
    /**
     * @param {number} row
     * @param {number} column
     * @param {number} weight
     *
     * @returns {void}
     */
    addEdge (row, column, weight)
    {
        this.edges[row][column] = weight;
        this.edges[column][row] = weight;
    }

    /**
     * @param {number} row
     * @param {number} column
     *
     * @returns {void}
     */
    removeEdge (row, column)
    {
        this.edges[row][column] = 0;
        this.edges[column][row] = 0;
    }
};