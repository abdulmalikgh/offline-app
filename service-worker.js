const cacheName = 'cache-v1';
const filesToCache = [
    '/',
    'index.html',
    'styles/main.css',
    'images/space1.jpg',
    'images/space2.jpg',
    'images/space3.jpg'
];
// installing service worker
self.addEventListener('install', function(e) {
    console.log('installing service worker')
 e.waitUntil( 
     caches.open(cacheName).then(cache => {
         cache.addAll(filesToCache)
     })
 )
})
// activating the sevice worker


