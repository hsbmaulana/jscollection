"use strict";

const assert = require('assert'), { Graph : { DirectedGraph, } } = require('../../index');

describe('Graphs.DirectedGraph', () =>
{
    var collection;

    beforeEach(() =>
    {
        collection = new DirectedGraph(5);

        collection.push("A");
        collection.enqueue("B");
        collection.push("C");
        collection.enqueue("D");
        collection.push("E");

        collection.addEdge(0, 1, 10);
        collection.addEdge(1, 2, 20);
        collection.addEdge(2, 3, 30);
        collection.addEdge(4, 1, 40);
        collection.addEdge(3, 2, 50);
    });

    afterEach(() =>
    {
        collection = null;
    });

    it('vertex', () =>
    {
        assert.deepStrictEqual(collection.vertices, ["D", "B", "A", "C", "E"]);
    });

    it('edge', () =>
    {
        assert.deepStrictEqual(collection.edges,
        [
            [
                0, 10, 0, 0, 0
            ],
            [
                0, 0, 20, 0, 0
            ],
            [
                0, 0, 0, 30, 0
            ],
            [
                0, 0, 50, 0, 0
            ],
            [
                0, 40, 0, 0, 0
            ]
        ]);
    });

    it('traverse', () =>
    {
        // collection.breadth(3); //
        // collection.depth(3); //

        assert.ok(true);
    });

});