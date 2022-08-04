const config = {
  provider: 'capswan',
  repospacePath: __dirname,
  repositories: [
    { capswan: 'cli-ftr' },
    { capswan: 'cli-repogen' },

  ],
};

module.exports = { config };
