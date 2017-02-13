/*
 ContextMenu - jQuery plugin for right-click context menus

 Author: Chris Domigan
 Contributors: Dan G. Switzer, II
 Parts of this plugin are inspired by Joern Zaefferer's Tooltip plugin

 Dual licensed under the MIT and GPL licenses:
   http://www.opensource.org/licenses/mit-license.php
   http://www.gnu.org/licenses/gpl.html

 Version: r2
 Date: 16 July 2007

 For documentation visit http://www.trendskitchens.co.nz/jquery/contextmenu/

 Updated: include support jQuery UI CSS classes existing starting with version 1.8
          and the currents modified CSS classes of version jQuery UI 1.9
 by Oleg Kiriljuk, oleg.kiriljuk@ok-soft.gmbh.com
 Date: 24 December 2011

 Updated by Oleg Kiriljuk to support jQuery UI 1.10 and 1.11
 Date: 17 March 2015
*/
var $jscomp={scope:{},findInternal:function(a,c,e){a instanceof String&&(a=String(a));for(var h=a.length,g=0;g<h;g++){var n=a[g];if(c.call(e,n,g,a))return{i:g,v:n}}return{i:-1,v:void 0}}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(a,c,e){if(e.get||e.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[c]=e.value)};
$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.polyfill=function(a,c,e,h){if(c){e=$jscomp.global;a=a.split(".");for(h=0;h<a.length-1;h++){var g=a[h];g in e||(e[g]={});e=e[g]}a=a[a.length-1];h=e[a];c=c(h);c!=h&&null!=c&&$jscomp.defineProperty(e,a,{configurable:!0,writable:!0,value:c})}};
$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(a,e){return $jscomp.findInternal(this,a,e).v}},"es6-impl","es3");
(function(a){"function"===typeof define&&define.amd?define(["jquery"],a):"object"===typeof module&&module.exports?module.exports=function(c,e){void 0===e&&(e="undefined"!==typeof window?require("jquery"):require("jquery")(c||window));a(e);return e}:a(jQuery)})(function(a){var c,e,h,g,n,l=null!=a.ui&&"string"===typeof a.ui.version?/^([0-9]+)\.([0-9]+)\.([0-9]+)$/.exec(a.ui.version):[],p=null!=l&&4===l.length&&"1"===l[1]&&11>l[2],f={menuClasses:"ui-menu ui-widget ui-widget-content ui-corner-all",menuIconClasses:"ui-menu-icons ui-menu ui-widget ui-widget-content ui-corner-all",
menuDivStyle:{position:"absolute",zIndex:"500"},menuStyle:{width:"100%"},itemClasses:"ui-menu-item",itemStyle:{},itemHoverStyle:{},itemAnchorClasses:"ui-corner-all",itemAnchorStyle:{position:"relative",paddingRight:"0"},itemIconAnchorStyle:{paddingLeft:"2em"},itemIconSpanStyle:{left:".2em",top:".3em",marginRight:".5em",position:"absolute","float":"left"},itemHoverAnchorClasses:"ui-state-hover",eventPosX:"pageX",eventPosY:"pageY",shadow:!0,menuShadowClasses:"ui-widget-shadow",menuShadowStyle:{position:"absolute",
zIndex:"499",margin:"0",padding:"1px 0 0 6px"},onContextMenu:null,onShowMenu:null};a.fn.contextMenu=function(l,b){function q(){c.hide().attr("aria-hidden","true");e.hide().attr("aria-hidden","true")}function r(b,f,k){var d=g[b];h=a("#"+d.id).find("ul:first").clone(!0);c.html(h);d.onShowMenu&&(c=d.onShowMenu(k,c));d.menuClasses&&(d.menuIconClasses&&0<h.find(".ui-icon").length?h.addClass(d.menuIconClasses):h.addClass(d.menuClasses));a.isEmptyObject(d.menuStyle)||h.css(d.menuStyle);b=h.attr("role","menu").find("li");
d.itemClasses&&b.addClass(d.itemClasses).attr("role",p?"presentation":"menuitem");a.isEmptyObject(d.itemStyle)||b.css(d.itemStyle);d.itemAnchorClasses&&(p?b.children("a").addClass(d.itemAnchorClasses).filter(":not([role])").attr("role","menuitem"):b.addClass(d.itemAnchorClasses));a.isEmptyObject(d.itemAnchorStyle)||b.children("a").css(d.itemAnchorStyle);a.isEmptyObject(d.itemIconSpanStyle)||b.children("a").children("span.ui-icon").css(d.itemIconSpanStyle).parent("a").css(d.itemIconAnchorStyle);a.isEmptyObject(d.itemHoverStyle)?
b.hover(function(){(p?a(this).children("a"):a(this)).addClass(d.itemHoverAnchorClasses)},function(){(p?a(this).children("a"):a(this)).removeClass(d.itemHoverAnchorClasses)}):a.isEmptyObject(d.itemHoverStyle)||b.hover(function(){a(this).css(d.itemHoverStyle)},function(){a(this).css(d.itemStyle)});b.find("img").css({verticalAlign:"middle",paddingRight:"2px"});a.each(d.bindings,function(b,d){a("#"+b,c).bind("click",function(){q();d(f,n)})});c.css({left:k[d.eventPosX],top:k[d.eventPosY],"white-space":"pre"}).show().removeAttr("aria-hidden");
d.shadow&&e.css({width:c.width(),height:c.height(),left:k.pageX+2,top:k.pageY+2}).show().removeAttr("aria-hidden");k=c.offset();b=0;k.top+c.height()>a(window).scrollTop()+window.innerHeight&&(b=a(window).scrollTop()-k.top-c.height()+window.innerHeight,k.top+=b,c.offset(k),k=e.offset(),k.top+=b,e.offset(k));a(document).one("click",q)}g=g||[];g.push({id:l,menuDivStyle:a.extend({},f.menuDivStyle,b.menuDivStyle||{}),menuStyle:a.extend({},f.menuStyle,b.menuStyle||{}),menuShadowStyle:a.extend({},f.menuShadowStyle,
b.menuShadowStyle||{}),itemStyle:a.extend({},f.itemStyle,b.itemStyle||{}),itemHoverStyle:a.extend({},f.itemHoverStyle,b.itemHoverStyle||{}),menuClasses:b.menuClasses||f.menuClasses,menuIconClasses:b.menuIconClasses||f.menuIconClasses,menuShadowClasses:b.menuShadowClasses||f.menuShadowClasses,itemClasses:b.itemClasses||f.itemClasses,itemAnchorClasses:b.itemAnchorClasses||f.itemAnchorClasses,itemAnchorStyle:a.extend({},f.itemAnchorStyle,b.itemAnchorStyle||{}),itemIconSpanStyle:a.extend({},f.itemIconSpanStyle,
b.itemIconSpanStyle||{}),itemIconAnchorStyle:a.extend({},f.itemIconAnchorStyle,b.itemIconAnchorStyle||{}),itemHoverAnchorClasses:b.itemHoverAnchorClasses||f.itemHoverAnchorClasses,bindings:b.bindings||{},shadow:b.shadow||!1===b.shadow?b.shadow:f.shadow,onContextMenu:b.onContextMenu||f.onContextMenu,onShowMenu:b.onShowMenu||f.onShowMenu,eventPosX:b.eventPosX||f.eventPosX,eventPosY:b.eventPosY||f.eventPosY});var m=g.length-1;c||(c=a('<div class="jqContextMenu"></div>').hide().attr("aria-hidden","true").css(g[m].menuDivStyle).appendTo("body").bind("click",
function(a){a.stopPropagation()}).mouseleave(function(a){-1===a.pageX&&-1===a.pageY||q()}));e||(e=a("<div></div>").addClass(g[m].menuShadowClasses).css(g[m].menuShadowStyle).appendTo("body").hide().attr("aria-hidden","true"));a(this).bind("contextmenu",function(a){var c=g[m].onContextMenu?g[m].onContextMenu(a):!0;n=a.target;if(c)return r(m,this,a,b),!1;q();return!0});return this};a.contextMenu={defaults:function(c){a.each(c,function(b,c){"object"===typeof c&&f[b]?a.extend(f[b],c):f[b]=c})}};a(function(){a("div.contextMenu").hide().attr("aria-hidden",
"true")})});
//# sourceMappingURL=jquery.contextmenu-ui.map
