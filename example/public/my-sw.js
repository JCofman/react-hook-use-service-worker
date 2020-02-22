const version = 'my-sw 1';

const main = async () => {
  console.log(`Service Worker ${version} is starting ...`);
};

const onInstall = async evt => {
  console.log(`Service Worker ${version} installed.`);
  self.skipWaiting();
};
const onActivate = async evt => {
  evt.waitUntil(handleActivation());
};

const handleActivation = async () => {
  await clients.claim();

  console.log(`Service Worker ${version} activated.`);
};

main().catch(console.error);

self.addEventListener('install', onInstall);
self.addEventListener('activate', onActivate);
