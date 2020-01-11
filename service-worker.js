const cacheName = 'cache-v1';
const filesToCache = [
    '/',
    'index.html',
    'index.js',
    'styles/main.css',
    'images/space1.jpg',
    'images/space2.jpg',
    'images/space3.jpg',
];
// installing service worker
self.addEventListener('install', function(e) {
    self.skipWaiting();
    console.log('installing service worker')
 e.waitUntil( 
     caches.open(cacheName).then(cache => {
         cache.addAll(filesToCache)
     })
 )
})
// activating the sevice worker
self.addEventListener('activate', function(e) {
    console.log('activating service workers')
  e.waitUntil( 
      caches.keys().then(keyList => {
          return Promise.all(keyList.map( key => {
              if(key !== cacheName) return caches.delete(key);
          }))
      }
      )
  )
});
// fetching data
self.addEventListener('fetch', function(e) {
    console.log('fetching data')
  e.respondWith(
      caches.match(e.request).then(response =>{
         if(response) {
             return response;
         } else {
             return fetch(e.request.url);
         }

      })
  ) ;

});

