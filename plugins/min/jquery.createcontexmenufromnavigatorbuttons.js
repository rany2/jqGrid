/**
 * @license Copyright (c) 2014-2019, Dr. Oleg Kiriljuk, oleg.kiriljuk@ok-soft-gmbh.com
 * Dual licensed under the MIT and GPL licenses
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl-2.0.html
 * Date: 2015-04-06
 * see the answers http://stackoverflow.com/a/8491939/315935
 *             and http://stackoverflow.com/a/29048089/315935
 *             and http://stackoverflow.com/q/29457007/315935
 */
!function(t,n){"use strict";"function"==typeof define&&define.amd?define(["jquery","./jquery.contextmenu-ui","free-jqgrid/grid.base"],function(e){return n(e,t,t.document)}):"object"==typeof module&&module.exports?module.exports=function(e,t){return void 0===t&&(t="undefined"!=typeof window?require("jquery"):require("jquery")(e||window)),require("./jquery.contextmenu-ui"),require("free-jqgrid/grid.base"),n(t,e,e.document),t}:n(jQuery,t,t.document)}("undefined"!=typeof window?window:this,function(l,u,s){"use strict";l.jgrid.extend({createContexMenuFromNavigatorButtons:function(i,r){var o=this,e="menu_"+o[0].id,t=l("<ul>"),n=l("<div>").attr("id",e);t.appendTo(n),n.appendTo("body"),o.contextMenu(e,{bindings:{},onContextMenu:function(e){var t,n=o[0].p,e=l(e.target),i=e.closest("tr.jqgrow").attr("id"),e=e.is(":text:enabled")||e.is("input[type=textarea]:enabled")||e.is("textarea:enabled");return!(!i||e||""!==(e="",u.getSelection?e=u.getSelection():s.getSelection?e=s.getSelection():s.selection&&(e=s.selection.createRange().text),"string"==typeof e?e:e.toString())||(e=l.inArray(i,n.selarrrow),n.selrow!==i&&e<0?o.jqGrid("setSelection",i):n.multiselect&&(t=n.selarrrow[n.selarrrow.length-1],e!==n.selarrrow.length-1)&&(n.selarrrow[n.selarrrow.length-1]=i,n.selarrrow[e]=t,n.selrow=i),0))},onShowMenu:function(e,t){var u=this,s=t.children("ul").first().empty(),n=null!=l.ui&&"string"==typeof l.ui.version?/^([0-9]+)\.([0-9]+)\.([0-9]+)$/.exec(l.ui.version):[],a=null!=n&&4===n.length&&"1"===n[1]&&n[2]<11;return l(i).find(".navtable .ui-pg-button").filter(function(){return!(l(this).prop("disabled")||l(this).hasClass("ui-state-disabled"))}).each(function(){var e,t,n,i,r,o=l(this).children("div.ui-pg-div").first();1===o.length&&(t=o.children(".ui-pg-button-text").html(),n=o.parent(),""===l.jgrid.trim(t)&&(t=n.attr("title")),n=""!==this.id&&""!==t?"menuitem_"+this.id:l.jgrid.randId(),i=l("<li>").attr("id",n),0<(e=o.children("span").not(".ui-pg-button-text").first()).length)&&(a?i.append(l("<a>").html(t).prepend(e.clone().removeClass("ui-pg-button-icon-over-text").css({float:"left",marginTop:e.hasClass("ui-icon")?"0.25em":"0.125em",marginRight:"0.5em"}))):i.html(t).prepend(e.clone().removeClass("ui-pg-button-icon-over-text").css({float:"left",marginTop:e.first().hasClass("ui-icon")?"0.25em":"0.125em",marginRight:"0.5em"})),o.parent().hasClass("ui-state-active")&&i.find("span").addClass("ui-state-active"),0<i.find("select,input").length&&i.hide(),s.append(i),u.bindings[n]=(r=o,function(){r.click()}))}),l.jgrid.fullBoolFeedback.call(o,(r||{}).onShowContextMenu,"jqGridShowContextMenu",s,u),t}})}})});
//# sourceMappingURL=jquery.createcontexmenufromnavigatorbuttons.js.map