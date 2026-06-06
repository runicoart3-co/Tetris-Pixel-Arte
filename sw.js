const CACHE_NAME = "tetris-art-v2";

const FILES = [
  "./",
  "./index.html",
  "./js/game.js",
  "./css/styles.css",
  "./manifest.json",
  "./icon/icon-192.png",
  "./icon/icon-512.png"
];

self.addEventListener("install", event => {

  console.log("SW INSTALL");

  event.waitUntil(

    caches.open(CACHE_NAME)
      .then(cache => {

        console.log("CACHE OPENED");

        return Promise.all(
          FILES.map(file => {

            console.log("Caching:", file);

            return cache.add(file)
              .catch(err => {
                console.error("FAILED:", file, err);
              });

          })
        );

      })

  );

});

self.addEventListener("fetch", event => {

  event.respondWith(

    caches.match(event.request)
      .then(response => response || fetch(event.request))

  );

});