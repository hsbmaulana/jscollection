"use strict";

class Hashnode
{
    constructor(key, value)
    {
        this.next = undefined;
        this.previous = undefined;

        this.key = key;
        this.value = value;

        Object.seal(this);
    }
}

module.exports = class Hashmap
{
    constructor(capacity = 10)
    {
        this.length = 0;

        this.hashtable = new Array(capacity);
    }

    count()
    {
        return this.length;
    }

    each(callback)
    {
        for(let i = 0; i < this.hashtable.length; i++) {

            let node = this.hashtable[i];

            if(typeof node === 'undefined') {

                continue;

            } else {

                do {

                    callback(node.key, node.value);

                    node = node.next;

                } while(node);
            }
        }
    }

    get(key)
    {
        var index = this.hashfunction(key), node = this.hashtable[index];

        if(typeof node !== 'undefined') {

            do {

                if(node.key === String(key)) return node.value;

                node = node.next;

            } while(node);
        }

        return undefined;
    }

    has(key)
    {
        return typeof this.get(key) !== 'undefined';
    }

    hashfunction(object)
    {
        var value = 0, code = new String(object);

        for(let i = 0; i < code.length; i++) {

            value += code.charCodeAt(i);
        }

        return value % this.hashtable.length;
    }

    put(key, value)
    {
        var index = this.hashfunction(key);

        if(typeof this.hashtable[index] === 'undefined') {

            this.hashtable[index] = new Hashnode(String(key), value);

        } else {

            let node = this.hashtable[index];

            do {

                if(node.key === String(key)) {

                    node.value = value;

                    return;

                } else {

                    if(node.next) {

                        node = node.next;

                    } else {

                        break;
                    }
                }

            } while(true);

            node.next = new Hashnode(String(key), value);
            node.next.previous = node;
        }

        this.length++;
    }

    remove(key)
    {
        var index = this.hashfunction(key), node = this.hashtable[index];

        if(typeof node === 'undefined') return;

        do {

            if(node.key === String(key)) {

                if(node.previous) {

                    if(node.next) {

                        node.previous.next = node.next;
                        node.next.previous = node.previous;

                    } else {

                        node.previous.next = undefined;
                    }

                } else {

                    if(node.next) {

                        node.next.previous = undefined;

                        this.hashtable[index] = node.next;

                    } else {

                        this.hashtable[index] = undefined;
                    }
                }

                this.length--;

                break;
            }

            node = node.next;

        } while(node);
    }
}