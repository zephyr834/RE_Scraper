_satellite.pushAsyncScript(function(event, target, $variables){
  // forsee
;(function (g) {
    var d = document, i, am = d.createElement('script'), h = d.head || d.getElementsByTagName("head")[0],
            aex = {
                "src": _satellite.getVar('forseeEndpoint'),
                "type": "text/javascript",
                "async": "true",
                "data-vendor": "acs",
                "data-role": "gateway"
            };
    for (var attr in aex) { am.setAttribute(attr,aex[attr]); }
    h.appendChild(am);
    g['acsReady'] = function () {var aT = '__acsReady__', args = Array.prototype.slice.call(arguments, 0),k = setInterval(function () {if (typeof g[aT] === 'function') {clearInterval(k);for (i = 0; i < args.length; i++) {g[aT].call(g, function(fn) { return function() { setTimeout(fn, 1) };}(args[i]));}}}, 50);};
})(window);

// samba
!function(){var t=window.SambaTV=window.SambaTV||[];if(!t.track){if(t.invoked)return void(window.console&&window.console.error&&window.console.error("Samba Metrics snippet included twice."));t.invoked=!0,t.methods=["track","Impression","Purchase","Register","Click","Login","Register"],t.factory=function(e){return function(){var r=Array.prototype.slice.call(arguments);return r.unshift(e),t.push(r),t}};for(var e=0;e<t.methods.length;e++){var r=t.methods[e];t[r]=t.factory(r)}t.load=function(t){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"===document.location.protocol?"https://":"http://")+"tag.mtrcs.samba.tv/v3/tag/realtor"+t+"/sambaTag.js";var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(e,r)},t.attrs||(t.attrs={}),t.SNIPPET_VERSION="1.0.1",t.load('/'+_satellite.getVar("pageType")+'+'+_satellite.getVar("propertyStatus"))}}();


});
