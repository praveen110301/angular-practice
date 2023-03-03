import { usdInrPipe } from './usd-inr.pipe';

describe('USDINRPipe', () => {
  it('create an instance', () => {
    const pipe = new usdInrPipe();
    expect(pipe).toBeTruthy();
  });
});
