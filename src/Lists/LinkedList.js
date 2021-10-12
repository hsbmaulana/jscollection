"use strict";

const

{ IList, } = require('./Contracts/IList'),
{ Iterateable, } = require('./Contracts/Iterateable'),
{ Sortable, } = require('./Contracts/Sortable'),
{ Searchable, } = require('./Contracts/Searchable');

/**
 * @class
 */
class Node
{
    /**
     * @type {Node|null}
     */
    previous = null;

    /**
     * @type {Node|null}
     */
    next = null;

    /**
     * @type {number|string} value
     */
    value;

    /**
     * @param {number|string} value
     *
     * @returns {void}
     */
    constructor(value)
    {
        this.value = value;
    }
};

/**
 * @class
 * @implements {IList}
 * @implements {Sortable}
 * @implements {Searchable}
 * @namespace Lists
 */
module.exports = class LinkedList
{
    /**
     * @type {number}
     */
    #length = 0;

    /**
     * @type {Node|null}
     */
    head = null;

    /**
     * @type {Node|null}
     */
    foot = null;

    /**
     * @param {number|string} value
     *
     * @returns {void}
     */
    add(value)
    {
        if (this.head === null) {

            this.head = new Node(value);
            this.foot = this.head;

            this.#length++;

        } else {

            let current = this.head;

            while (current.next) {

                current = current.next;
            }

            current.next = new Node(value);
            current.next.previous = current;

            this.foot = current.next;
            this.#length++;
        }
    }

    /**
     * @returns {number}
     */
    count()
    {
        return this.#length;
    }

    /**
     * @param {number} index
     *
     * @returns {number|string|null}
     */
    get(index)
    {
        if (index >= 0 && index < this.count()) {

            for (let iterator = this.iterate(), i = 0; iterator.hasNext(); i++) {

                let value = iterator.next(); if (i === index) return value;
            }
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
             * @type {Node|null}
             */
            iterator = state.head;

            /**
             * @returns {boolean}
             */
            hasNext()
            {
                return this.iterator !== null;
            }

            /**
             * @returns {number|string|null}
             */
            next()
            {
                if (this.hasNext()) {

                    let value = this.iterator.value;
                    this.iterator = this.iterator.next;

                    return value;
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

            for (let iterator = this.iterate(), i = 0; iterator.hasNext(); i++) {

                let node = iterator.iterator; if (i === index) { node.value = value; return; }

                iterator.next(); 
            }
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

            for (let iterator = this.iterate(), i = 0; iterator.hasNext(); i++) {

                let node = iterator.iterator;

                if (i === index) {

                    if (node.previous && node.next) {

                        node.previous.next = node.next;
                        node.next.previous = node.previous;

                    } else if (node.previous && node.next === null) {

                        node.previous.next = null;
                        this.foot = node.previous;

                    } else if (node.previous === null && node.next) {

                        node.next.previous = null;
                        this.head = node.next;

                    } else if (node.previous === null && node.next === null) {

                        iterator.iterator = null;
                        node = null;
                        this.head = node;
                        this.foot = node;
                    }

                    this.#length--;

                    return;
                }

                iterator.next();
            }
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