/**
 * @license ContextMenu - jQuery plugin for right-click context menus
 *
 * Author: Chris Domigan
 * Contributors: Dan G. Switzer, II
 * Parts of this plugin are inspired by Joern Zaefferer's Tooltip plugin
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Version: r2
 * Date: 16 July 2007
 *
 * For documentation visit http://www.trendskitchens.co.nz/jquery/contextmenu/
 *
 */
!function(n,t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(e){return t(e,n.document)}):"object"==typeof module&&module.exports?module.exports=function(e,n){return void 0===n&&(n="undefined"!=typeof window?require("jquery"):require("jquery")(e||window)),t(n,e.document),n}:t(jQuery,n.document)}("undefined"!=typeof window?window:this,function(d,u){var s,c,r,l,f,t={menuStyle:{listStyle:"none",padding:"1px",margin:"0px",backgroundColor:"#fff",border:"1px solid #999",width:"100px"},itemStyle:{margin:"0px",color:"#000",display:"block",cursor:"default",padding:"3px",border:"1px solid #fff",backgroundColor:"transparent"},itemHoverStyle:{border:"1px solid #0a246a",backgroundColor:"#b6bdd2"},eventPosX:"pageX",eventPosY:"pageY",shadow:!0,onContextMenu:null,onShowMenu:null};function a(){s.hide(),c.hide()}d.fn.contextMenu=function(e,n){s=s||d('<div id="jqContextMenu"></div>').hide().css({position:"absolute",zIndex:"500"}).appendTo("body").bind("click",function(e){e.stopPropagation()}),c=c||d("<div></div>").css({backgroundColor:"#000",position:"absolute",opacity:.2,zIndex:499}).appendTo("body").hide(),(l=l||[]).push({id:e,menuStyle:d.extend({},t.menuStyle,n.menuStyle||{}),itemStyle:d.extend({},t.itemStyle,n.itemStyle||{}),itemHoverStyle:d.extend({},t.itemHoverStyle,n.itemHoverStyle||{}),bindings:n.bindings||{},shadow:(n.shadow||!1===n.shadow?n:t).shadow,onContextMenu:n.onContextMenu||t.onContextMenu,onShowMenu:n.onShowMenu||t.onShowMenu,eventPosX:n.eventPosX||t.eventPosX,eventPosY:n.eventPosY||t.eventPosY});var i=l.length-1;return d(this).bind("contextmenu",function(e){var t,n,o=!l[i].onContextMenu||l[i].onContextMenu(e);if(f=e.target,o)return t=this,o=e,n=l[i],(r=d("#"+n.id).find("ul:first").clone(!0)).css(n.menuStyle).find("li").css(n.itemStyle).hover(function(){d(this).css(n.itemHoverStyle)},function(){d(this).css(n.itemStyle)}).find("img").css({verticalAlign:"middle",paddingRight:"2px"}),s.html(r),n.onShowMenu&&(s=n.onShowMenu(o,s)),d.each(n.bindings,function(e,n){d("#"+e,s).bind("click",function(){a(),n(t,f)})}),s.css({left:o[n.eventPosX],top:o[n.eventPosY]}).show(),n.shadow&&c.css({width:s.width(),height:s.height(),left:o.pageX+2,top:o.pageY+2}).show(),d(u).one("click",a),!1}),this},d.contextMenu={defaults:function(e){d.each(e,function(e,n){"object"==typeof n&&t[e]?d.extend(t[e],n):t[e]=n})}}}),$(function(){$("div.contextMenu").hide()});
//# sourceMappingURL=jquery.contextmenu.js.map