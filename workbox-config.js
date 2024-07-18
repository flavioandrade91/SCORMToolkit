// workbox-config.js

module.exports = {
    globDirectory: 'build/',
    globPatterns: [
      '**/*.{js,css,html,png}'
    ],
    swSrc: 'src/lib/service-worker.ts',
    swDest: 'build/service-worker.js',
  };
  