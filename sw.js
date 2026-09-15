self.addEventListener("install",e=>e.waitUntil(self.skipWaiting()));
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
self.addEventListener("push",e=>{
 let d={}; try{d=e.data?e.data.json():{}}catch(_){d={body:e.data?e.data.text():"価格アラート"}}
 e.waitUntil(self.registration.showNotification(d.title||"XRP ALERT",{body:d.body||"XRP価格アラート",data:d.url||"./"}));
});
self.addEventListener("notificationclick",e=>{
 e.notification.close();
 e.waitUntil(self.clients.matchAll({type:"window",includeUncontrolled:true}).then(cs=>cs.length?cs[0].focus():self.clients.openWindow("./")));
});