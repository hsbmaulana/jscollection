"use strict";

module.exports = class Tree
{
    constructor(value)
    {
        this.left  = undefined;
        this.right = undefined;

        this.value = value;

        Object.seal(this);
    }

    add(value)
    {
        if(!this.value) {

            this.value = value;

            return;
        }

        if(value > this.value) {

            if(this.right) {

                this.right.add(value)

            } else {

                this.right = new Tree(value);
            }

        } else {

            if(this.left) {

                this.left.add(value);

            } else {

                this.left = new Tree(value);
            }
        }
    }

    contain(value)
    {
        if(value === this.value) {

            return true;
        }

        if(value > this.value) {

            if(this.right) {

                return this.right.contain(value);

            } else {

                return false;
            }

        } else {

            if(this.left) {

                return this.left.contain(value);

            } else {

                return false;
            }
        }
    }

    breadth()
    {
        for(let queue = Array(this); queue.length > 0; ) {

            let front = queue.shift();

            console.log(front.value);

            if(front.left) {

                queue.push(front.left);
            }

            if(front.right) {

                queue.push(front.right);
            }
        }
    }

    depth()
    {
        if(this.left) {

            this.left.depth();
        }

        console.log(this.value);

        if(this.right) {

            this.right.depth();
        }
    }
}