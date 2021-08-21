"use strict";

module.exports = class ArraySort
{
    constructor(collection)
    {
        this.collection = collection;
    }

    bubble()
    {
        for(let i = this.collection.count(); i > 0; i--) {

            for(let j = 0; j < i - 1; j++) {

                if(this.collection.list[j + 1] < this.collection.list[j]) {

                    let temporary = this.collection.list[j];

                    this.collection.list[j] = this.collection.list[j + 1];
                    this.collection.list[j + 1] = temporary;
                }
            }
        }
    }

    insertion()
    {
        for(let i = 1; i < this.collection.count(); i++) {

            let j = i - 1, temporary = this.collection.list[j + 1];

            while(j >= 0 && this.collection.list[j] > temporary) {

                this.collection.list[j + 1] = this.collection.list[j];

                j--;
            }

            this.collection.list[j + 1] = temporary;
        }
    }

    selection()
    {
        for(let i = 0; i < this.collection.count(); i++) {

            let smallest = i, temporary;

            for(let j = i; j < this.collection.count(); j++) {

                if(this.collection.list[j] < this.collection.list[smallest]) {

                    smallest = j;
                }
            }

            temporary = this.collection.list[i];

            this.collection.list[i] = this.collection.list[smallest];
            this.collection.list[smallest] = temporary;
        }
    }

}