module.exports = {
  name: 'assay-ui',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/assay-ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
