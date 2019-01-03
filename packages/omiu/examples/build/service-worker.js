"use strict";var precacheConfig=[["./example.html","f6afb369971574602a8a00e7a6bc605a"],["./index.html","d65432419dadd5792e21e91f2ec9a7cf"],["./static/css/example.fd06c8ea.css","61481dd833f64d7dc1a3d9a3f0013228"],["./static/css/index.fd06c8ea.css","f3dc97a76192a4564884538b5a8073f2"],["./static/css/zh-cn.fd06c8ea.css","73345a6f338b9a2c6479b828ba16713a"],["./static/js/0.6ea4ba4d.chunk.js","8821925211a83daf36cf3645e9769c76"],["./static/js/1.6f2ab6b2.chunk.js","548045a745eefba44f056f386bed7164"],["./static/js/10.898bc6ef.chunk.js","1606a7c6794d8ba96ccd618e0bad22cf"],["./static/js/11.76a481f2.chunk.js","2ba6e65ca39e9dac1a1655016cb982fa"],["./static/js/12.34cb2275.chunk.js","93fc678b61e11b26e850eb6ff63bb963"],["./static/js/13.9f661869.chunk.js","f0d5afcf3935e8a42542ea6667225514"],["./static/js/14.7f110a6e.chunk.js","79aa4839898e57c71e87470fc9310ec3"],["./static/js/15.751f9d4d.chunk.js","09c17ce095c1ba7d6e69942cb5c1920f"],["./static/js/16.6bed6a47.chunk.js","d5075ac7ca17a2b4e071d422e7304dd5"],["./static/js/17.6718f2c2.chunk.js","7b2f71711334e2d580e4bc34cbfa46ae"],["./static/js/18.7986ac8c.chunk.js","216d1e7f3a088c92812296a1e9ff54ec"],["./static/js/19.40edf700.chunk.js","be5f30c07cc2c121b4aaa67541848fc2"],["./static/js/2.8fae5eeb.chunk.js","680ac57ec4325c2cac5c74d5539577df"],["./static/js/20.5f22c0c7.chunk.js","4d33a590d3d580d44e883763b138febd"],["./static/js/21.78681a38.chunk.js","47f780e443780c0376a59920a6a79dc2"],["./static/js/22.77c46485.chunk.js","fe984eafe22656a58e8975c2c2fad58b"],["./static/js/23.e69abb61.chunk.js","a8434b1d6ac8b6f2b5a35fa80a60d055"],["./static/js/24.c8c8050c.chunk.js","eaae29aab5d187137349d3c5d2b8fee0"],["./static/js/25.a67efa20.chunk.js","d1619f8391e7ba7e4e0f30fd74f1b019"],["./static/js/26.ed549c48.chunk.js","c64e47b17a21353b6cb4b720d8c41097"],["./static/js/27.dba05c93.chunk.js","16d6411f77876b55c4540f2bf8e35522"],["./static/js/28.c1e6333e.chunk.js","48f25868d5b00c0c63e8284751bacd42"],["./static/js/29.a6385883.chunk.js","f2a3d6cd2a9a67f51c3190c07190b8df"],["./static/js/3.0c6c28bf.chunk.js","512d5c982b69beb0e5b1b1024b67e2e0"],["./static/js/30.9c618e16.chunk.js","dc37bd0d797ba88491d48bd618d27e3f"],["./static/js/31.484d3ad8.chunk.js","a5117570b17218a80d60627c6f03e403"],["./static/js/32.5c7ab70e.chunk.js","d14f81a119d15be95dc06bdf833370b3"],["./static/js/33.14644ebe.chunk.js","393028680e899ab56e203385473c9556"],["./static/js/4.9383d328.chunk.js","55331bce1040cfd6c41b4f6207853f53"],["./static/js/5.0d50c723.chunk.js","d8891ab214e26366d76810f566961b72"],["./static/js/6.0bea3eca.chunk.js","68f96890f161ee9d39dd844979791ace"],["./static/js/7.f4bda633.chunk.js","a27db4736ce5702a8317861b52ee43c5"],["./static/js/8.e9e7d3c5.chunk.js","2ddd78db2204020242fe050375a9e148"],["./static/js/9.e527f745.chunk.js","2c65be68be6dc6394b712627ace69209"],["./static/js/example.ad07683b.js","d864f46157d2b18e1ef41d61848dc0d3"],["./static/js/index.7b5da827.js","b9262116ab0faae2df0b32dd93923bef"],["./static/js/timeline.79c512ed.js","dc4d0356563aaaebfe346f2501460fb4"],["./static/js/tree.cf8feade.js","9b3d9d3c7c79ec16e65f395413e00ca8"],["./static/js/zh-cn.5778bd1e.js","7a8d7846b034e2be1e910b537ad66a72"],["./static/media/loading.84a15aa0.svg","84a15aa010f310acb5f4bc99ce8f7ed1"],["./static/media/omi-logo.979f9173.svg","979f9173db1ab18c35b7e720f0bb41a0"],["./timeline.html","a478c08aca082ec9c45a8eb00775c7f9"],["./tree.html","610025715d7807cd08fa89f2904f8c9f"],["./zh-cn.html","23cc9e134beadbac344ff980991f37f8"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,c){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=c),a.toString()},cleanResponse=function(c){return c.redirected?("body"in c?Promise.resolve(c.body):c.blob()).then(function(e){return new Response(e,{headers:c.headers,status:c.status,statusText:c.statusText})}):Promise.resolve(c)},createCacheKey=function(e,c,a,t){var s=new URL(e);return t&&s.pathname.match(t)||(s.search+=(s.search?"&":"")+encodeURIComponent(c)+"="+encodeURIComponent(a)),s.toString()},isPathWhitelisted=function(e,c){if(0===e.length)return!0;var a=new URL(c).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(c){return a.every(function(e){return!e.test(c[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var c=e[0],a=e[1],t=new URL(c,self.location),s=createCacheKey(t,hashParamName,a,/\.\w{8}\./);return[t.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var e=new Request(c,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+c+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(c,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(c){return c.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return c.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(c){if("GET"===c.request.method){var e,a=stripIgnoredUrlParameters(c.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,t),e=urlsToCacheKeys.has(a));var s="./index.html";!e&&"navigate"===c.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],c.request.url)&&(a=new URL(s,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&c.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',c.request.url,e),fetch(c.request)}))}});