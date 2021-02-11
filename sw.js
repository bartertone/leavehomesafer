self.addEventListener("install", e=>{
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll([
                "./",
                "./src/index.js",
                "./src/master.css",
                "./src/enter.css",
                "./images/enter.png",
                "./images/report.png",
                "./images/geton.png",
                "./images/notification.png",
                "./images/AppIcons/Assets.xcassets/AppIcon.appiconset/196.png",
                "./images/AppIcons/Assets.xcassets/AppIcon.appiconset/512.png",
                "https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css",
                "https://code.jquery.com/jquery-3.5.1.slim.min.js",
                "https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js",
                "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
                "./camera/app.js",
                "./camera/style.css",
                "./camera.html",
                "./enter.html",
            ]);
        })
    );
});


self.addEventListener("fetch", e => {
    console.log(`intercepting fetch request for:  ${e.request.url}`);
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});