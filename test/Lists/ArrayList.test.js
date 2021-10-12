"use strict";

const assert = require('assert'), { List : { ArrayList, } } = require('../../index');

describe('Lists.ArrayList', () =>
{
    var collection;

    beforeEach(() =>
    {
        collection = new ArrayList();

        collection.add("A");
        collection.add("B");
        collection.add("C");
        collection.add("D");
        collection.add("E");
    });

    afterEach(() =>
    {
        collection = null;
    });

    it('add', () =>
    {
      for (let iterator = collection.iterate(); iterator.hasNext();) {

          assert.ok(["A", "B", "C", "D", "E"].includes(iterator.next()));
      }
    });

    it('count', () =>
    {
        assert.equal(collection.count(), 5);
    });

    it('get', () =>
    {
        assert.equal(collection.get(4), "E");
    });

    it('modify', () =>
    {
        collection.modify(4, "XYZ");

        assert.notEqual(collection.get(4), "E");
    });

    it('remove', () =>
    {
        collection.remove(4);
        assert.notEqual(collection.get(4), "E");

        collection.remove(3);
        assert.notEqual(collection.get(3), "D");

        collection.remove(2);
        assert.notEqual(collection.get(2), "C");

        collection.remove(1);
        assert.notEqual(collection.get(1), "B");

        collection.remove(0);
        assert.notEqual(collection.get(0), "A");

        assert.equal(collection.count(), 0);
    });

});