"use strict";

const

{ IList, } = require('./Contracts/IList'),
{ Iterateable, } = require('./Contracts/Iterateable'),
{ Sortable, } = require('./Contracts/Sortable'),
{ Searchable, } = require('./Contracts/Searchable');

/**
 * @class
 * @implements {IList}
 * @implements {Sortable}
 * @implements {Searchable}
 * @namespace Lists
 */
module.exports = class ArrayList
{
    /**
     * @type {number}
     */
    #index = 0;

    /**
     * @type {number}
     */
    #capacity = 10;

    /**
     * @type {Array}
     */
    #list;

    /**
     * @returns {void}
     */
    constructor()
    {
        this.#list = new Array(this.#capacity);
    }

    /**
     * @param {number|string} value
     *
     * @returns {void}
     */
    add(value)
    {
        if (this.count() == this.#capacity) {

            let capacity  = this.#capacity * 2,
                temporary = new Array(capacity);

            for (let i = 0; i < this.#capacity; i++) {

                temporary[i] = this.#list[i];
            }

            this.#capacity = capacity;
            this.#list = temporary;
        }

        this.#list[this.#index++] = value;
    }

    /**
     * @returns {number}
     */
    count()
    {
        return this.#index;
    }

    /**
     * @param {number} index
     *
     * @returns {number|string|null}
     */
    get(index)
    {
        if (index >= 0 && index < this.count()) {

            return this.#list[index];
        }

        return null;
    }

    /**
     * @returns {Iterateable}
     */
    iterate()
    {
        const state = this;

        /**
         * @class
         * @implements {Iterateable}
         */
        return new class Iterator
        {
            /**
             * @type {number}
             */
            iterator = 0;

            /**
             * @returns {boolean}
             */
            hasNext()
            {
                return this.iterator < state.count();
            }

            /**
             * @returns {number|string|null}
             */
            next()
            {
                if (this.hasNext()) {

                    return state.get(this.iterator++);
                }

                return null;
            }
        };
    }

    /**
     * @param {number} index
     * @param {number|string} value
     *
     * @returns {void}
     */
    modify(index, value)
    {
        if (index >= 0 && index < this.count()) {

            this.#list[index] = value;
        }
    }

    /**
     * @param {number} index
     *
     * @returns {void}
     */
    remove(index)
    {
        if (index >= 0 && index < this.count()) {

            for (; this.#list[index + 1] != null; index++) {

                this.#list[index] = this.#list[index + 1];
            }

            delete this.#list[--this.#index];
        }
    }

    /**
     * @returns {void}
     */
    sort() {}

    /**
     * @returns {number|string|null}
     */
    search() {}
};