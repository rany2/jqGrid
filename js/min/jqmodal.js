!function(e,o){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(t){return o(t,e.document)}):"object"==typeof module&&module.exports?module.exports=function(t,e){return t=t||window,void 0===e&&(e="undefined"!=typeof window?require("jquery"):require("jquery")(t)),o(e,t.document),e}:o(jQuery,e.document)}("undefined"!=typeof window?window:this,function(a,e){"use strict";function d(t){h(t)}function o(t){function e(){var o=!1;return a(".jqmID"+n.s).each(function(){var t=a(this),e=t.offset();if(e.top<=r&&r<=e.top+t.height()&&e.left<=s&&s<=e.left+t.width())return!(o=!0)}),o}var n=c[f[f.length-1]],o=!a(t.target).parents(".jqmID"+n.s)[0],i=a(t.target).offset(),s=void 0!==t.pageX?t.pageX:i.left,r=void 0!==t.pageY?t.pageY:i.top;return!("mousedown"===t.type||!e())||("mousedown"===t.type&&(o=o&&(!e()&&o))&&!a(t.target).is(":input")&&h(n),!o)}function u(t){a(e)[t]("keypress keydown mousedown",o)}function n(t,e,o){return t.each(function(){var t=this._jqm;a(e).each(function(){this[o]||(this[o]=[],a(this).click(function(){for(var t,e,o=["jqmShow","jqmHide"],n=0;n<o.length;n++)for(e in this[t=o[n]])this[t].hasOwnProperty(e)&&c[this[t][e]]&&c[this[t][e]].w[t](this);return!1})),this[o].push(t)})})}var c,i=0,f=[],h=function(t){try{a(":input:visible",t.w).first().focus()}catch(t){}};a.fn.jqm=function(t){var e={overlay:50,closeoverlay:!1,overlayClass:"jqmOverlay",closeClass:"jqmClose",trigger:".jqModal",ajax:!1,ajaxText:"",target:!1,modal:!1,toTop:!1,onShow:!1,onHide:!1,onLoad:!1};return this.each(function(){if(this._jqm)return c[this._jqm].c=a.extend({},c[this._jqm].c,t),c[this._jqm].c;i++,this._jqm=i,c[i]={c:a.extend(e,a.jqm.params,t),a:!1,w:a(this).addClass("jqmID"+i),s:i},e.trigger&&a(this).jqmAddTrigger(e.trigger)})},a.fn.jqmAddClose=function(t){return n(this,t,"jqmHide")},a.fn.jqmAddTrigger=function(t){return n(this,t,"jqmShow")},a.fn.jqmShow=function(t){return this.each(function(){a.jqm.open(this._jqm,t)})},a.fn.jqmHide=function(t){return this.each(function(){a.jqm.close(this._jqm,t)})},a.jqm={hash:{},open:function(t,e){var o=c[t],n=o.c,i=(o.w.parent().offset(),"."+n.closeClass),s=0<(s=parseInt(o.w.css("z-index"),10))?s:3e3,r=a("<div></div>").css({height:"100%",width:"100%",position:"fixed",left:0,top:0,"z-index":s-1,opacity:n.overlay/100});return o.a||(o.t=e,o.a=!0,o.w.css("z-index",s),a(o.w[0].ownerDocument).data("ui-dialog-overlays")&&o.w.addClass("ui-dialog"),n.modal?(f[0]||setTimeout(function(){u("bind")},1),f.push(t)):0<n.overlay?n.closeoverlay&&o.w.jqmAddClose(r):r=!1,o.o=!!r&&r.addClass(n.overlayClass).prependTo("body"),n.ajax?(s=n.target||o.w,t=n.ajax,s="string"==typeof s?a(s,o.w):a(s),t="@"===t.substr(0,1)?a(e).attr(t.substring(1)):t,s.html(n.ajaxText).load(t,function(){n.onLoad&&n.onLoad.call(this,o),i&&o.w.jqmAddClose(a(i,o.w)),d(o)})):i&&o.w.jqmAddClose(a(i,o.w)),n.toTop&&o.o&&(r=o.w.parent().offset(),e=parseFloat(o.w.css("left")||0),s=parseFloat(o.w.css("top")||0),o.w.before('<span id="jqmP'+o.w[0]._jqm+'"></span>').insertAfter(o.o),o.w.css({top:r.top+s,left:r.left+e})),n.onShow?n.onShow(o):o.w.show(),d(o)),!1},close:function(t){t=c[t];return t.a&&(t.a=!1,f[0]&&(f.pop(),f[0]||u("unbind")),t.c.toTop&&t.o&&a("#jqmP"+t.w[0]._jqm).after(t.w).remove(),t.c.onHide?t.c.onHide(t):(t.w.hide(),t.o&&t.o.remove())),!1},params:{}},c=a.jqm.hash});
//# sourceMappingURL=jqmodal.js.map