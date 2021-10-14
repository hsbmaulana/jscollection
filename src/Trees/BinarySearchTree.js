"use strict";

const { ITree, } = require('./Contracts/ITree');

/**
 * @class
 * @implements {ITree}
 * @namespace Trees
 */
module.exports = class BinarySearchTree
{
    /**
     * @type {Trees.BinarySearchTree|null}
     */
    left = null;

    /**
     * @type {Trees.BinarySearchTree|null}
     */
    right = null;

    /**
     * @type {number|null} value
     */
    value = null;

    /**
     * @param {number} value
     *
     * @returns {void}
     */
    add(value)
    {
        if (! this.value) {

            this.value = value;

            return;
        }

        if (value > this.value) {

            if (this.right) {

                this.right.add(value);

            } else {

                this.right = new BinarySearchTree();
                this.right.add(value);
            }

        } else {

            if (this.left) {

                this.left.add(value);

            } else {

                this.left = new BinarySearchTree();
                this.left.add(value);
            }
        }
    }

    /**
     * @param {number} value
     *
     * @returns {boolean}
     */
    contain(value)
    {
        if (value === this.value) {

            return true;
        }

        if (value > this.value) {

            if (this.right) {

                return this.right.contain(value);

            } else {

                return false;
            }

        } else {

            if (this.left) {

                return this.left.contain(value);

            } else {

                return false;
            }
        }
    }

    /**
     * @returns {void}
     */
    breadth()
    {
        for (let queue = [ this, ]; queue.length > 0;) {

            let front = queue.shift();
            let rear;

            process.stdout.write(front.value + "\n");

            if (front.left) {

                queue.push(front.left);
            }

            if (front.right) {

                queue.push(front.right);
            }
        }
    }

    /**
     * @returns {void}
     */
    depth()
    {
        if (this.left) {

            this.left.depth();
        }

        process.stdout.write(this.value + "\n");

        if (this.right) {

            this.right.depth();
        }
    }
};