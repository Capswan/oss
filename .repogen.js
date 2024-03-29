const config = {
  provider: 'capswan',
  repospacePath: __dirname,
  repositories: [
    { capswan: 'oss-gitspace' },
    { capswan: 'oss-charts' },
    { capswan: 'oss-charts-lang' },

  ],
};

module.exports = { config };
