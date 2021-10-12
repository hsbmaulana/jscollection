"use strict";

const assert = require('assert');

suite('Testcase', () =>
{

    suiteSetup(() => { process.stdout.write("Runs at the beginning of this suite."); });

    suiteTeardown(() => { process.stdout.write("Runs at the very end of this suite."); });

    setup(() => { process.stdout.write("Runs before each test within this suite."); });

    teardown(() => { process.stdout.write("Runs after each test in this suite."); });

    // suite('scope', () => {}); //
    // test('case', () => { process.stdout.write("The case."); }); //

});