"use strict";

const assert = require('assert');

describe('Testcase', () =>
{

    before(() => { process.stdout.write("Runs before all tests within this block."); });

    after(() => { process.stdout.write("Runs after all tests within this block."); });

    beforeEach(() => { process.stdout.write("Runs before each test within this block."); });

    afterEach(() => { process.stdout.write("Runs after each test within this block."); });

    // describe('scope', () => {}); //
    // it('case', () => { process.stdout.write("The case."); }); //

});