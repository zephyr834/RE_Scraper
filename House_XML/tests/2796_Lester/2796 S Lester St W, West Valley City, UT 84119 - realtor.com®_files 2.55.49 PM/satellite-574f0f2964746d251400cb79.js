// pagefair
(function() {
        function async_load(script_url){
            var protocol = ('https:' == document.location.protocol ? 'https://' : 'http://');
            var s = document.createElement('script'); s.src = protocol + script_url;
            var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
        }
        bm_website_code = '74C0C788A9E249EE';
        jQuery(document).ready(function(){async_load('asset.pagefair.com/measure.min.js')});
    })();

//comscore
var _comscore = _comscore || [];
  _comscore.push({ c1: "2", c2: "6036093",});
  (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
  })();
  

