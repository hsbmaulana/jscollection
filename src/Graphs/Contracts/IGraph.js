"use strict";

/**
 * @namespace Graphs.Contracts
 */
module.exports.IGraph =
{
    /**
     * @param {number|string} value
     *
     * @returns {void}
     * @interface
     */
    push : (value) => {},

    /**
     * @returns {void}
     * @interface
     */
    pop : () => {},

    /**
     * @param {number|string} value
     *
     * @returns {void}
     * @interface
     */
    enqueue : (value) => {},

    /**
     * @returns {void}
     * @interface
     */
    dequeue : () => {},

    /**
     * @param {number} row
     * @param {number} column
     * @param {number} weight
     *
     * @returns {void}
     * @interface
     */
    addEdge : (row, column, weight) => {},

    /**
     * @param {number} row
     * @param {number} column
     *
     * @returns {void}
     * @interface
     */
    removeEdge : (row, column) => {},

    /**
     * @param {number} edged
     *
     * @returns {void}
     * @interface
     */
    breadth : (edged) => {},

    /**
     * @param {number} edged
     *
     * @returns {void}
     * @interface
     */
    depth : (edged) => {},
};