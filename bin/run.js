"use strict";

module.exports =
{
    List :
    {
        ArrayList  : require('../src/Lists/ArrayList'),
        LinkedList : require('../src/Lists/LinkedList'),
    },

    Tree :
    {
        BinarySearchTree : require('../src/Trees/BinarySearchTree'),
    },

    Graph :
    {
        DirectedGraph : require('../src/Graphs/DirectedGraph'),
        UndirectedGraph : require('../src/Graphs/UndirectedGraph'),
    },
};