"use strict";

const assert = require('assert'), { Tree : { BinarySearchTree, } } = require('../../index');

describe('Trees.BinarySearchTree', () =>
{
    var collection;

    beforeEach(() =>
    {
        collection = new BinarySearchTree();

        collection.add(10);
        collection.add(20);
        collection.add(30);
        collection.add(40);
        collection.add(50);
    });

    afterEach(() =>
    {
        collection = null;
    });

    it('add', () =>
    {
        // collection.breadth(); //
        // collection.depth(); //

        assert.ok(true);
    });

    it('contain', () =>
    {
        assert.ok(collection.contain(30));
    });

});