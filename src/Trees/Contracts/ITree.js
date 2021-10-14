"use strict";

/**
 * @namespace Trees.Contracts
 */
module.exports.ITree =
{
    /**
     * @param {number} value
     *
     * @returns {void}
     * @interface
     */
    add : (value) => {},

    /**
     * @param {number} value
     *
     * @returns {boolean}
     * @interface
     */
    contain : (value) => {},

    /**
     * @returns {void}
     * @interface
     */
    breadth : () => {},

    /**
     * @returns {void}
     * @interface
     */
    depth : () => {},
};