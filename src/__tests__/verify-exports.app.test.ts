import * as actualExports from '../index';

const intendedExports: string[] = [
  /* Change-level functions */
  'parseMessageChangeLevel',
  'parseMessagesChangeLevel',

  /* Constants & enums */
  'ChangeLevel',

  /* Version functions */
  'getCoreVersion',
  'getCurrentVersion',
  'getNextReleaseVersion',
  'getNextVersion',
];

describe('Export verification', () => {

  const actualExportNames = Object.keys(actualExports);

  it('exports should include all intended exports', () => {
    for (const exportName of intendedExports) {
      expect(actualExportNames).toContain(exportName);
    }
  });


  it('exports should not include any unintended exports', () => {
    for (const exportName of actualExportNames) {
      expect(intendedExports).toContain(exportName);
    }
  });
});
