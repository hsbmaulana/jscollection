"use strict";

const

ArraySearch = require('./ArraySearch'),
ArraySort = require('./ArraySort'),
IList = require('./IList'),
Iterateable = require('./Iterateable'),
Searchable = require('./Searchable'),
Sortable = require('./Sortable');

module.exports = class ArrayList extends IList
{
    constructor()
    {
        super();

        this.index = 0;
        this.pools = 10;

        this.list = new Array(this.pools);

        Object.seal(this);
    }

    add(value)
    {
        if(this.count() === this.capacity()) {

            let capacity  = this.capacity() * 2,
                temporary = new Array(capacity);

            for(let i = 0; i < this.capacity(); i++) {

                temporary[i] = this.list[i];
            }

            this.pools = capacity;
            this.list = temporary;
        }

        this.list[this.index++] = value;
    }

    capacity()
    {
        return this.pools;
    }

    count()
    {
        return this.index;
    }

    dump()
    {
        var index = 0, object = {};

        for(let iterator = this.iterate(); iterator.hasNext();) {

            object[index++] = iterator.next();
        }

        return object;
    }

    get(index)
    {
        if(index >= 0 && index < this.count()) {

            return this.list[index];
        }

        return undefined;
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
            }

            hasNext()
            {
                return this.index < STATE.count();
            }

            next()
            {
                if(this.hasNext()) {

                    return STATE.list[this.index++];
                }

                return undefined;
            }
        }
    }

    maximum()
    {
        var largest = 0;

        for(let i = 1; i < this.count(); i++) {

            if(this.list[i] > this.list[largest]) {

                largest = i;
            }
        }

        return this.list[largest];
    }

    minimum()
    {
        var smallest = 0;

        for(let i = 1; i < this.count(); i++) {

            if(this.list[i] < this.list[smallest]) {

                smallest = i;
            }
        }

        return this.list[smallest];
    }

    modify(index, value)
    {
        if(index >= 0 && index < this.count()) {

            this.list[index] = value;
        }
    }

    remove(index)
    {
        if(index >= 0 && index < this.count()) {

            if(typeof this.list[index + 1] !== 'undefined') {

                for(; index < this.count() - 1; index++) {

                    this.list[index] = this.list[index + 1];
                }
            }

            this.list[--this.index] = undefined;
        }
    }

    search(value)
    {
        return new ArraySearch(this, value);
    }

    sort()
    {
        return new ArraySort(this);
    }
}