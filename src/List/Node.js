"use strict";

module.exports = class Node
{
    constructor(value)
    {
        this.next = undefined;
        this.previous = undefined;

        this.value = value;

        Object.seal(this);
    }

}