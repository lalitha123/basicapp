var cacheName = 'helloWorld';                         

self.addEventListener('install', event => {           
  event.waitUntil(
    caches.open(cacheName)                            
      .then(cache => cache.addAll([                   
        '/js/script.js',
        '/images/hello.png'
      ]))
  );
});
