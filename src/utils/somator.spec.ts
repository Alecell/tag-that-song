import { Somator } from './somator';

describe('somator', () => {
  it('shoud sum', () => {
    expect(Somator(1, 2)).to.be.equal(3);
  });
});
