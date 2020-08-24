import * as path from 'path';
import { getOrDefault } from '../../common/functions/object/getOrDefault';
import { readOptionsFile } from '../../options/readOptionsFile';

describe('readOption()', () => {
  const releaseOptions = readOptionsFile({
    pathToFile: path.resolve(__dirname, '..', 'quick-release.defaults.yaml'),
  });
  it('can read a numeric value mapped to a key in the release-options file', () => {
    const value = getOrDefault(releaseOptions, 'version');
    const expectedValue = 1;
    expect(value).toBe(expectedValue);
  });

  it('can read the value mapped to an object path', () => {
    const value = getOrDefault(releaseOptions, 'bot.email');
    const expectedValue = 'skypilot-bot@users.noreply.github.com';
    expect(value).toBe(expectedValue);
  });
});
