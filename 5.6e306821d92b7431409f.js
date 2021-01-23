(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{dB9c:function(e,t,n){"use strict";n.r(t),n("fSjL");var i,r=n("/6Yf"),s=n("qOnz"),o=n("30Go"),a=n("nbvr"),c=n("zIRd"),u=((i={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',i["only-available-in-window"]="This method is available in a Window context.",i["only-available-in-sw"]="This method is available in a service worker context.",i["permission-default"]="The notification permission was not granted and dismissed instead.",i["permission-blocked"]="The notification permission was not granted and blocked instead.",i["unsupported-browser"]="This browser doesn't support the API's required to use the firebase SDK.",i["failed-service-worker-registration"]="We are unable to register the default service worker. {$browserErrorMessage}",i["token-subscribe-failed"]="A problem occurred while subscribing the user to FCM: {$errorInfo}",i["token-subscribe-no-token"]="FCM returned no token when subscribing the user to push.",i["token-unsubscribe-failed"]="A problem occurred while unsubscribing the user from FCM: {$errorInfo}",i["token-update-failed"]="A problem occurred while updating the user from FCM: {$errorInfo}",i["token-update-no-token"]="FCM returned no token when updating the user to push.",i["use-sw-after-get-token"]="The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",i["invalid-sw-registration"]="The input to useServiceWorker() must be a ServiceWorkerRegistration.",i["invalid-bg-handler"]="The input to setBackgroundMessageHandler() must be a function.",i["invalid-vapid-key"]="The public VAPID key must be a string.",i["use-vapid-key-after-get-token"]="The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.",i),l=new s.b("messaging","Messaging",u),d="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",p=function(e){return e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked",e}({});function f(e){var t=new Uint8Array(e);return btoa(String.fromCharCode.apply(String,Object(o.f)(t))).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function h(e){for(var t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(t),i=new Uint8Array(n.length),r=0;r<n.length;++r)i[r]=n.charCodeAt(r);return i}var b="fcm_token_details_db",g="fcm_token_object_Store";function v(e){return Object(o.b)(this,void 0,void 0,(function(){var t,n=this;return Object(o.d)(this,(function(i){switch(i.label){case 0:return"databases"in indexedDB?[4,indexedDB.databases()]:[3,2];case 1:if(!i.sent().map((function(e){return e.name})).includes(b))return[2,null];i.label=2;case 2:return t=null,[4,Object(a.openDb)(b,5,(function(i){return Object(o.b)(n,void 0,void 0,(function(){var n,r,s,a;return Object(o.d)(this,(function(o){switch(o.label){case 0:return i.oldVersion<2?[2]:i.objectStoreNames.contains(g)?[4,(n=i.transaction.objectStore(g)).index("fcmSenderId").get(e)]:[2];case 1:return r=o.sent(),[4,n.clear()];case 2:if(o.sent(),!r)return[2];if(2===i.oldVersion){if(!(s=r).auth||!s.p256dh||!s.endpoint)return[2];t={token:s.fcmToken,createTime:null!==(a=s.createTime)&&void 0!==a?a:Date.now(),subscriptionOptions:{auth:s.auth,p256dh:s.p256dh,endpoint:s.endpoint,swScope:s.swScope,vapidKey:"string"==typeof s.vapidKey?s.vapidKey:f(s.vapidKey)}}}else(3===i.oldVersion||4===i.oldVersion)&&(t={token:(s=r).fcmToken,createTime:s.createTime,subscriptionOptions:{auth:f(s.auth),p256dh:f(s.p256dh),endpoint:s.endpoint,swScope:s.swScope,vapidKey:f(s.vapidKey)}});return[2]}}))}))}))];case 3:return i.sent().close(),[4,Object(a.deleteDb)(b)];case 4:return i.sent(),[4,Object(a.deleteDb)("fcm_vapid_details_db")];case 5:return i.sent(),[4,Object(a.deleteDb)("undefined")];case 6:return i.sent(),[2,w(t)?t:null]}}))}))}function w(e){if(!e||!e.subscriptionOptions)return!1;var t=e.subscriptionOptions;return"number"==typeof e.createTime&&e.createTime>0&&"string"==typeof e.token&&e.token.length>0&&"string"==typeof t.auth&&t.auth.length>0&&"string"==typeof t.p256dh&&t.p256dh.length>0&&"string"==typeof t.endpoint&&t.endpoint.length>0&&"string"==typeof t.swScope&&t.swScope.length>0&&"string"==typeof t.vapidKey&&t.vapidKey.length>0}var y="firebase-messaging-store",m=null;function k(){return m||(m=Object(a.openDb)("firebase-messaging-database",1,(function(e){switch(e.oldVersion){case 0:e.createObjectStore(y)}}))),m}function O(e){return Object(o.b)(this,void 0,void 0,(function(){var t,n,i;return Object(o.d)(this,(function(r){switch(r.label){case 0:return t=M(e),[4,k()];case 1:return[4,r.sent().transaction(y).objectStore(y).get(t)];case 2:return(n=r.sent())?[2,n]:[3,3];case 3:return[4,v(e.appConfig.senderId)];case 4:return(i=r.sent())?[4,j(e,i)]:[3,6];case 5:return r.sent(),[2,i];case 6:return[2]}}))}))}function j(e,t){return Object(o.b)(this,void 0,void 0,(function(){var n,i,r;return Object(o.d)(this,(function(s){switch(s.label){case 0:return n=M(e),[4,k()];case 1:return i=s.sent(),[4,(r=i.transaction(y,"readwrite")).objectStore(y).put(t,n)];case 2:return s.sent(),[4,r.complete];case 3:return s.sent(),[2,t]}}))}))}function S(e){return Object(o.b)(this,void 0,void 0,(function(){var t,n,i;return Object(o.d)(this,(function(r){switch(r.label){case 0:return t=M(e),[4,k()];case 1:return n=r.sent(),[4,(i=n.transaction(y,"readwrite")).objectStore(y).delete(t)];case 2:return r.sent(),[4,i.complete];case 3:return r.sent(),[2]}}))}))}function M(e){return e.appConfig.appId}function T(e,t){return Object(o.b)(this,void 0,void 0,(function(){var n,i,r,s,a;return Object(o.d)(this,(function(o){switch(o.label){case 0:return[4,D(e)];case 1:n=o.sent(),i=P(t),r={method:"POST",headers:n,body:JSON.stringify(i)},o.label=2;case 2:return o.trys.push([2,5,,6]),[4,fetch(C(e.appConfig),r)];case 3:return[4,o.sent().json()];case 4:return s=o.sent(),[3,6];case 5:throw a=o.sent(),l.create("token-subscribe-failed",{errorInfo:a});case 6:if(s.error)throw l.create("token-subscribe-failed",{errorInfo:s.error.message});if(!s.token)throw l.create("token-subscribe-no-token");return[2,s.token]}}))}))}function I(e,t){return Object(o.b)(this,void 0,void 0,(function(){var n,i,r,s,a;return Object(o.d)(this,(function(o){switch(o.label){case 0:return[4,D(e)];case 1:n=o.sent(),i=P(t.subscriptionOptions),r={method:"PATCH",headers:n,body:JSON.stringify(i)},o.label=2;case 2:return o.trys.push([2,5,,6]),[4,fetch(C(e.appConfig)+"/"+t.token,r)];case 3:return[4,o.sent().json()];case 4:return s=o.sent(),[3,6];case 5:throw a=o.sent(),l.create("token-update-failed",{errorInfo:a});case 6:if(s.error)throw l.create("token-update-failed",{errorInfo:s.error.message});if(!s.token)throw l.create("token-update-no-token");return[2,s.token]}}))}))}function K(e,t){return Object(o.b)(this,void 0,void 0,(function(){var n,i,r,s;return Object(o.d)(this,(function(o){switch(o.label){case 0:return[4,D(e)];case 1:n=o.sent(),i={method:"DELETE",headers:n},o.label=2;case 2:return o.trys.push([2,5,,6]),[4,fetch(C(e.appConfig)+"/"+t,i)];case 3:return[4,o.sent().json()];case 4:if((r=o.sent()).error)throw l.create("token-unsubscribe-failed",{errorInfo:r.error.message});return[3,6];case 5:throw s=o.sent(),l.create("token-unsubscribe-failed",{errorInfo:s});case 6:return[2]}}))}))}function C(e){return"https://fcmregistrations.googleapis.com/v1/projects/"+e.projectId+"/registrations"}function D(e){var t=e.appConfig,n=e.installations;return Object(o.b)(this,void 0,void 0,(function(){var e;return Object(o.d)(this,(function(i){switch(i.label){case 0:return[4,n.getToken()];case 1:return e=i.sent(),[2,new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":"FIS "+e})]}}))}))}function P(e){var t=e.vapidKey,n={web:{endpoint:e.endpoint,auth:e.auth,p256dh:e.p256dh}};return t!==d&&(n.web.applicationPubKey=t),n}function _(e,t,n){return Object(o.b)(this,void 0,void 0,(function(){var i,r,s,a;return Object(o.d)(this,(function(o){switch(o.label){case 0:if("granted"!==Notification.permission)throw l.create("permission-blocked");return[4,x(t,n)];case 1:return i=o.sent(),[4,O(e)];case 2:return r=o.sent(),s={vapidKey:n,swScope:t.scope,endpoint:i.endpoint,auth:f(i.getKey("auth")),p256dh:f(i.getKey("p256dh"))},r?[3,3]:[2,R(e,s)];case 3:if(d=(u=s).endpoint===(c=r.subscriptionOptions).endpoint,u.vapidKey===c.vapidKey&&d&&u.auth===c.auth&&u.p256dh===c.p256dh)return[3,8];o.label=4;case 4:return o.trys.push([4,6,,7]),[4,K(e,r.token)];case 5:return o.sent(),[3,7];case 6:return a=o.sent(),console.warn(a),[3,7];case 7:return[2,R(e,s)];case 8:return Date.now()>=r.createTime+6048e5?[2,N({token:r.token,createTime:Date.now(),subscriptionOptions:s},e,t)]:[2,r.token];case 9:return[2]}var c,u,d}))}))}function E(e,t){return Object(o.b)(this,void 0,void 0,(function(){var n,i;return Object(o.d)(this,(function(r){switch(r.label){case 0:return[4,O(e)];case 1:return(n=r.sent())?[4,K(e,n.token)]:[3,4];case 2:return r.sent(),[4,S(e)];case 3:r.sent(),r.label=4;case 4:return[4,t.pushManager.getSubscription()];case 5:return(i=r.sent())?[2,i.unsubscribe()]:[2,!0]}}))}))}function N(e,t,n){return Object(o.b)(this,void 0,void 0,(function(){var i,r,s;return Object(o.d)(this,(function(a){switch(a.label){case 0:return a.trys.push([0,3,,5]),[4,I(t,e)];case 1:return i=a.sent(),r=Object(o.a)(Object(o.a)({},e),{token:i,createTime:Date.now()}),[4,j(t,r)];case 2:return a.sent(),[2,i];case 3:return s=a.sent(),[4,E(t,n)];case 4:throw a.sent(),s;case 5:return[2]}}))}))}function R(e,t){return Object(o.b)(this,void 0,void 0,(function(){var n,i;return Object(o.d)(this,(function(r){switch(r.label){case 0:return[4,T(e,t)];case 1:return n=r.sent(),i={token:n,createTime:Date.now(),subscriptionOptions:t},[4,j(e,i)];case 2:return r.sent(),[2,i.token]}}))}))}function x(e,t){return Object(o.b)(this,void 0,void 0,(function(){var n;return Object(o.d)(this,(function(i){switch(i.label){case 0:return[4,e.pushManager.getSubscription()];case 1:return(n=i.sent())?[2,n]:[2,e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:h(t)})]}}))}))}function A(e){return"object"==typeof e&&!!e&&"google.c.a.c_id"in e}function W(e){return new Promise((function(t){setTimeout(t,e)}))}var H=function(){function e(e){var t=this;this.firebaseDependencies=e,this.isOnBackgroundMessageUsed=null,this.vapidKey=null,this.bgMessageHandler=null,self.addEventListener("push",(function(e){e.waitUntil(t.onPush(e))})),self.addEventListener("pushsubscriptionchange",(function(e){e.waitUntil(t.onSubChange(e))})),self.addEventListener("notificationclick",(function(e){e.waitUntil(t.onNotificationClick(e))}))}return Object.defineProperty(e.prototype,"app",{get:function(){return this.firebaseDependencies.app},enumerable:!1,configurable:!0}),e.prototype.setBackgroundMessageHandler=function(e){if(this.isOnBackgroundMessageUsed=!1,!e||"function"!=typeof e)throw l.create("invalid-bg-handler");this.bgMessageHandler=e},e.prototype.onBackgroundMessage=function(e){var t=this;return this.isOnBackgroundMessageUsed=!0,this.bgMessageHandler=e,function(){t.bgMessageHandler=null}},e.prototype.getToken=function(){var e,t;return Object(o.b)(this,void 0,void 0,(function(){var n;return Object(o.d)(this,(function(i){switch(i.label){case 0:return this.vapidKey?[3,2]:[4,O(this.firebaseDependencies)];case 1:n=i.sent(),this.vapidKey=null!==(t=null===(e=null==n?void 0:n.subscriptionOptions)||void 0===e?void 0:e.vapidKey)&&void 0!==t?t:d,i.label=2;case 2:return[2,_(this.firebaseDependencies,self.registration,this.vapidKey)]}}))}))},e.prototype.deleteToken=function(){return E(this.firebaseDependencies,self.registration)},e.prototype.requestPermission=function(){throw l.create("only-available-in-window")},e.prototype.usePublicVapidKey=function(e){if(null!==this.vapidKey)throw l.create("use-vapid-key-after-get-token");if("string"!=typeof e||0===e.length)throw l.create("invalid-vapid-key");this.vapidKey=e},e.prototype.useServiceWorker=function(){throw l.create("only-available-in-window")},e.prototype.onMessage=function(){throw l.create("only-available-in-window")},e.prototype.onTokenRefresh=function(){throw l.create("only-available-in-window")},e.prototype.onPush=function(e){return Object(o.b)(this,void 0,void 0,(function(){var t,n,i,r;return Object(o.d)(this,(function(s){switch(s.label){case 0:return(t=function(e){var t=e.data;if(!t)return null;try{return t.json()}catch(n){return null}}(e))?[4,V()]:(console.debug("FirebaseMessaging: failed to get parsed MessagePayload from the PushEvent. Skip handling the push."),[2]);case 1:return function(e){return e.some((function(e){return"visible"===e.visibilityState&&!e.url.startsWith("chrome-extension://")}))}(n=s.sent())?[2,L(n,t)]:(i=!1,t.notification?[4,F(U(t))]:[3,3]);case 2:s.sent(),i=!0,s.label=3;case 3:return!0===i&&!1===this.isOnBackgroundMessageUsed?[2]:(this.bgMessageHandler&&(r=function(e){var t={from:e.from,collapseKey:e.collapse_key};return function(e,t){if(t.notification){e.notification={};var n=t.notification.title;n&&(e.notification.title=n);var i=t.notification.body;i&&(e.notification.body=i);var r=t.notification.image;r&&(e.notification.image=r)}}(t,e),function(e,t){t.data&&(e.data=t.data)}(t,e),function(e,t){if(t.fcmOptions){e.fcmOptions={};var n=t.fcmOptions.link;n&&(e.fcmOptions.link=n);var i=t.fcmOptions.analytics_label;i&&(e.fcmOptions.analyticsLabel=i)}}(t,e),t}(t),"function"==typeof this.bgMessageHandler?this.bgMessageHandler(r):this.bgMessageHandler.next(r)),[4,W(1e3)]);case 4:return s.sent(),[2]}}))}))},e.prototype.onSubChange=function(e){var t,n;return Object(o.b)(this,void 0,void 0,(function(){var i;return Object(o.d)(this,(function(r){switch(r.label){case 0:return e.newSubscription?[3,2]:[4,E(this.firebaseDependencies,self.registration)];case 1:return r.sent(),[2];case 2:return[4,O(this.firebaseDependencies)];case 3:return i=r.sent(),[4,E(this.firebaseDependencies,self.registration)];case 4:return r.sent(),[4,_(this.firebaseDependencies,self.registration,null!==(n=null===(t=null==i?void 0:i.subscriptionOptions)||void 0===t?void 0:t.vapidKey)&&void 0!==n?n:d)];case 5:return r.sent(),[2]}}))}))},e.prototype.onNotificationClick=function(e){var t,n;return Object(o.b)(this,void 0,void 0,(function(){var i,r,s,a,c;return Object(o.d)(this,(function(o){switch(o.label){case 0:return(i=null===(n=null===(t=e.notification)||void 0===t?void 0:t.data)||void 0===n?void 0:n.FCM_MSG)?e.action?[2]:(e.stopImmediatePropagation(),e.notification.close(),(r=function(e){var t,n,i;return(null!==(n=null===(t=e.fcmOptions)||void 0===t?void 0:t.link)&&void 0!==n?n:null===(i=e.notification)||void 0===i?void 0:i.click_action)||(A(e.data)?self.location.origin:null)}(i))?(s=new URL(r,self.location.href),a=new URL(self.location.origin),s.host!==a.host?[2]:[4,B(s)]):[2]):[2];case 1:return(c=o.sent())?[3,4]:[4,self.clients.openWindow(r)];case 2:return c=o.sent(),[4,W(3e3)];case 3:return o.sent(),[3,6];case 4:return[4,c.focus()];case 5:c=o.sent(),o.label=6;case 6:return c?(i.messageType=p.NOTIFICATION_CLICKED,i.isFirebaseMessaging=!0,[2,c.postMessage(i)]):[2]}}))}))},e}();function U(e){var t,n=Object(o.a)({},e.notification);return n.data=((t={}).FCM_MSG=e,t),n}function B(e){return Object(o.b)(this,void 0,void 0,(function(){var t,n,i,r,s,a,c;return Object(o.d)(this,(function(u){switch(u.label){case 0:return[4,V()];case 1:t=u.sent();try{for(n=Object(o.g)(t),i=n.next();!i.done;i=n.next())if(r=i.value,s=new URL(r.url,self.location.href),e.host===s.host)return[2,r]}catch(l){a={error:l}}finally{try{i&&!i.done&&(c=n.return)&&c.call(n)}finally{if(a)throw a.error}}return[2,null]}}))}))}function L(e,t){var n,i;t.isFirebaseMessaging=!0,t.messageType=p.PUSH_RECEIVED;try{for(var r=Object(o.g)(e),s=r.next();!s.done;s=r.next())s.value.postMessage(t)}catch(a){n={error:a}}finally{try{s&&!s.done&&(i=r.return)&&i.call(r)}finally{if(n)throw n.error}}}function V(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function F(e){var t,n=e.actions,i=Notification.maxActions;return n&&i&&n.length>i&&console.warn("This browser only supports "+i+" actions. The remaining actions will not be displayed."),self.registration.showNotification(null!==(t=e.title)&&void 0!==t?t:"",e)}var q=function(){function e(e){var t=this;this.firebaseDependencies=e,this.vapidKey=null,this.onMessageCallback=null,navigator.serviceWorker.addEventListener("message",(function(e){return t.messageEventListener(e)}))}return Object.defineProperty(e.prototype,"app",{get:function(){return this.firebaseDependencies.app},enumerable:!1,configurable:!0}),e.prototype.messageEventListener=function(e){return Object(o.b)(this,void 0,void 0,(function(){var t,n;return Object(o.d)(this,(function(i){switch(i.label){case 0:return(t=e.data).isFirebaseMessaging?(this.onMessageCallback&&t.messageType===p.PUSH_RECEIVED&&("function"==typeof this.onMessageCallback?this.onMessageCallback(function(e){return delete e.messageType,delete e.isFirebaseMessaging,e}(Object.assign({},t))):this.onMessageCallback.next(Object.assign({},t))),A(n=t.data)&&"1"===n["google.c.a.e"]?[4,this.logEvent(t.messageType,n)]:[3,2]):[2];case 1:i.sent(),i.label=2;case 2:return[2]}}))}))},e.prototype.getVapidKey=function(){return this.vapidKey},e.prototype.getSwReg=function(){return this.swRegistration},e.prototype.getToken=function(e){return Object(o.b)(this,void 0,void 0,(function(){return Object(o.d)(this,(function(t){switch(t.label){case 0:return"default"!==Notification.permission?[3,2]:[4,Notification.requestPermission()];case 1:t.sent(),t.label=2;case 2:if("granted"!==Notification.permission)throw l.create("permission-blocked");return[4,this.updateVapidKey(null==e?void 0:e.vapidKey)];case 3:return t.sent(),[4,this.updateSwReg(null==e?void 0:e.serviceWorkerRegistration)];case 4:return t.sent(),[2,_(this.firebaseDependencies,this.swRegistration,this.vapidKey)]}}))}))},e.prototype.updateVapidKey=function(e){return Object(o.b)(this,void 0,void 0,(function(){return Object(o.d)(this,(function(t){return e?this.vapidKey=e:this.vapidKey||(this.vapidKey=d),[2]}))}))},e.prototype.updateSwReg=function(e){return Object(o.b)(this,void 0,void 0,(function(){return Object(o.d)(this,(function(t){switch(t.label){case 0:return e||this.swRegistration?[3,2]:[4,this.registerDefaultSw()];case 1:t.sent(),t.label=2;case 2:if(!e&&this.swRegistration)return[2];if(!(e instanceof ServiceWorkerRegistration))throw l.create("invalid-sw-registration");return this.swRegistration=e,[2]}}))}))},e.prototype.registerDefaultSw=function(){return Object(o.b)(this,void 0,void 0,(function(){var e,t;return Object(o.d)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),e=this,[4,navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"})];case 1:return e.swRegistration=n.sent(),this.swRegistration.update().catch((function(){})),[3,3];case 2:throw t=n.sent(),l.create("failed-service-worker-registration",{browserErrorMessage:t.message});case 3:return[2]}}))}))},e.prototype.deleteToken=function(){return Object(o.b)(this,void 0,void 0,(function(){return Object(o.d)(this,(function(e){switch(e.label){case 0:return this.swRegistration?[3,2]:[4,this.registerDefaultSw()];case 1:e.sent(),e.label=2;case 2:return[2,E(this.firebaseDependencies,this.swRegistration)]}}))}))},e.prototype.requestPermission=function(){return Object(o.b)(this,void 0,void 0,(function(){var e;return Object(o.d)(this,(function(t){switch(t.label){case 0:return"granted"===Notification.permission?[2]:[4,Notification.requestPermission()];case 1:if("granted"===(e=t.sent()))return[2];throw l.create("denied"===e?"permission-blocked":"permission-default")}}))}))},e.prototype.usePublicVapidKey=function(e){if(null!==this.vapidKey)throw l.create("use-vapid-key-after-get-token");if("string"!=typeof e||0===e.length)throw l.create("invalid-vapid-key");this.vapidKey=e},e.prototype.useServiceWorker=function(e){if(!(e instanceof ServiceWorkerRegistration))throw l.create("invalid-sw-registration");if(this.swRegistration)throw l.create("use-sw-after-get-token");this.swRegistration=e},e.prototype.onMessage=function(e){var t=this;return this.onMessageCallback=e,function(){t.onMessageCallback=null}},e.prototype.setBackgroundMessageHandler=function(){throw l.create("only-available-in-sw")},e.prototype.onBackgroundMessage=function(){throw l.create("only-available-in-sw")},e.prototype.onTokenRefresh=function(){return function(){}},e.prototype.logEvent=function(e,t){return Object(o.b)(this,void 0,void 0,(function(){var n;return Object(o.d)(this,(function(i){switch(i.label){case 0:return n=function(e){switch(e){case p.NOTIFICATION_CLICKED:return"notification_open";case p.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}(e),[4,this.firebaseDependencies.analyticsProvider.get()];case 1:return i.sent().logEvent(n,{message_id:t["google.c.a.c_id"],message_name:t["google.c.a.c_l"],message_time:t["google.c.a.ts"],message_device_time:Math.floor(Date.now()/1e3)}),[2]}}))}))},e}();function G(e){return l.create("missing-app-config-values",{valueName:e})}var J={isSupported:$};function $(){return self&&"ServiceWorkerGlobalScope"in self?"indexedDB"in self&&null!==indexedDB&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey"):"indexedDB"in window&&null!==indexedDB&&navigator.cookieEnabled&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}c.a.INTERNAL.registerComponent(new r.a("messaging",(function(e){var t=e.getProvider("app").getImmediate(),n={app:t,appConfig:function(e){var t,n;if(!e||!e.options)throw G("App Configuration Object");if(!e.name)throw G("App Name");var i=e.options;try{for(var r=Object(o.g)(["projectId","apiKey","appId","messagingSenderId"]),s=r.next();!s.done;s=r.next()){var a=s.value;if(!i[a])throw G(a)}}catch(c){t={error:c}}finally{try{s&&!s.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}return{appName:e.name,projectId:i.projectId,apiKey:i.apiKey,appId:i.appId,senderId:i.messagingSenderId}}(t),installations:e.getProvider("installations").getImmediate(),analyticsProvider:e.getProvider("analytics-internal")};if(!$())throw l.create("unsupported-browser");return self&&"ServiceWorkerGlobalScope"in self?new H(n):new q(n)}),"PUBLIC").setServiceProps(J))}}]);