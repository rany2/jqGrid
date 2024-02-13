!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery","./grid.base"],i):"object"==typeof module&&module.exports?module.exports=function(e,t){return e=e||window,void 0===t&&(t="undefined"!=typeof window?require("jquery"):require("jquery")(e)),require("./grid.base"),i(t),t}:i(jQuery)}(function(w){"use strict";w.jgrid=w.jgrid||{};function p(e,t){var i=e.formatoptions||{};return(i.hasOwnProperty(t)?i:e.editoptions||{})[t]}function j(e){return String(e).replace(/\'/g,"&#39;")}function r(e){function t(e){return p(o,e)}function i(e){return"<i class='"+j(e)+"'"+a+"></i>"}var r,n,o=e.colModel||e.cm,a=!1!==o.title?" title='"+j(e.colName||o.name)+"'":"",e=t("checkedClass"),l=t("uncheckedClass"),s="string"==typeof(c=t("value"))&&c.split(":")[0]||"Yes",c="string"==typeof c&&c.split(":")[1]||"No",u=t("disabled"),d=(void 0===u&&(u=y.formatter.checkbox.disabled),h.getIconRes.call(this,"checkbox.checked")),f=h.getIconRes.call(this,"checkbox.checkedClasses"),m=h.getIconRes.call(this,"checkbox.unchecked");return!0===u&&(e||l||d||m)?(r=i(e||d),n=i(l||m),e=f||e||d):(r="<input type='checkbox' checked='checked'"+(a+=!(e="")===u?" disabled='disabled'":"")+" />",n="<input type='checkbox'"+a+" />"),{checkedClasses:e,checked:r,unchecked:n,yes:s,no:c}}function x(e,t,i,r,n){var o=t;i=w.extend({},C.call(w(this),"formatter"),i);try{o=w.fn.fmatter[e].call(this,t,i,r,n)}catch(e){}return o}function n(e,t,i){return void 0!==e&&!k.isEmpty(e)||(e=i=void 0===(i=p(i,"defaultValue"))?t.no:i),e=String(e).toLowerCase(),o[e]||e===t.yes.toLowerCase()?t.checked:t.unchecked}function a(e,t){return e=t.prefix?t.prefix+e:e,t.suffix?e+t.suffix:e}function i(e,t,i){var r=t.colModel,t=w.extend({},t[i]);return null!=r&&(t=w.extend({},t,r.formatoptions||{})),k.isEmpty(e)?a(t.defaultValue,t):a(k.NumberFormat(e,t),t)}function t(e,t){var i=e.colModel,r=w.extend({},e[t]),n=(null!=i&&(r=w.extend({},r,i.formatoptions||{})),k.NumberFormat),o=r.defaultValue?a(r.defaultValue,r):"";return function(e){return k.isEmpty(e)?o:a(n(e,r),r)}}var y=w.jgrid,C=y.getMethod("getGridRes"),h=w.fn.jqGrid,k=(w.fmatter=w.fmatter||{},w.fmatter),o={1:1,x:1,true:1,yes:1,y:1,on:1},l={0:1,false:1,no:1,n:1,off:1},g=(w.extend(!0,y,{formatter:{date:{parseRe:/[#%\\\/:_;.,\t\s\-]/,masks:{ISO8601Long:"Y-m-d H:i:s",ISO8601Short:"Y-m-d",SortableDateTime:"Y-m-d\\TH:i:s",UniversalSortableDateTime:"Y-m-d H:i:sO"},reformatAfterEdit:!0,userLocalTime:!1},baseLinkUrl:"",showAction:"",target:"",checkbox:{disabled:!0,defaultValue:!1},idName:"id"},cmTemplate:{integerStr:{formatter:"integer",align:"right",sorttype:"integer",searchoptions:{sopt:["eq","ne","lt","le","gt","ge"]}},integer:{formatter:"integer",align:"right",sorttype:"integer",convertOnSave:function(e){e=e.newValue;return isNaN(e)?e:parseInt(e,10)},searchoptions:{sopt:["eq","ne","lt","le","gt","ge"]}},numberStr:{formatter:"number",align:"right",sorttype:"number",searchoptions:{sopt:["eq","ne","lt","le","gt","ge"]}},number:{formatter:"number",align:"right",sorttype:"number",convertOnSave:function(e){e=e.newValue;return isNaN(e)?e:parseFloat(e)},searchoptions:{sopt:["eq","ne","lt","le","gt","ge"]}},booleanCheckbox:{align:"center",formatter:"checkbox",sorttype:"boolean",edittype:"checkbox",editoptions:{value:"true:false",defaultValue:"false"},convertOnSave:function(e){var t=e.newValue,e=r.call(this,e),i=String(t).toLowerCase();return o[i]||i===e.yes.toLowerCase()?t=!0:!l[i]&&i!==e.no.toLowerCase()||(t=!1),t},stype:"checkbox",searchoptions:{sopt:["eq"],value:"true:false"}},actions:function(){return{formatter:"actions",width:(null!=this.p&&(h.isInCommonIconClass.call(this,"fa")||h.isInCommonIconClass.call(this,"glyphicon"))?w(this).jqGrid("isBootstrapGuiStyle")?45:39:40)+(y.cellWidth()?5:0),align:"center",label:"",autoResizable:!1,title:!1,frozen:!0,fixed:!0,hidedlg:!0,resizable:!1,sortable:!1,search:!1,editable:!1,viewable:!1}}}}),y.cmTemplate.booleanCheckboxFa=y.cmTemplate.booleanCheckbox,w.extend(k,{isObject:function(e){return e&&("object"==typeof e||w.jgrid.isFunction(e))||!1},isNumber:function(e){return"number"==typeof e&&isFinite(e)},isValue:function(e){return this.isObject(e)||"string"==typeof e||this.isNumber(e)||"boolean"==typeof e},isEmpty:function(e){return!("string"!=typeof e&&this.isValue(e)||this.isValue(e)&&""!==w.jgrid.trim(e).replace(/&nbsp;/gi,"").replace(/&#160;/gi,""))},NumberFormat:function(e,t){var i=k.isNumber;if(i(e)||(e*=1),i(e)){var r=e<0,n=String(e),o=t.decimalSeparator||".";if(i(t.decimalPlaces)){var a=t.decimalPlaces,l=(n=String(Number(Math.round(e+"e"+a)+"e-"+a))).lastIndexOf(".");if(0<a)for(l<0?l=(n+=o).length-1:"."!==o&&(n=n.replace(".",o));n.length-1-l<a;)n+="0"}if(t.thousandsSeparator){for(var s=t.thousandsSeparator,c=(l=-1<(l=n.lastIndexOf(o))?l:n.length,void 0===t.decimalSeparator?"":n.substring(l)),u=-1,d=l;0<d;d--)++u%3==0&&d!==l&&(!r||1<d)&&(c=s+c),c=n.charAt(d-1)+c;n=c}return n}return e}}),(w.fn.fmatter=x).getCellBuilder=function(e,t,i){e=null!=w.fn.fmatter[e]?w.fn.fmatter[e].getCellBuilder:null;return w.jgrid.isFunction(e)?e.call(this,w.extend({},C.call(w(this),"formatter"),t),i):null},x.defaultFormat=function(e,t){return k.isValue(e)&&""!==e?e:t.defaultValue||"&#160;"});x.email=function(e,t){return k.isEmpty(e)?g(e,t):"<a href='mailto:"+j(e)+"'>"+e+"</a>"},(x.checkbox=function(e,t){var i=r.call(this,t);return n(e,i,t.colModel)}).getCellBuilder=function(e){var t,i=e.colModel;return e.colName=e.colName||this.p.colNames[e.pos],t=r.call(this,e),function(e){return n(e,t,i)}},x.checkbox.unformat=function(e,t,i){t=r.call(this,t),i=w(i);return(t.checkedClasses?y.hasAllClasses(i.children("i,svg"),t.checkedClasses):i.children("input").is(":checked"))?t.yes:t.no},(x.checkboxFontAwesome4=x.checkbox).getCellBuilder=x.checkbox.getCellBuilder,x.checkboxFontAwesome4.unformat=x.checkbox.unformat,x.link=function(e,t){var i=t.colModel,r="",t={target:t.target};return(t=null!=i?w.extend({},t,i.formatoptions||{}):t).target&&(r="target="+t.target),k.isEmpty(e)?g(e,t):"<a "+r+" href='"+j(e)+"'>"+e+"</a>"},(x.showlink=function(t,i,r){function e(e){return w.jgrid.isFunction(e)?e.call(a,{cellValue:t,rowid:i.rowId,rowData:r,options:s}):e||""}var n,o,a=this,l=i.colModel,s={baseLinkUrl:i.baseLinkUrl,showAction:i.showAction,addParam:i.addParam||"",target:i.target,idName:i.idName,hrefDefaultValue:"#"},c="";return(s=null!=l?w.extend({},s,l.formatoptions||{}):s).target&&(c="target="+e(s.target)),l=e(s.baseLinkUrl)+e(s.showAction),n=s.idName?encodeURIComponent(e(s.idName))+"="+encodeURIComponent(e(s.rowId)||i.rowId):"","object"==typeof(o=e(s.addParam))&&null!==o&&(o=(n?"&":"")+w.param(o)),""===(l+=n||o?"?"+n+o:"")&&(l=e(s.hrefDefaultValue)),"string"==typeof t||k.isNumber(t)||w.jgrid.isFunction(s.cellValue)?"<a "+c+" href='"+j(l)+"'>"+(w.jgrid.isFunction(s.cellValue)?e(s.cellValue):t)+"</a>":g(t,s)}).getCellBuilder=function(e){var c={baseLinkUrl:e.baseLinkUrl,showAction:e.showAction,addParam:e.addParam||"",target:e.target,idName:e.idName,hrefDefaultValue:"#"},e=e.colModel;return null!=e&&(c=w.extend({},c,e.formatoptions||{})),function(t,e,i){function r(e){return w.jgrid.isFunction(e)?e.call(a,{cellValue:t,rowid:l,rowData:i,options:c}):e||""}var n,o,a=this,l=e.rowId,s="";return c.target&&(s="target="+r(c.target)),n=r(c.baseLinkUrl)+r(c.showAction),e=c.idName?encodeURIComponent(r(c.idName))+"="+encodeURIComponent(r(l)||e.rowId):"","object"==typeof(o=r(c.addParam))&&null!==o&&(o=(e?"&":"")+w.param(o)),""===(n+=e||o?"?"+e+o:"")&&(n=r(c.hrefDefaultValue)),"string"==typeof t||k.isNumber(t)||w.jgrid.isFunction(c.cellValue)?"<a "+s+" href='"+j(n)+"'>"+(w.jgrid.isFunction(c.cellValue)?r(c.cellValue):t)+"</a>":g(t,c)}},x.showlink.pageFinalization=function(e){function t(e){var t=(i=w(this).closest("tr.jqgrow>td")).parent(),i=i[0].cellIndex,r=o.colModel[i];if(0<t.length)return r.formatoptions.onClick.call(n[0],{iCol:i,iRow:t[0].rowIndex,rowid:t.attr("id"),cm:r,cmName:r.name,cellValue:w(this).text(),a:this,event:e})}var i,r,n=w(this),o=this.p,a=o.colModel[e],l=o.autoResizing.wrapperClassName,s=this.rows,c=s.length;if(null!=a.formatoptions&&w.jgrid.isFunction(a.formatoptions.onClick))for(i=0;i<c;i++)r=s[i],w(r).hasClass("jqgrow")&&(r=r.cells[e],null!=(r=a.autoResizable&&null!=r&&w(r.firstChild).hasClass(l)?r.firstChild:r))&&w(r.firstChild).on("click",t)},x.integer=function(e,t){return i(e,t,"integer")},x.number=function(e,t){return i(e,t,"number")},x.currency=function(e,t){return i(e,t,"currency")};x.integer.getCellBuilder=function(e){return t(e,"integer")},x.number.getCellBuilder=function(e){return t(e,"number")},x.currency.getCellBuilder=function(e){return t(e,"currency")},(x.date=function(e,t,i,r){var n=t.colModel,t=w.extend({},t.date);return!(t=null!=n?w.extend({},t,n.formatoptions||{}):t).reformatAfterEdit&&"edit"===r||k.isEmpty(e)?g(e,t):y.parseDate.call(this,t.srcformat,e,t.newformat,t)}).getCellBuilder=function(e,t){var i=w.extend({},e.date),r=(null!=e.colModel&&(i=w.extend({},i,e.colModel.formatoptions||{})),y.parseDate),n=i.srcformat,o=i.newformat;return i.reformatAfterEdit||"edit"!==t?function(e){return k.isEmpty(e)?g(e,i):r.call(this,n,e,o,i)}:function(e){return g(e,i)}},(x.select=function(e,t){var i,r=[],t=t.colModel,n=w.extend({},t.editoptions||{},t.formatoptions||{}),o="function"==typeof n.value?n.value():n.value,a=n.separator||":",t=n.delimiter||";";if(o){var l,s=!0===n.multiple,c=[],u=function(e,t){if(0<t)return e};if(s&&(c=w.map(String(e).split(","),function(e){return w.jgrid.trim(e)})),"string"==typeof o){for(var d,f=o.split(t),m=0;m<f.length;m++)if(2<(l=f[m].split(a)).length&&(l[1]=w.map(l,u).join(a)),d=w.jgrid.trim(l[0]),n.defaultValue===d&&(i=l[1]),s)-1<w.inArray(d,c)&&r.push(l[1]);else if(d===w.jgrid.trim(e)){r=[l[1]];break}}else k.isObject(o)&&(i=o[n.defaultValue],r=s?w.map(c,function(e){return o[e]}):[void 0===o[e]?"":o[e]])}return""!==(e=r.join(", "))?e:void 0!==n.defaultValue?i:g(e,n)}).getCellBuilder=function(e){function t(e,t){if(0<t)return e}var n,i,r,o,e=e.colModel,a=x.defaultFormat,l=w.extend({},e.editoptions||{},e.formatoptions||{}),e="function"==typeof l.value?l.value():l.value,s=l.separator||":",c=l.delimiter||";",u=void 0!==l.defaultValue,d=!0===l.multiple,f={};if("string"==typeof e)for(o=(r=e.split(c)).length-1;0<=o;o--)2<(i=r[o].split(s)).length&&(i[1]=w.map(i,t).join(s)),f[w.jgrid.trim(i[0])]=i[1];else{if(!k.isObject(e))return function(e){return e?String(e):a(e,l)};f=e}return u&&(n=f[l.defaultValue]),d?function(e){for(var t=[],i=w.map(String(e).split(","),function(e){return w.jgrid.trim(e)}),r=0;r<i.length;r++)e=i[r],f.hasOwnProperty(e)&&t.push(f[e]);return""!==(e=t.join(", "))?e:u?n:a(e,l)}:function(e){var t=f[String(e)];return""!==t&&void 0!==t?t:u?n:a(e,l)}},x.rowactions=function(e,t){var i,r,n,o,a=w(this).closest("tr.jqgrow>td"),l=a.parent(),s=l.attr("id"),c=w(this).closest("table.ui-jqgrid-btable").attr("id").replace(/_frozen([^_]*)$/,"$1"),u=w("#"+y.jqID(c)),d=u[0],c=d.p,f=y.getRelativeRect.call(d,l).top,a=c.colModel[a[0].cellIndex],m=w.extend(!0,{extraparam:{}},y.actionsNav||{},c.actionsNavOptions||{},a.formatoptions||{});switch(void 0!==c.editOptions&&(m.editOptions=w.extend(!0,m.editOptions||{},c.editOptions)),void 0!==c.delOptions&&(m.delOptions=c.delOptions),l.hasClass("jqgrid-new-row")&&(m.extraparam[c.prmNames.oper]=c.prmNames.addoper),o={keys:m.keys,oneditfunc:m.onEdit,successfunc:m.onSuccess,url:m.url,extraparam:m.extraparam,aftersavefunc:m.afterSave,errorfunc:m.onError,afterrestorefunc:m.afterRestore,restoreAfterError:m.restoreAfterError,mtype:m.mtype},!c.multiselect&&s!==c.selrow||c.multiselect&&w.inArray(s,c.selarrrow)<0?u.jqGrid("setSelection",s,!0,e):y.fullBoolFeedback.call(d,"onSelectRow","jqGridSelectRow",s,!0,e),t){case"edit":u.jqGrid("editRow",s,o);break;case"save":u.jqGrid("saveRow",s,o);break;case"cancel":u.jqGrid("restoreRow",s,m.afterRestore);break;case"del":m.delOptions=m.delOptions||{},void 0===m.delOptions.top&&(m.delOptions.top=f),u.jqGrid("delGridRow",s,m.delOptions);break;case"formedit":m.editOptions=m.editOptions||{},void 0===m.editOptions.top&&(m.editOptions.top=f,m.editOptions.recreateForm=!0),u.jqGrid("editGridRow",s,m.editOptions);break;default:if(null!=m.custom&&0<m.custom.length)for(r=m.custom.length,i=0;i<r;i++)(n=m.custom[i]).action===t&&w.jgrid.isFunction(n.onClick)&&n.onClick.call(d,{rowid:s,event:e,action:t,options:n})}return e.stopPropagation&&e.stopPropagation(),!1},(x.actions=function(e,t,i,r){var n,o,a,l,s,c,u=t.rowId,d="",f=w(this),m={},p=C.call(f,"edit")||{},h=w.extend({editbutton:!0,delbutton:!0,editformbutton:!1,commonIconClass:"ui-icon",editicon:"ui-icon-pencil",delicon:"ui-icon-trash",saveicon:"ui-icon-disk",cancelicon:"ui-icon-cancel",savetitle:p.bSubmit||"",canceltitle:p.bCancel||""},C.call(f,"nav")||{},y.nav||{},this.p.navOptions||{},C.call(f,"actionsNav")||{},y.actionsNav||{},this.p.actionsNavOptions||{},(t.colModel||{}).formatoptions||{}),g=function(e){return y.mergeCssClasses(h.commonIconClass,h[e+"icon"])},v=[{action:"edit",actionName:"formedit",display:h.editformbutton},{action:"edit",display:!h.editformbutton&&h.editbutton},{action:"del",idPrefix:"Delete",display:h.delbutton},{action:"save",display:h.editformbutton||h.editbutton,hidden:!0},{action:"cancel",display:h.editformbutton||h.editbutton,hidden:!0}],b=null!=h.custom?h.custom.length-1:-1;if(void 0===u||k.isEmpty(u))return"";if(w.jgrid.isFunction(h.isDisplayButtons))try{m=h.isDisplayButtons.call(this,h,i,r)||{}}catch(e){}for(;0<=b;)v["first"===(o=h.custom[b--]).position?"unshift":"push"](o);for(n=0,b=v.length;n<b;n++)!1!==(a=w.extend({},v[n],m[v[n].action]||{})).display&&(d+=(c=s=l=void 0,l=(a=a).action,s=a.actionName||l,c=void 0!==a.idPrefix?a.idPrefix:l.charAt(0).toUpperCase()+l.substring(1),"<div title='"+j(h[l+"title"])+(a.hidden?"' style='display:none;":"")+"' class='"+j(f.jqGrid("getGuiStyles","actionsButton","ui-pg-div ui-inline-"+l))+"' "+(null!==c?"id='j"+j(c+"Button_"+u):"")+"' data-jqactionname=\""+s+'" '+(a.noHovering?"":'\' data-jqhovering="1" ')+"><span class='"+j(g(l))+"'></span></div>"));return"<div class='"+j(f.jqGrid("getGuiStyles","actionsDiv","ui-jqgrid-actions"))+"'>"+d+"</div>"}).pageFinalization=function(e){function t(e,t){return t=c.jqGrid("getGridRowById",t),v(!0,t),!1}function i(e,t){return t=c.jqGrid("getGridRowById",t),v(!1,t),!1}function r(e,t){null!=(e=t&&null!=e&&w(e.firstChild).hasClass(f)?e.firstChild:e)&&(w(e.firstChild).on("click",y),w(e.firstChild).children("div.ui-pg-div").on("mouseover",b).on("mouseout",j))}function n(e,t){var i=u.iColByName[l];r(t.tr.cells[i],u.colModel[i].autoResizable)}var o,a,l,s,c=w(this),u=this.p,d=u.colModel[e],f=u.autoResizing.wrapperClassName,m=c.jqGrid("getGuiStyles","states.hover"),p=this.rows,h=this.grid.fbRows,g=p.length,v=(s=d.name,function(e,t){for(var i,r=0,n=u.colModel,o=n.length,a=u.iColByName[s],l=0;l<o&&!0===n[l].frozen;l++)r=l;null!=t&&null!=t.cells&&(i=w(t.cells[a]).children(".ui-jqgrid-actions"),n[a].frozen&&u.frozenColumns&&a<=r&&(i=i.add(w(c[0].grid.fbRows[t.rowIndex].cells[a]).children(".ui-jqgrid-actions"))),e?(i.find(">.ui-inline-edit,>.ui-inline-del").show(),i.find(">.ui-inline-save,>.ui-inline-cancel").hide()):(i.find(">.ui-inline-edit,>.ui-inline-del").hide(),i.find(">.ui-inline-save,>.ui-inline-cancel").show()))}),b=function(e){1===w(e.target).closest("div.ui-pg-div").data("jqhovering")&&w(this).addClass(m)},j=function(e){1===w(e.target).closest("div.ui-pg-div").data("jqhovering")&&w(this).removeClass(m)},y=function(e){return x.rowactions.call(this,e,w(e.target).closest("div.ui-pg-div").data("jqactionname"))};l=d.name;for(null!=d.formatoptions&&d.formatoptions.editformbutton||(c.off("jqGridInlineAfterRestoreRow.jqGridFormatter jqGridInlineAfterSaveRow.jqGridFormatter",t),c.on("jqGridInlineAfterRestoreRow.jqGridFormatter jqGridInlineAfterSaveRow.jqGridFormatter",t),c.off("jqGridInlineEditRow.jqGridFormatter",i),c.on("jqGridInlineEditRow.jqGridFormatter",i),c.off("jqGridAfterAddRow.jqGridFormatter",n),c.on("jqGridAfterAddRow.jqGridFormatter",n)),o=0;o<g;o++)a=p[o],w(a).hasClass("jqgrow")&&(r(a.cells[e],d.autoResizable),null!=h)&&null!=h[o]&&r(h[o].cells[e],d.autoResizable)},w.unformat=function(e,t,i,r){var n=t.colModel,o=n.formatter,a=this.p,l=n.formatoptions||{},s=n.unformat||x[o]&&x[o].unformat;if(e instanceof jQuery&&0<e.length&&(e=e[0]),a.treeGrid&&null!=e&&w(e.firstChild).hasClass("tree-wrap")&&(w(e.lastChild).hasClass("cell-wrapper")||w(e.lastChild).hasClass("cell-wrapperleaf"))&&(e=e.lastChild),n.autoResizable&&null!=e&&w(e.firstChild).hasClass(a.autoResizing.wrapperClassName)&&(e=e.firstChild),void 0!==s&&w.jgrid.isFunction(s))f=s.call(this,w(e).text(),t,e);else if(void 0!==o&&"string"==typeof o){var c=w(this),u=function(e,t){return void 0!==l[t]?l[t]:C.call(c,"formatter."+e+"."+t)},d=function(e,t){e=u(e,"thousandsSeparator").replace(/([\.\*\_\'\(\)\{\}\+\?\\])/g,"\\$1");return t.replace(new RegExp(e,"g"),"")};switch(o){case"integer":f=d("integer",w(e).text());break;case"number":f=d("number",w(e).text()).replace(u("number","decimalSeparator"),".");break;case"currency":var f=w(e).text(),m=u("currency","prefix"),p=u("currency","suffix");m&&m.length&&(f=f.substr(m.length)),f=d("number",f=p&&p.length?f.substr(0,f.length-p.length):f).replace(u("number","decimalSeparator"),".");break;case"checkbox":f=x.checkbox.unformat(e,t,e);break;case"select":f=w.unformat.select(e,t,i,r);break;case"actions":return"";default:f=w(e).text()}}return f=void 0!==f?f:!0===r?w(e).text():y.htmlDecode(w(e).html())},w.unformat.select=function(e,t,i,r){var n=[],o=w(e).text(),e=t.colModel;if(!0===r)return o;var t=w.extend({},e.editoptions||{},e.formatoptions||{}),a=void 0===t.separator?":":t.separator,r=void 0===t.delimiter?";":t.delimiter;if(t.value){var l,s="function"==typeof t.value?t.value():t.value,c=!0===t.multiple,u=[],d=function(e,t){if(0<t)return e};if(c&&(u=o.split(","),u=w.map(u,function(e){return w.jgrid.trim(e)})),"string"==typeof s){for(var f=s.split(r),m=0,p=0;p<f.length;p++)if(2<(l=f[p].split(a)).length&&(l[1]=w.map(l,d).join(a)),c)-1<w.inArray(w.jgrid.trim(l[1]),u)&&(n[m]=l[0],m++);else if(w.jgrid.trim(l[1])===w.jgrid.trim(o)){n[0]=l[0];break}}else(k.isObject(s)||Array.isArray(s))&&(c||(u[0]=o),n=w.map(u,function(i){var r;if(w.each(s,function(e,t){if(t===i)return r=e,!1}),void 0!==r)return r}));return n.join(", ")}return o||""},w.unformat.date=function(e,t){t=w.extend(!0,{},C.call(w(this),"formatter.date"),y.formatter.date||{},t.formatoptions||{});return k.isEmpty(e)?"":y.parseDate.call(this,t.newformat,e,t.srcformat,t)}});
//# sourceMappingURL=jquery.fmatter.js.map