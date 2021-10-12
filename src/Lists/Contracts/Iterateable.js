"use strict";

/**
 * @namespace Lists.Contracts
 */
module.exports.Iterateable =
{
    /**
     * @returns {boolean}
     * @interface
     */
    hasNext : () => {},

    /**
     * @returns {number|string|null}
     * @interface
     */
    next : () => {},
};