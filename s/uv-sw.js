importScripts("https://cdn.jsdelivr.net/gh/sussyboi01/star@latest/s/uv/uv.sw.js");

const sw = new UVServiceWorker();

self.addEventListener("fetch", (event) => event.respondWith(sw.fetch(event)));
