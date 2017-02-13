/*
 Copyright (c) 2014-2016, Dr. Oleg Kiriljuk, oleg.kiriljuk@ok-soft-gmbh.com
 Dual licensed under the MIT and GPL licenses
 http://www.opensource.org/licenses/mit-license.php
 http://www.gnu.org/licenses/gpl-2.0.html
 Date: 2015-04-06
 see the answers http://stackoverflow.com/a/8491939/315935
             and http://stackoverflow.com/a/29048089/315935
             and http://stackoverflow.com/q/29457007/315935
*/
var $jscomp={scope:{},findInternal:function(a,c,b){a instanceof String&&(a=String(a));for(var e=a.length,f=0;f<e;f++){var g=a[f];if(c.call(b,g,f,a))return{i:f,v:g}}return{i:-1,v:void 0}}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(a,c,b){if(b.get||b.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[c]=b.value)};
$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.polyfill=function(a,c,b,e){if(c){b=$jscomp.global;a=a.split(".");for(e=0;e<a.length-1;e++){var f=a[e];f in b||(b[f]={});b=b[f]}a=a[a.length-1];e=b[a];c=c(e);c!=e&&null!=c&&$jscomp.defineProperty(b,a,{configurable:!0,writable:!0,value:c})}};
$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(a,b){return $jscomp.findInternal(this,a,b).v}},"es6-impl","es3");
(function(a){"function"===typeof define&&define.amd?define(["jquery","./jquery.contextmenu-ui","free-jqgrid/grid.base"],a):"object"===typeof module&&module.exports?module.exports=function(c,b){void 0===b&&(b="undefined"!==typeof window?require("jquery"):require("jquery")(c||window));a(b);return b}:a(jQuery)})(function(a){a.jgrid.extend({createContexMenuFromNavigatorButtons:function(c,b){var e=this,f="menu_"+e[0].id,g=a("<ul>"),h=a("<div>").attr("id",f);g.appendTo(h);h.appendTo("body");e.contextMenu(f,
{bindings:{},onContextMenu:function(b){var c=e[0].p,d,f;d=a(b.target);b=d.closest("tr.jqgrow").attr("id");d=d.is(":text:enabled")||d.is("input[type=textarea]:enabled")||d.is("textarea:enabled");if(d=b&&!d)d="",window.getSelection?d=window.getSelection():document.getSelection?d=document.getSelection():document.selection&&(d=document.selection.createRange().text),d=""===("string"===typeof d?d:d.toString());return d?(d=a.inArray(b,c.selarrrow),c.selrow!==b&&0>d?e.jqGrid("setSelection",b):c.multiselect&&
(f=c.selarrrow[c.selarrrow.length-1],d!==c.selarrrow.length-1&&(c.selarrrow[c.selarrrow.length-1]=b,c.selarrrow[d]=f,c.selrow=b)),!0):!1},onShowMenu:function(f,g){var d=this,h=g.children("ul").first().empty(),k=null!=a.ui&&"string"===typeof a.ui.version?/^([0-9]+)\.([0-9]+)\.([0-9]+)$/.exec(a.ui.version):[],l=null!=k&&4===k.length&&"1"===k[1]&&11>k[2];a(c).find(".navtable .ui-pg-button").filter(function(){return!(a(this).prop("disabled")||a(this).hasClass("ui-state-disabled"))}).each(function(){var b,
c,f,e,g=a(this).children("div.ui-pg-div").first();1===g.length&&(c=g.children(".ui-pg-button-text").html(),b=g.parent(),""===a.trim(c)&&(c=b.attr("title")),f=""!==this.id&&""!==c?"menuitem_"+this.id:a.jgrid.randId(),e=a("<li>").attr("id",f),b=g.children("span").not(".ui-pg-button-text").first(),0<b.length&&(l?e.append(a("<a>").html(c).prepend(b.clone().removeClass("ui-pg-button-icon-over-text").css({"float":"left",marginTop:b.hasClass("ui-icon")?"0.25em":"0.125em",marginRight:"0.5em"}))):e.html(c).prepend(b.clone().removeClass("ui-pg-button-icon-over-text").css({"float":"left",
marginTop:b.first().hasClass("ui-icon")?"0.25em":"0.125em",marginRight:"0.5em"})),g.parent().hasClass("ui-state-active")&&e.find("span").addClass("ui-state-active"),0<e.find("select,input").length&&e.hide(),h.append(e),d.bindings[f]=function(a){return function(){a.click()}}(g)))});a.jgrid.fullBoolFeedback.call(e,(b||{}).onShowContextMenu,"jqGridShowContextMenu",h,d);return g}})}})});
//# sourceMappingURL=jquery.createcontexmenufromnavigatorbuttons.map
