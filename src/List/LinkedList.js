"use strict";

const

Node = require('./Node'),
IList = require('./IList'),
Iterateable = require('./Iterateable');

module.exports = class LinkedList extends IList
{
    constructor()
    {
        super();

        this.head = undefined;
        this.foot = undefined;

        this.length = 0;

        Object.seal(this);
    }

    add(value)
    {
        if(typeof this.head === 'undefined') {

            this.head = new Node(value);
            this.foot = this.head;

            this.length++;

        } else {

            let current = this.head;

            while(current.next) {

                current = current.next;
            }

            current.next = new Node(value);
            current.next.previous = current;

            this.foot = current.next;
            this.length++;
        }
    }

    count()
    {
        return this.length;
    }

    dump()
    {
        var index = 0, object = {};

        for(let iterator = this.iterate(); iterator.hasNext(); ) {

            object[index++] = iterator.next();
        }

        return object;
    }

    get(index)
    {
        if(index >= 0 && index < this.count()) {

            for(let current = this.head, i = 0; i < this.count(); i++) {

                if(i === index) {

                    return current.value;
                }

                current = current.next;
            }

            return undefined;
        }
    }

    iterate()
    {
        const STATE = this;

        return new class Iterator extends Iterateable
        {
            constructor()
            {
                super();

                this.index = 0;
                this.node = STATE.head;
            }

            hasNext()
            {
                return this.index < STATE.count();
            }

            next()
            {
                if(this.hasNext()) {

                    let value = this.node.value;
                    this.node = this.node.next;
                    this.index++;

                    return value;
                }

                return undefined;
            }
        }
    }

    modify(index, value)
    {
        if(index >= 0 && index < this.count()) {

            for(let current = this.head, i = 0; i < this.count(); i++) {

                if(i === index)
                {
                    this.head.value = value;

                    break;

                } else if(i + 1 === index) {

                    current.next.value = value;

                    break;
                }

                current = current.next;
            }
        }
    }

    remove(index)
    {
        if(index >= 0 && index < this.count()) {

            for(let current = this.head, i = 0; i < this.count(); i++) {

                if(i === index)
                {
                    if(current.previous && current.next) {

                        current.previous.next = current.next;
                        current.next.previous = current.previous;

                        this.length--;

                    } else if(current.previous && !current.next) {

                        current.previous.next = undefined;
                        this.foot = current.previous;

                        this.length--;
                    }

                    break;
                }

                current = current.next;
            }
        }
    }
}