"use strict";

module.exports = class ArraySearch
{
    constructor(collection, value)
    {
        this.collection = collection;
        this.value = value;
    }

    binary()
    {
        for(let middle, left = 0, right = this.collection.count() - 1; left <= right;) {

            middle = parseInt((left + right) / 2);

            if(this.value === this.collection.list[middle]) return middle;

            if(this.value > this.collection.list[middle]) {

                left = middle + 1;

            } else {

                right = middle - 1;
            }
        }

        return -1;
    }

    jump()
    {
        var start = 0, end = 0, square = parseInt(Math.sqrt(this.collection.count()));

        while(this.collection.list[end] <= this.value) {

            end += square;
        }

        for(start = end - square, end = end - 1; end >= start; end--) {

            if(this.collection.list[end] === this.value) {

                return end;
            }
        }

        return -1;
    }

    linier()
    {
        for(let i = 0; i < this.collection.count(); i++) {

            if(this.collection.list[i] === this.value) {

                return i;
            }
        }

        return -1;
    }

}