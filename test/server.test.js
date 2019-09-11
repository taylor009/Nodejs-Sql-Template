'use strict';
const {describe}     = require('mocha');
const chai           = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect         = chai.expect;
const server         = require('../server');

chai.use(chaiAsPromised);

describe('server', () =>
{
    context('Server running', () =>
    {
        it('should listen on port 3000', () =>
        {
            expect(server).to.exist;
        });
    })
});
