/* ========================================================================
 * Bootstrap: dropdown.js v3.3.2
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
$=jQuery.noConflict();var BootstrapPresentFlag=$("#is_bootstrap_present").val();"true"!=BootstrapPresentFlag&&(+function(t){"use strict";function e(e){e&&3===e.which||(t(r).remove(),t(s).each(function(){var o=t(this),r=n(o),s={relatedTarget:this};r.hasClass("open")&&(r.trigger(e=t.Event("hide.bs.dropdown",s)),e.isDefaultPrevented()||(o.attr("aria-expanded","false"),i=0,r.removeClass("open").trigger("hidden.bs.dropdown",s)))}))}function n(e){var n=e.attr("data-target");n||(n=e.attr("href"),n=n&&/#[A-Za-z]/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,""));var o=n&&t(n);return o&&o.length?o:e.parent()}function o(e){return this.each(function(){var n=t(this),o=n.data("bs.dropdown");o||n.data("bs.dropdown",o=new a(this)),"string"==typeof e&&o[e].call(n)})}var i=0,r=".dropdown-backdrop",s='[data-toggle="dropdown"]',a=function(e){t(e).on("click.bs.dropdown",this.toggle)};a.VERSION="3.3.2",a.prototype.toggle=function(o){var r=t(this);if(!r.is(".disabled, :disabled")){var s=n(r),a=s.hasClass("open");if(e(),("function"==typeof t.fn.emulateTransitionEnd==1||t('script[src*="bootstrap.min"]').length>0||t('script[src*="bootstrap"]').length>0)&&(a=1!=i?!1:!0),!a){i=1,"ontouchstart"in document.documentElement&&!s.closest(".global-navbar-nav").length&&t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click",e);var l={relatedTarget:this};if(s.trigger(o=t.Event("show.bs.dropdown",l)),o.isDefaultPrevented())return;r.trigger("focus").attr("aria-expanded","true"),s.toggleClass("open").trigger("shown.bs.dropdown",l)}return!1}},a.prototype.keydown=function(e){if(/(38|40|27|32)/.test(e.which)&&!/input|textarea/i.test(e.target.tagName)){var o=t(this);if(e.preventDefault(),e.stopPropagation(),!o.is(".disabled, :disabled")){var i=n(o),r=i.hasClass("open");if(!r&&27!=e.which||r&&27==e.which)return 27==e.which&&i.find(s).trigger("focus"),o.trigger("click");var a=" li:not(.divider):visible a",l=i.find('[role="menu"]'+a+', [role="listbox"]'+a);if(l.length){var c=l.index(e.target);38==e.which&&c>0&&c--,40==e.which&&c<l.length-1&&c++,~c||(c=0),l.eq(c).trigger("focus")}}}};var l=t.fn.dropdown;t.fn.dropdown=o,t.fn.dropdown.Constructor=a,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=l,this},t(document).on("click.bs.dropdown.data-api",e).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",s,a.prototype.toggle).on("keydown.bs.dropdown.data-api",s,a.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',a.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',a.prototype.keydown)}(jQuery),/* ========================================================================
 * Bootstrap: tooltip.js v3.3.2
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),i=o.data("bs.tooltip"),r="object"==typeof e&&e;(i||"destroy"!=e)&&(i||o.data("bs.tooltip",i=new n(this,r)),"string"==typeof e&&i[e]())})}var n=function(t,e){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",t,e)};n.VERSION="3.3.2",n.TRANSITION_DURATION=150,n.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},n.prototype.init=function(e,n,o){this.enabled=!0,this.type=e,this.$element=t(n),this.options=this.getOptions(o),this.$viewport=this.options.viewport&&t(this.options.viewport.selector||this.options.viewport);for(var i=this.options.trigger.split(" "),r=i.length;r--;){var s=i[r];if("click"==s)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=s){var a="hover"==s?"mouseenter":"focusin",l="hover"==s?"mouseleave":"focusout";this.$element.on(a+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},n.prototype.getDefaults=function(){return n.DEFAULTS},n.prototype.getOptions=function(e){return e=t.extend({},this.getDefaults(),this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},n.prototype.getDelegateOptions=function(){var e={},n=this.getDefaults();return this._options&&t.each(this._options,function(t,o){n[t]!=o&&(e[t]=o)}),e},n.prototype.enter=function(e){var n=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return n&&n.$tip&&n.$tip.is(":visible")?void(n.hoverState="in"):(n||(n=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,n)),clearTimeout(n.timeout),n.hoverState="in",n.options.delay&&n.options.delay.show?void(n.timeout=setTimeout(function(){"in"==n.hoverState&&n.show()},n.options.delay.show)):n.show())},n.prototype.leave=function(e){var n=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return n||(n=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,n)),clearTimeout(n.timeout),n.hoverState="out",n.options.delay&&n.options.delay.hide?void(n.timeout=setTimeout(function(){"out"==n.hoverState&&n.hide()},n.options.delay.hide)):n.hide()},n.prototype.show=function(){var e=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);var o=t.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(e.isDefaultPrevented()||!o)return;var i=this,r=this.tip(),s=this.getUID(this.type);this.setContent(),r.attr("id",s),this.$element.attr("aria-describedby",s),this.options.animation&&r.addClass("fade");var a="function"==typeof this.options.placement?this.options.placement.call(this,r[0],this.$element[0]):this.options.placement,l=/\s?auto?\s?/i,c=l.test(a);c&&(a=a.replace(l,"")||"top"),r.detach().css({top:0,left:0,display:"block"}).addClass(a).data("bs."+this.type,this),this.options.container?r.appendTo(this.options.container):r.insertAfter(this.$element);var u=this.getPosition(),p=r[0].offsetWidth,d=r[0].offsetHeight;if(c){var h=a,f=this.options.container?t(this.options.container):this.$element.parent(),g=this.getPosition(f);a="bottom"==a&&u.bottom+d>g.bottom?"top":"top"==a&&u.top-d<g.top?"bottom":"right"==a&&u.right+p>g.width?"left":"left"==a&&u.left-p<g.left?"right":a,r.removeClass(h).addClass(a)}var v=this.getCalculatedOffset(a,u,p,d);this.applyPlacement(v,a);var m=function(){var t=i.hoverState;i.$element.trigger("shown.bs."+i.type),i.hoverState=null,"out"==t&&i.leave(i)};t.support.transition&&this.$tip.hasClass("fade")?r.one("bsTransitionEnd",m).emulateTransitionEnd(n.TRANSITION_DURATION):m()}},n.prototype.applyPlacement=function(e,n){var o=this.tip(),i=o[0].offsetWidth,r=o[0].offsetHeight,s=parseInt(o.css("margin-top"),10),a=parseInt(o.css("margin-left"),10);isNaN(s)&&(s=0),isNaN(a)&&(a=0),e.top=e.top+s,e.left=e.left+a,t.offset.setOffset(o[0],t.extend({using:function(t){o.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),o.addClass("in");var l=o[0].offsetWidth,c=o[0].offsetHeight;"top"==n&&c!=r&&(e.top=e.top+r-c);var u=this.getViewportAdjustedDelta(n,e,l,c);u.left?e.left+=u.left:e.top+=u.top;var p=/top|bottom/.test(n),d=p?2*u.left-i+l:2*u.top-r+c,h=p?"offsetWidth":"offsetHeight";o.offset(e),this.replaceArrow(d,o[0][h],p)},n.prototype.replaceArrow=function(t,e,n){this.arrow().css(n?"left":"top",50*(1-t/e)+"%").css(n?"top":"left","")},n.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},n.prototype.hide=function(e){function o(){"in"!=i.hoverState&&r.detach(),i.$element.removeAttr("aria-describedby").trigger("hidden.bs."+i.type),e&&e()}var i=this,r=this.tip(),s=t.Event("hide.bs."+this.type);return this.$element.trigger(s),s.isDefaultPrevented()?void 0:(r.removeClass("in"),t.support.transition&&this.$tip.hasClass("fade")?r.one("bsTransitionEnd",o).emulateTransitionEnd(n.TRANSITION_DURATION):o(),this.hoverState=null,this)},n.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},n.prototype.hasContent=function(){return this.getTitle()},n.prototype.getPosition=function(e){e=e||this.$element;var n=e[0],o="BODY"==n.tagName,i=n.getBoundingClientRect();null==i.width&&(i=t.extend({},i,{width:i.right-i.left,height:i.bottom-i.top}));var r=o?{top:0,left:0}:e.offset(),s={scroll:o?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop()},a=o?{width:t(window).width(),height:t(window).height()}:null;return t.extend({},i,s,a,r)},n.prototype.getCalculatedOffset=function(t,e,n,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-n/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-n/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-n}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},n.prototype.getViewportAdjustedDelta=function(t,e,n,o){var i={top:0,left:0};if(!this.$viewport)return i;var r=this.options.viewport&&this.options.viewport.padding||0,s=this.getPosition(this.$viewport);if(/right|left/.test(t)){var a=e.top-r-s.scroll,l=e.top+r-s.scroll+o;a<s.top?i.top=s.top-a:l>s.top+s.height&&(i.top=s.top+s.height-l)}else{var c=e.left-r,u=e.left+r+n;c<s.left?i.left=s.left-c:u>s.width&&(i.left=s.left+s.width-u)}return i},n.prototype.getTitle=function(){var t,e=this.$element,n=this.options;return t=e.attr("data-original-title")||("function"==typeof n.title?n.title.call(e[0]):n.title)},n.prototype.getUID=function(t){do t+=~~(1e6*Math.random());while(document.getElementById(t));return t},n.prototype.tip=function(){return this.$tip=this.$tip||t(this.options.template)},n.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},n.prototype.enable=function(){this.enabled=!0},n.prototype.disable=function(){this.enabled=!1},n.prototype.toggleEnabled=function(){this.enabled=!this.enabled},n.prototype.toggle=function(e){var n=this;e&&(n=t(e.currentTarget).data("bs."+this.type),n||(n=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,n))),n.tip().hasClass("in")?n.leave(n):n.enter(n)},n.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type)})};var o=t.fn.tooltip;t.fn.tooltip=e,t.fn.tooltip.Constructor=n,t.fn.emulateTransitionEnd=function(e){var n=!1,o=this;t(this).one(t.support.transition.end,function(){n=!0});var i=function(){n||t(o).trigger(t.support.transition.end)};return setTimeout(i,e),this},t.fn.tooltip.noConflict=function(){return t.fn.tooltip=o,this}}(jQuery),/* ========================================================================
 * Bootstrap: popover.js v3.3.2
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),i=o.data("bs.popover"),r="object"==typeof e&&e;(i||"destroy"!=e)&&(i||o.data("bs.popover",i=new n(this,r)),"string"==typeof e&&i[e]())})}var n=function(t,e){this.init("popover",t,e)};if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js");n.VERSION="3.3.2",n.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),n.prototype=t.extend({},t.fn.tooltip.Constructor.prototype),n.prototype.constructor=n,n.prototype.getDefaults=function(){return n.DEFAULTS},n.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),n=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof n?"html":"append":"text"](n),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},n.prototype.hasContent=function(){return this.getTitle()||this.getContent()},n.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},n.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},n.prototype.tip=function(){return this.$tip||(this.$tip=t(this.options.template)),this.$tip};var o=t.fn.popover;t.fn.popover=e,t.fn.popover.Constructor=n,t.fn.popover.noConflict=function(){return t.fn.popover=o,this}}(jQuery)),+function(t){t(document).ready(function(){var e,n,o,i,r,s,a=!1,l=function(){t("#header-navbar").ready(i)};i=function(){t("#header-menu-btn").click(o),t("#header-nav-overlay").click(n),t("#header-navbar .move-network-links").popover({html:!0,trigger:"click",clickAutoClose:!0,content:function(){return r(),t("#move-network-popover").html()}}),t("#header-nav-menu .global-navbar-main-links .dropdown").hover(function(){s(),t(this).hasClass("global-header-li-menu-hover")||t(this).addClass("global-header-li-menu-hover")},function(){t(this).hasClass("global-header-li-menu-hover")&&(t(this).hasClass("active")||t(this).removeClass("global-header-li-menu-hover"))}),t("#header-nav-menu .global-navbar-side-links .dropdown").hover(function(){s()}),e(),t("body").on("click",function(e){t('[data-toggle="popover"],[rel="popover"]').each(function(){t(this).is(e.target)||0!==t(this).has(e.target).length||0!==t(".popover").has(e.target).length||t(this).popover("hide")})}),t("#header-navbar .dropdown").mouseover(function(){t("#header-nav-menu").hasClass("nav-menu-mobile")&&t(this).removeClass("global-header-li-menu-hover"),t("#header-navbar .move-network-links").popover("hide")}),t(".global-navbar-nav > li > .dropdown-menu").hover(function(){t(this).parents(".dropdown").find("a.dropdown-toggle").addClass("dropdown-menu-link-active"),t(this).parents(".dropdown").find("a.dropdown-toggle .svg-icon-mobile-menu-toggle").addClass("svg-icon-mobile-menu-toggle-primary")},function(){t(this).parents(".dropdown").find("a.dropdown-toggle").removeClass("dropdown-menu-link-active"),t(this).parents(".dropdown").find("a.dropdown-toggle .svg-icon-mobile-menu-toggle").removeClass("svg-icon-mobile-menu-toggle-primary")})},o=function(){s(),a||(t("#header-navbar .nav-menu-mobile").clearQueue().animate({left:"0px"}),t("#header-nav-overlay").fadeIn(300),a=!0)},n=function(){a&&(t("#header-navbar .nav-menu-mobile").clearQueue().animate({left:"-300px"}),t("#header-nav-overlay").fadeOut(300),a=!1)},e=function(){var e=t("#header-nav-menu"),o=t(window).width();996>o?(e.find(".global-navbar-main-links > li").removeClass("global-header-li-menu-hover"),e.addClass("nav-menu-mobile").removeClass("nav-menu-desktop").css({left:"-300px"}),t("#header-navbar .dropdown-menu").removeClass("dropdown-hover"),t("#header-navbar .dropdown-toggle-desktop").removeAttr("data-toggle"),t("#header-navbar .dropdown-toggle-mobile").attr("data-toggle","dropdown")):(e.removeClass("nav-menu-mobile").addClass("nav-menu-desktop"),t("#header-nav-menu .global-navbar-main-links li.active").addClass("global-header-li-menu-hover"),n(),t("#header-navbar .dropdown").removeClass("open"),t("#header-navbar .dropdown-menu").addClass("dropdown-hover"),t("#header-navbar .dropdown-toggle-mobile").removeAttr("data-toggle"),t("#header-navbar .dropdown-toggle-desktop").attr("data-toggle","dropdown"))},r=function(){t("#move-network-popover ul li").find(".svg-logo").addClass("svg-popover-logos")},s=function(){var e=t("#header-nav-menu .global-navbar-main-links"),n=t("#header-nav-menu .global-navbar-side-links");e.find(".dropdown-header .svg-icon").addClass("svg-menu-icons"),e.find(".dropdown-toggle-mobile .svg-icon-angle-down").addClass("svg-menu-icons"),n.find(".dropdown-mobile-link .svg-icon").addClass("svg-menu-icons"),n.find(".dropdown-toggle-mobile .svg-icon-angle-down").addClass("svg-menu-icons")},t(window).on("resize orientationchange",function(){e()}),l()}),t(document).ready(function(){var e,n,o,i,r=!1,s=function(){e=t("#footer"),o(),t("#global-nav-feedback").hover(i)};o=function(){a()};var a=function(){t("#toggle-products").popover({container:"body",html:!0,trigger:"click",clickAutoClose:!0,content:function(){var e=t(t(this).data("popover-content")).clone(!0).removeClass("global-nav-hide");return e}}).click(function(t){t.preventDefault()})};closePopOver=function(t){var e=t.find('[rel="popover"]');e.length>0&&e.popover("global-nav-hide")},i=function(){r||(n=function(){return{showQualFeedBack:function(){var t,e="ZN_b3kL3gqdYMsP84Q_container",n=document.getElementById(e);n?(n.innerHTML="",t=n):(t=document.createElement("div"),t.id=e);var o=document.createElement("script");o.type="text/javascript",o.src="https://siteintercept.qualtrics.com/WRSiteInterceptEngine/?Q_ZID=ZN_b3kL3gqdYMsP84Q&Q_LOC="+encodeURIComponent(window.location.href)+"&Q_SIPREVIEW=TRUE",document.body&&(document.body.appendChild(o),document.body.appendChild(t))}}}(),r=!0)},t("body").delegate("#global-nav-feedback:not(.unclickable)","click",function(){var e=t(this);return e.addClass("unclickable"),n.showQualFeedBack(),setTimeout(function(){e.removeClass("unclickable")},3e3),!1}),s()})}(jQuery);var GNAV=window.GNAV||{};GNAV.MYACCOUNT=function(t,e){function n(){var t=getCookie("REMEMBER_ME");return data={"REMEMBER-ME":t},data}function o(e){"rdcV8"!=t("#site_id").val()&&e.preventDefault(),u(),raasLogout(function(){t(".header-login-menu").show(),t(".header-logged-menu").hide(),g(),a()},function(){})}function r(){"myaccount"==t("#site_id").val()?t("#header-nav-menu ul li").hover(function(){var t=angular.element(document.getElementById("myaccountEl")).scope();t.$apply(function(){s(event.target.parentNode.id)})}):t("#header-nav-menu ul li").hover(function(){s(t(this).attr("id"))})}function s(e){var n=t(".global-nav-news-feed-media ");switch(e){case"img_buy":n.find(".buy_links").attr("src","http://rdcnewscdn.realtor.com/wp-content/uploads/2016/08/raising-hand-145x81.jpg");break;case"img_sell":n.find(".sell_links").attr("src","http://rdcnewscdn.realtor.com/wp-content/uploads/2016/08/bidding-war-145x81.jpg");break;case"img_rentals":n.find(".rent_links").attr("src","http://rdcnewscdn.realtor.com/wp-content/uploads/2016/06/lease-agreement-145x81.jpg");break;case"img_mortgage":n.find(".mortgage_links").attr("src","http://rdcnewscdn.realtor.com/wp-content/uploads/2015/02/Woman_Veteran-145x81.jpg");break;case"img_far":n.find(".find_realtor_links").attr("src","http://assets-jpcust.jwpsrv.com/thumbs/fRX1QRZA-320.jpg");break;case"img_local":n.find(".local_links").attr("src","http://rdcnewscdn.realtor.com/wp-content/uploads/2016/08/school-kids-145x81.jpg");break;case"img_news":n.find(".news_advice_links").attr("src","http://assets-jpcust.jwpsrv.com/thumbs/y5apC5KB-320.jpg")}}function a(){"rdcV8"!=t("#site_id").val()&&(location.hash="#"),location.reload(!0)}function l(){"undefined"!=typeof MOVE_DATA&&void 0!=MOVE_DATA.adobeDTM&&(MOVE_DATA.adobeDTM.raas={site:MOVE_DATA.adobeDTM.pageType,placement:"header-menu"},_satellite&&_satellite.track&&_satellite.track("raas:signup"))}function c(){"undefined"!=typeof MOVE_DATA&&void 0!=MOVE_DATA.adobeDTM&&(MOVE_DATA.adobeDTM.raas={site:MOVE_DATA.adobeDTM.pageType,placement:"header-menu"},_satellite&&_satellite.track&&_satellite.track("raas:login"))}function u(){"undefined"!=typeof MOVE_DATA&&void 0!=MOVE_DATA.adobeDTM&&(MOVE_DATA.adobeDTM.raas={site:MOVE_DATA.adobeDTM.pageType,placement:"header-menu"},_satellite&&_satellite.track&&_satellite.track("raas:logout"))}function p(e,n,o){t.ajax({type:"POST",url:"//globalnav.realtor.com/"+o,data:{resource_data:e,resource_type:n},crossDomain:!0,success:function(e){localStorage.setItem(n,e),localStorage.removeItem("isMyaccountApi"),t(".myaccount-username").html(t(".js-username").text())},error:function(t){console.log(t),localStorage.removeItem("isMyaccountApi")}})}function d(e){var o=h(e);t.ajax({type:"GET",url:o.url,headers:n(),success:function(t){"my_search"==e&&0!=t.length&&(t=f(t)),p(t,e,o.method_name)},error:function(t){console.log(t),localStorage.removeItem("isMyaccountApi")}})}function h(t){return"my_properties"==t?{url:b(),method_name:"my_saved_properties"}:{url:w(),method_name:"my_saved_searches"}}function f(t){var e=t.length;return t=t.slice(0,2),t[t.length]={search_count:e},t}function g(){localStorage.removeItem("my_search"),localStorage.removeItem("my_properties"),localStorage.removeItem("isMyaccountApi")}function v(){return void 0!=getCookie("REMEMBER_ME")?!0:!1}function m(){return"rdcV8"==t("#site_id").val()?!0:!1}function y(){-1!==t.inArray(t(location).attr("href").split("//")[1],["myaccount.realtor.com/properties#/properties","myaccount-qa.realtor.com/properties#/properties"])&&t(".modal-actions").click(function(){localStorage.setItem("isMyaccountApi",!0)})}function b(){return"https://myaccount.realtor.com/saved_listings/index/1/for_sale.json?page_limit=2"}function w(){return"https://myaccount.realtor.com/saved_search/index.json?"}var x,T,C,k;self.getCookie=function(t){var e=new RegExp(t+"=([^;]+)"),n=e.exec(document.cookie);return null!=n?unescape(n[1]):null},t(document).ready(function(){change_logged_in_div(),login(),signup(),logout(),x=!1,T=!1,t("#channel_flag").val()&&(t(window).on("scroll",lazyFooterImages),lazyFooterImages()),PreLoadSvg(),y(),r(),localStorage.getItem("isMyaccountApi")&&t.when(d("my_search"),d("my_properties"))}),t(window).on("load",function(){C=!1}),self.login=function(){t(".login").click(function(){t("#login-signup-popup").hide(),c(),raasLogin(function(){localStorage.setItem("isMyaccountApi",!0),change_logged_in_div(),a()})})},self.signup=function(){t(".signup").click(function(){t("#login-signup-popup").hide(),l(),raasSignup(function(){localStorage.setItem("isMyaccountApi",!0),change_logged_in_div(),a()},function(){})})},self.logout=function(){t("#logout").click(function(t){o(t)})},self.myServiceLogout=function(){o()},self.change_logged_in_div=function(){if(cookie=getCookie("REMEMBER_ME"),null!=cookie)for(t(".header-login-menu").hide(),t(".header-logged-menu").show(),cookie_values=cookie.split("&"),i=0;i<cookie_values.length;i++){if(cookie_values[i].indexOf("nm")>-1){name=cookie_values[i].split("=")[1];var e=name;void 0!==name&&name.length>10&&(e=name.substring(0,8)+"..."),t(".js-username").html(e),t(".myaccount-username").html(e)}cookie_values[i].indexOf("regID")>-1&&(k=cookie_values[i].split("=")[1])}},self.lazyLoadRaas=function(){"rdcV8"!=t("#site_id").val()?loadRaasFiles():t("li#header-login-menu").hover(loadRaasFiles)},self.loadRaasFiles=function(){var t="production";if(!T){if("production"==t)var e="//d1v9hyvpzys6td.cloudfront.net/v1/js/raas-static.js";else var e=getQaRaasJs();var n=document.createElement("script");n.setAttribute("src",e),document.body.appendChild(n),T=!0}},self.getQaRaasJs=function(){return"rdcV8"==t("#site_id").val()?"//myaccount-qa.realtor.com/v1/js/raas-static-v8.js":"//myaccount-qa.realtor.com/v1/js/raas-static.js"},self.lazyFooterImages=function(){if(!x&&void 0!=t("#footer").offset()){footerPosition=t("#footer").offset().top;var e=window.screen.availHeight,n=t(this).scrollTop(),o=footerPosition-n;e>=o&&lazyLoadImages()}},self.lazyLoadImages=function(){footerJson=E(),t("div[class='footer-wrapper-social'] a").each(function(e){t(this).find("i").addClass(footerJson[e])}),x=!0};var E=function(){return svgJson={0:"svg-icon svg-icon-twitter",1:"svg-icon svg-icon-facebook",2:"svg-icon svg-icon-google-plus",3:"svg-icon svg-icon-pinterest",4:"svg-logo svg-logo-houselogic",5:"svg-logo svg-logo-realtoru"},svgJson};return self.PreLoadSvg=function(){t("#header-sprite").attr({src:"//dy0wsww1w6so8.cloudfront.net/assets/sprite-header-v2-b1a1fa585e8393a621c8ac16d515d96560d469afd8b9aadb36dc290acc4e9c42.svg"})},t("li#header-login-menu").hover(function(){t("#login-signup-popup").show(),v()&&m()&&(t("#my_search_div").html(localStorage.getItem("my_search")),"string"==typeof localStorage.getItem("my_search")&&t("#no_search_div").hide()),v()&&m()&&(t("#my_properties_div").html(localStorage.getItem("my_properties")),"string"==typeof localStorage.getItem("my_properties")&&t("#no_property_div").hide()),t(this).addClass("global-header-li-menu-hover"),t(this).find(".fade-effect").fadeOut("slow"),t(this).find(".fade-effect").stop(!0,!0).delay(200).fadeIn(500)},function(){t(this).find(".fade-effect").fadeIn("slow"),t(this).find(".fade-effect").stop(!0,!0).delay(200).fadeOut(500),setTimeout(function(){t("li#header-login-menu").removeClass("global-header-li-menu-hover")},550)}),abbreviateCurrency=function(t){t=isEmpty(t)||""===t?0:t;var e=t.toString(),n="";return t=parseInt(t,10),t>=1e3&&1e6>t?(t=Math.floor(t/1e3),1e3>t?n="k":(t=Math.floor(t/1e3),n="M")):t>=1e6&&(t=Math.floor(t/1e3),t=Math.floor(t/10),t=(t/100).toFixed(2),n="M"),e=t.toString(),e.indexOf(".00")>-1&&(e=e.substr(0,e.indexOf(".00"))),e.indexOf(".")>-1&&"0"===e.substr(e.length-1,1)&&(e=e.substr(0,e.length-1)),e+=n,"$"+e},isEmpty=function(t){return!t||/^\s*$/.test(t)},e.MYACCOUNT={getSavedResponse:d},e.MYACCOUNT}(jQuery,GNAV.MYACCOUNT||{});