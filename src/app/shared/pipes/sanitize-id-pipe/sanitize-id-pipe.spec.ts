import { SanitizeIdPipe } from './sanitize-id-pipe';

describe('SanitizeIdPipe', () => {
  it('create an instance', () => {
    const pipe = new SanitizeIdPipe();
    expect(pipe).toBeTruthy();
  });
});
