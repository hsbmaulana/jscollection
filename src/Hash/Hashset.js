"use strict";

const Hashmap = require('./Hashmap');

module.exports = class Hashset
{
    constructor(capacity)
    {
        this.object = null;

        this.mapper = new Hashmap(capacity);
    }

    add(...values)
    {
        for(let value of values) {

            if(!this.contain(value)) {

                this.mapper.put(value, this.object);
            }
        }
    }

    contain(value)
    {
        return this.mapper.has(value);
    }

    count()
    {
        return this.mapper.count();
    }

    delete(value)
    {
        this.mapper.remove(value);
    }

    each(callback)
    {
        this.mapper.each(function(key, value) { callback(key); });
    }

}