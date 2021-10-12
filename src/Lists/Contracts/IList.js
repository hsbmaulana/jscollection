"use strict";

/**
 * @namespace Lists.Contracts
 */
module.exports.IList =
{
    /**
     * @param {number|string} value
     *
     * @returns {void}
     * @interface
     */
    add : (value) => {},

    /**
     * @returns {number}
     * @interface
     */
    count : () => {},

    /**
     * @param {number} index
     *
     * @returns {number|string|null}
     * @interface
     */
    get : (index) => {},

    /**
     * @returns {Iterateable}
     * @interface
     */
    iterate : () => {},

    /**
     * @param {number} index
     * @param {number|string} value
     *
     * @returns {void}
     * @interface
     */
    modify : (index, value) => {},

    /**
     * @param {number} index
     *
     * @returns {void}
     * @interface
     */
    remove : (index) => {},
};