/**
 * @license OData plugin for Free-jqGrid
 *
 * Copyright (c) 2014-2017, Mark Babayev (https://github.com/mirik123) markolog@gmail.com
 * License MIT (MIT-LICENSE.txt)
 *
 * inspired by Richard Bennett gist code: jqGrid.ODataExtensions.js
 * https://gist.github.com/dealproc/6678280
 */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery","free-jqgrid/grid.base"],a):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b||window)),require("free-jqgrid/grid.base"),a(c),c}:a(jQuery)}(function(a){"use strict";a.jgrid.odataHelper={resolveJsonReferences:function(a,b){function c(a,g,h){if("object"!=typeof a||!a)return a;if("[object Array]"===Object.prototype.toString.call(a)){for(d=0;d<a.length;d++){if("object"!=typeof a[d]||!a[d])return a[d];a[d].$ref?a[d]=c(a[d],d,a):a[d]=c(a[d],g,a)}return a}if(a.$ref)return e=a.$ref,f[e]?f[e]:void b.push([h,g,e]);if(a.$id){var i=a.$id;if(delete a.$id,a.$values)a=a.$values.map(c);else{var j;for(j in a)a.hasOwnProperty(j)&&(a[j]=c(a[j],j,a))}f[i]=a}return a}var d,e,f={};for(b=b||[],"string"==typeof a&&(a=JSON.parse(a)),a=c(a),d=0;d<b.length;d++)e=b[d],e[0][e[1]]=f[e[2]];return a},convertXmlToJson:function(b){var c,d,e,f,g,h,i={};if(!b)return null;if(1===b.nodeType){if(b.attributes.length>0)for(i["@attributes"]={},d=0;d<b.attributes.length;d++)e=b.attributes.item(d),i["@attributes"][e.nodeName]=e.nodeValue}else 3===b.nodeType?i=b.nodeValue:b.nodeType||(i=b);if(b.hasChildNodes&&b.hasChildNodes())for(c=0;c<b.childNodes.length;c++){if(f=b.childNodes.item(c),3===f.nodeType)return f.nodeValue;g=f.nodeName,void 0===i[g]?i[g]=a.jgrid.odataHelper.convertXmlToJson(f):(void 0===i[g].push&&(h=i[g],i[g]=[],i[g].push(h)),i[g].push(a.jgrid.odataHelper.convertXmlToJson(f)))}return a.isEmptyObject(i)?null:i},parseMetadata:function(b,c){function d(b){var c={},d=[],e={},f=a("Schema",b).attr("Namespace")+".";return a("EntityContainer EntitySet",b).each(function(b,e){c[a(e).attr("EntityType").replace(f,"")]=a(e).attr("Name"),d.push(a(e).attr("Name"))}),a("EntityType, ComplexType",b).each(function(){var f,g,h,i,j,k,l,m,n;g=a(this).find("Property,NavigationProperty"),h=a("Key PropertyRef",this),i=h&&h.length>0?h.first().attr("Name"):"",m=a(this).attr("Name"),g&&(f=[],g.each(function(c,e){n={},a.each(e.attributes,function(){n[this.name]=this.value}),j=n.Name===i,l="NavigationProperty"===e.tagName,k="Property"===e.tagName&&a('ComplexType[Name="'+n.Name+'"]',b).length>0,f.push(a.extend({iskey:j,isComplex:k,isNavigation:l,isCollection:a.inArray(n.Name,d)>=0},n))}),c[m]&&(e[c[m]]=f),e[m]=f)}),e}function e(b){var c,d,e,f,g,h,i,j,k,l,m,n,o={},p={},q=[];for(h=0;h<b.EntityContainer.Elements.length;h++)p[b.EntityContainer.Elements[h].Type.ElementType.Definition.Name]=b.EntityContainer.Elements[h].Name,q.push(b.EntityContainer.Elements[h].Name);for(h=0;h<b.SchemaElements.length;h++)if(d=Array.prototype.concat(b.SchemaElements[h].DeclaredProperties,b.SchemaElements[h].NavigationProperties).filter(function(a){return!!a}),e=b.SchemaElements[h].DeclaredKey,f=e&&e.length>0?e[0].Name:"",n=b.SchemaElements[h].Name,d){for(c=[],i=0;i<d.length;i++)g=d[i].Name===f,l=d[i].Type.IsNullable,m=d[i].Type.Definition.Namespace+d[i].Type.Definition.Name,j=!!d[i].Type.Definition.DeclaredProperties,k=!j&&!d[i].Type,c.push({Name:d[i].Name,Type:m,Nullable:l,iskey:g,isComplex:j,isNavigation:k,isCollection:a.inArray(d[i].Name,q)>=0});p[n]&&(o[p[n]]=c),o[n]=c}return o}function f(b){var c,d,e,f,g,h,i,j,k,l,m,n,o={},p={},q=[],r=[],s=[],t=b.dataServices.schema[0],u=t.namespace+".";for(h=0;h<t.entityContainer[0].entitySet.length;h++)p[t.entityContainer[0].entitySet[h].entityType.replace(u,"")]=t.entityContainer[0].entitySet[h].name,q.push(t.entityContainer[0].entitySet[h].name);for(h=0;h<t.complexType.length;h++)s.push(t.complexType[h].name);for(r=Array.prototype.concat(t.entityType,t.complexType).filter(function(a){return!!a}),h=0;h<r.length;h++)if(d=Array.prototype.concat(r[h].property,r[h].navigationProperty).filter(function(a){return!!a}),e=r[h].key,f=e&&e.propertyRef.length>0?e.propertyRef[0].name:"",n=r[h].name,d){for(c=[],i=0;i<d.length;i++)g=d[i].name===f,l="false"!==d[i].nullable,m=d[i].type,j=!!d[i].type&&a.inArray(d[i].type.replace(u,""),s)>=0,k=!d[i].type,c.push({Name:d[i].name,Type:m,Nullable:l,iskey:g,isComplex:j,isNavigation:k,isCollection:a.inArray(d[i].name,q)>=0});p[n]&&(o[p[n]]=c),o[n]=c}return o}var g;switch(c){case"xml":g=d(b);break;case"json":g=e(b);break;case"datajs":g=f(b)}return g},loadError:function(b,c,d){var e=b.status,f=c,g=d;if(!b.responseJSON)if(b.responseXML)b.responseText=b.responseText.replace(/<(\/?)([^:>\s]*:)?([^>]+)>/g,"<$1$3>"),b.responseXML=a.parseXML(b.responseText),b.responseJSON=a.jgrid.odataHelper.convertXmlToJson(b.responseXML);else if(b.responseText)try{b.responseJSON=a.parseJSON(b.responseText)}catch(a){}if(b.responseJSON){var h=b.responseJSON["@odata.error"]||b.responseJSON["odata.error"]||b.responseJSON.error;h&&(h.innererror?h.innererror.internalexception?(f=h.innererror.internalexception.message,g=h.innererror.internalexception.stacktrace||""):(f=h.innererror.message,g=h.innererror.stacktrace||""):(f=h.message.value||h.message,g=h.stacktrace||""))}else d&&a.isPlainObject(d)&&(f=d.message,g=d.stack,e=d.code);var i="<div>Status/error code: "+e+"</div><div>Message: "+f+'</div><div style="font-size: 0.8em;">'+g+"</div><br/>";return i}},a.jgrid.cmTemplate.odataComplexType={editable:!1,formatter:function(b,c,d){return a(this).jqGrid("odataJson",b,c,d)}},a.jgrid.cmTemplate.odataNavigationProperty={editable:!1,formatter:function(b,c,d){return c.colModel.odata.expand&&"link"!==c.colModel.odata.expand?"json"===c.colModel.odata.expand?a(this).jqGrid("odataJson",b,c,d):"subgrid"===c.colModel.odata.expand?a(this).jqGrid("odataSubgrid",b,c,d):void 0:a(this).jqGrid("odataLink",b,c,d)}},a.jgrid.cmTemplate["Edm.GeographyPoint"]={editable:!1,formatter:function(b,c,d){if(!b&&"xml"===this.p.datatype){var e=a(d).filter(function(){return this.localName.toLowerCase()===c.colModel.name.toLowerCase()});b=a.jgrid.odataHelper.convertXmlToJson(e[0])}return b.crs&&b.coordinates?a.jgrid.format("<div>{0}</div><div>[{1},{2}]</div>",b.crs.properties.name,b.coordinates[0],b.coordinates[1]):a.jgrid.format("<div>{0}</div>",b)}},a.jgrid.extend({odataLink:function(b,c,d){var e,f,g=this[0].p;if("xml"!==g.datatype){if(d[c.colModel.name+"@odata.navigationLink"])return e=d[c.colModel.name+"@odata.navigationLink"],f=a.jgrid.format('<a href="{0}/{1}" target="_self">{2}</a>',g.odata.baseUrl,e,c.colModel.name);e=d[g.jsonReader.id]}else e=function(b){return a(d).filter(function(){return this.localName&&this.localName.toLowerCase()===b}).text()}(g.xmlReader.id.toLowerCase());return f=g.odata.iscollection?a.jgrid.format('<a href="{0}({1})/{2}" target="_self">{2}</a>',g.url,e,c.colModel.name):a.jgrid.format('<a href="{0}/{1}" target="_self">{1}</a>',g.url,c.colModel.name)},odataJson:function(b,c,d){var e,f,g=this[0].p,h={};if("xml"===g.datatype){var i=a(d).filter(function(){return this.localName.toLowerCase()===c.colModel.name.toLowerCase()});b=a.jgrid.odataHelper.convertXmlToJson(i[0])}for(e in b)b.hasOwnProperty(e)&&e&&e.indexOf("@odata.")<0&&e.indexOf("@attributes")<0&&(h[e]=b[e]);return f=JSON.stringify(h,null,1)},odataSubgrid:function(b,c,d){var e,f,g,h=this[0].p;f="xml"!==h.datatype?d[h.jsonReader.id]:function(b){return a(d).filter(function(){return this.localName&&this.localName.toLowerCase()===b}).text()}(h.xmlReader.id.toLowerCase());for(e in h._index)if(h._index.hasOwnProperty(e)&&e&&f===h._index[e].toString()){f=e;break}var i='\'$("#{2}").jqGrid("setGridParam", { odata: {activeEntitySet: "{1}" } });$("#{2}").jqGrid("expandSubGridRow", "{0}");return false;\'';return g='<a style="cursor:pointer" data-id="{0}" onclick='+i+">{1}</a>",g=a.jgrid.format(g,f,c.colModel.name,c.gid)},parseColumns:function(b,c){var d,e,f,g,h,i,j,k,l=0,m=[],n="Edm.Int16,Edm.Int32,Edm.Int64",o="Edm.Decimal,Edm.Double,Edm.Single",p="Edm.Byte,Edm.SByte";for(l=0;l<b.length;l++)d=n.indexOf(b[l].Type)>=0,e=o.indexOf(b[l].Type)>=0,g=p.indexOf(b[l].Type)>=0,f=b[l].Type&&b[l].Type.indexOf("Edm.")>=0&&(b[l].Type.indexOf("Date")>=0||b[l].Type.indexOf("Time")>=0),h=a.jgrid.cmTemplate[b[l].Type]?b[l].Type:b[l].isComplex?"odataComplexType":b[l].isNavigation?"odataNavigationProperty":d?"integerStr":e?"numberStr":g?"booleanCheckbox":"text",i={integer:d,number:e,date:f,required:!b[l].Nullable||"false"===b[l].Nullable},j=d?"integer":e?"number":f?"datetime":g?"checkbox":"text",k=b[l].isNavigation||b[l].isComplex?'<span class="ui-icon ui-icon-arrowreturn-1-s" style="display:inline-block;vertical-align:middle;"></span>'+b[l].Name:b[l].Name,m.push(a.extend({label:k,name:b[l].Name,index:b[l].Name,editable:!b[l].isNavigation&&!b[l].iskey,searchrules:i,editrules:i,searchtype:j,inputtype:j,edittype:j,key:b[l].iskey,odata:{expand:b[l].isNavigation?c:b[l].isComplex?"json":null,isnavigation:b[l].isNavigation,iscomplex:b[l].isComplex,iscollection:b[l].isCollection}},a.jgrid.cmTemplate[h]));return m},odataInit:function(b){function c(b,c,d,e){var f,g;if(c&&(d||"nu"===e||"nn"===e)){if(d)for(f=0;f<b.colModel.length;f++)if(g=b.colModel[f],g.name===c){if(g.odata.nosearch)return;if(g.odata.unformat&&(c=a.isFunction(g.odata.unformat)?g.odata.unformat(c,d,e):g.odata.unformat,!c))return;g.searchrules&&(g.searchrules.integer||g.searchrules.number||g.searchrules.date)?g.searchrules&&g.searchrules.date&&(d=new Date(d).toISOString()):d="'"+d+"'";break}switch(e){case"in":case"cn":return"indexof("+c+",tolower("+d+")) gt -1";case"ni":case"nc":return"indexof("+c+",tolower("+d+")) eq -1";case"bw":return"startswith("+c+","+d+") eq true";case"bn":return"startswith("+c+","+d+") eq false";case"ew":return"endswith("+c+","+d+") eq true";case"en":return"endswith("+c+","+d+") eq false";case"nu":return c+" eq null";case"nn":return c+" ne null";default:return c+" "+e+" "+d}}}function d(a,b){var e,f,g,h="";if(a.groups&&a.groups.length){for(e=0;e<a.groups.length;e++)h+="("+d(a.groups[e],b)+")",e<a.groups.length-1&&(h+=" "+a.groupOp.toLowerCase()+" ");a.rules&&a.rules.length&&(h+=" "+a.groupOp.toLowerCase()+" ")}if(a.rules.length)for(e=0;e<a.rules.length;e++)f=a.rules[e],g=c(b,f.field,f.data,f.op),g&&(h+=g+" "+a.groupOp.toLowerCase()+" ");return h=h.trim().replace(/\s(and|or)$/,"").trim()}function e(b,e,f){var g={};if(!b.odata.iscollection)return!e.version||e.version<4?g.$format="xml"===e.datatype?"atom":"application/json;odata=fullmetadata":g.$format="xml"===e.datatype?"atom":"application/json;odata.metadata=full",g;if(g={$top:f.rows,$skip:(parseInt(f.page,10)-1)*b.rowNum},"jsonp"===e.datatype&&(g.$callback=e.callback),!e.version||e.version<4?(g.$inlinecount="allpages",g.$format="xml"===e.datatype?"atom":"application/json;odata=fullmetadata"):(g.$count=!0,g.$format="xml"===e.datatype?"atom":"application/json;odata.metadata=full"),f.sidx&&(g.$orderby=f.sidx+" "+f.sord),!f._search)return g;if(f.filters){var h=a.parseJSON(f.filters),i=d(h,b);i.length>0&&(g.$filter=i)}else g.$filter=c(b,f.searchField,f.searchString,f.searchOper);return g}function f(b,c,d,e){var f,g=b.colModel.filter(function(a){return a.name===b.odata.activeEntitySet})[0];e=b._index[e],f=b.odata.iscollection?a.jgrid.format("{0}({1})/{2}",b.url,e,b.odata.activeEntitySet):a.jgrid.format("{0}/{1}",b.url,b.odata.activeEntitySet);var h={datatype:c.datatype,version:c.version,gencolumns:!1,expandable:c.expandable,odataurl:f,errorfunc:c.errorfunc,annotations:c.annotations,entitySet:b.odata.activeEntitySet};a("#"+d).html('<table id="'+d+'_t" class="scroll"></table>'),a("#"+d+"_t").jqGrid({colModel:b.odata.subgridCols[b.odata.activeEntitySet],odata:a.extend({},b.odata,g.odata),loadonce:!0,beforeInitGrid:function(){a(this).jqGrid("odataInit",h)},loadError:function(b,c,d){var e=a.jgrid.odataHelper.loadError(b,c,d);e=a("#errdialog").html()+e,a("#errdialog").html(e).dialog("open")}})}function g(b,c){var d,g={datatype:c.datatype,jsonpCallback:c.callback},h=function(a,d){return f(b,c,a,d)};if(b.odata||(b.odata={iscollection:!0}),a.extend(b,{serializeGridData:function(a){return a=e(b,c,a),this.p.odata.postData=a,a},ajaxGridOptions:g,mtype:"GET",url:c.odataurl},g),b.colModel)for(d=0;d<b.colModel.length;d++)if(b.colModel[d].odata&&"subgrid"===b.colModel[d].odata.expand){b.subGrid=!0,b.subGridRowExpanded=h,b.odata.activeEntitySet=b.colModel[d].name,b.loadonce=!0;break}var i={contentType:"application/"+("jsonp"===c.datatype?"json":c.datatype)+";charset=utf-8",datatype:"jsonp"===c.datatype?"json":c.datatype};b.inlineEditing=a.extend(!0,{beforeSaveRow:function(a,b){return"edit"===a.extraparam.oper?(a.url=c.odataurl,a.mtype=c.odataverbs.inlineEditingEdit,a.url+="("+b+")"):(a.url=c.odataurl,a.mtype=c.odataverbs.inlineEditingAdd),!0},serializeSaveData:function(a){return JSON.stringify(a)},ajaxSaveOptions:i},b.inlineEditing||{}),a.extend(b.formEditing,{onclickSubmit:function(a,d,e){return"add"===e?(a.url=c.odataurl,a.mtype=c.odataverbs.formEditingAdd):"edit"===e&&(a.url=c.odataurl+"("+d[b.id+"_id"]+")",a.mtype=c.odataverbs.formEditingEdit),d},ajaxEditOptions:i,serializeEditData:function(a){return JSON.stringify(a)}}),a.extend(b.formDeleting,{url:c.odataurl,mtype:"DELETE",serializeDelData:function(){return""},onclickSubmit:function(a,b){return a.url+="("+b+")",""},ajaxDelOptions:i});var j=b.colModel.filter(function(a){return!!a.key})[0];if(j=j?j.name:b.sortname||"id","xml"===c.datatype){c.annotations&&a.extend(!0,b,{loadBeforeSend:function(a){a.setRequestHeader("Prefer",'odata.include-annotations="*"')}});var k=">feed",l=">entry",m=">content>properties";a.extend(!0,b,{xmlReader:{root:function(c){c=c.childNodes[0],c.innerHTML=c.innerHTML.replace(/<(\/?)([^:>\s]*:)?([^>]+)>/g,"<$1$3>");var d=a(c).attr("m:context");return d&&(b.odata.baseUrl=d.substring(0,d.indexOf("/$metadata")),b.odata.entityType=d.substring(d.indexOf("#")+1).replace("/$entity","")),d=a(c).attr("m:type"),d&&(b.odata.entityType=d.replace("#","")),c},row:function(b){return b="entry"===b.localName?[b]:a(l,b)},cell:function(b){return a(m,b).get(0).childNodes},records:function(b){return a(k+l,b).length},page:function(){var a=b.odata.postData.$skip+b.rowNum;return Math.ceil(a/b.rowNum)},total:function(c){var d=a(k+l,c).length,e=b.odata.postData.$skip+b.rowNum;return Math.ceil(e/b.rowNum)+(d>0?1:0)},repeatitems:!0,userdata:"userdata",id:j}})}else a.extend(!0,b,{jsonReader:{root:function(a){var c=a["@odata.context"];return c&&(b.odata.baseUrl=c.substring(0,c.indexOf("/$metadata")),b.odata.entityType=c.substring(c.indexOf("#")+1).replace("/$entity","")),c=a["@odata.type"],c&&(b.odata.entityType=c.replace("#","")),a.value||[a]},repeatitems:!0,id:j}}),c.annotations?a.extend(!0,b,{loadBeforeSend:function(a){a.setRequestHeader("Prefer",'odata.include-annotations="*"')},jsonReader:{records:function(a){return a[c.annotationName].records},page:function(a){return a[c.annotationName].page},total:function(a){return a[c.annotationName].total},userdata:function(a){return a[c.annotationName].userdata}}}):a.extend(!0,b,{jsonReader:{records:function(a){return a["odata.count"]||a["@odata.count"]},page:function(a){var c;if(a["odata.nextLink"])c=parseInt(a["odata.nextLink"].split("skip=")[1],10);else{c=b.odata.postData.$skip+b.rowNum;var d=a["odata.count"]||a["@odata.count"];c>d&&(c=d)}return Math.ceil(c/b.rowNum)},total:function(a){var c=a["odata.count"]||a["@odata.count"];return Math.ceil(c/b.rowNum)},userdata:"userdata"}})}return this.each(function(){var c=this,d=a(this),e=this.p;if(c.grid&&e){var f=a.extend(!0,{gencolumns:!1,odataurl:e.url,datatype:"json",entitySet:null,annotations:!1,annotationName:"@jqgrid.GridModelAnnotate",odataverbs:{inlineEditingAdd:"POST",inlineEditingEdit:"PATCH",formEditingAdd:"POST",formEditingEdit:"PUT"}},b||{});if("jsonp"===f.datatype&&(f.callback="jsonpCallback"),!f.entitySet)return void(a.isFunction(f.errorfunc)&&f.errorfunc({},"entitySet cannot be empty",0));if(f.gencolumns){var h=a.extend(!0,{parsecolfunc:null,parsemetadatafunc:null,successfunc:null,errorfunc:null,async:!1,entitySet:null,metadatatype:b.datatype||"xml",metadataurl:(b.odataurl||e.url)+"/$metadata"},b||{});h.async&&(h.successfunc=function(){c.grid.hDiv&&(c.grid.hDiv.loading=!1),d.jqGrid("setGridParam",{datatype:f.datatype}).trigger("reloadGrid")},c.grid.hDiv&&(c.grid.hDiv.loading=!0)),d.jqGrid("odataGenColModel",h)}g(e,f)}})},odataGenColModel:function(b){var c,d,e=this[0],f=e.p,g=a(e),h=a.extend(!0,{parsecolfunc:null,parsemetadatafunc:null,successfunc:null,errorfunc:null,entitySet:null,metadataurl:f.url+"/$metadata",metadatatype:"xml",expandable:"link",async:!1},b||{});return"jsonp"===h.metadatatype&&(h.callback="jsonpCallback"),h.entitySet?(a.ajax({url:h.metadataurl,type:"GET",dataType:h.metadatatype,jsonpCallback:h.callback,async:h.async,cache:!1}).done(function(b,e,i){var j=0,k=0,l=0;if("json"!==h.metadatatype&&"jsonp"!==h.metadatatype||(b=a.jgrid.odataHelper.resolveJsonReferences(b)),c=g.triggerHandler("jqGridODataParseMetadata",b),!c&&a.isFunction(h.parsemetadatafunc)&&(c=h.parsemetadatafunc(b,e,i)),c)d=c;else if(c=a.jgrid.odataHelper.parseMetadata(b,h.metadatatype),c&&(d=g.triggerHandler("jqGridODataParseColumns",[h,c]),!d&&a.isFunction(h.parsecolfunc)&&(d=h.parsecolfunc(h,c)),!d)){d={};for(j in c)c.hasOwnProperty(j)&&j&&(d[j]=g.jqGrid("parseColumns",c[j],h.expandable))}if(d){for(l in d)if(d.hasOwnProperty(l)&&l)for(j=0;j<f.colModel.length;j++)for(k=0;k<d[l].length;k++)if(d[l][k].name===f.colModel[j].name){a.extend(!0,d[l][k],f.colModel[j]);break}f.colModel=d[h.entitySet],f.colModel||a.isFunction(h.errorfunc)&&h.errorfunc({data:b,status:e,xhr:i},"EntitySet "+h.entitySet+" is not found"),f.odata||(f.odata={iscollection:!0}),f.odata.subgridCols=d,a.isFunction(h.successfunc)&&h.successfunc()}else a.isFunction(h.errorfunc)&&h.errorfunc({data:b,status:e,xhr:i},"parse $metadata error")}).fail(function(b,c,d){if(a.isFunction(h.errorfunc)){var e=a.jgrid.odataHelper.loadError(b,c,d);h.errorfunc({xhr:b,error:c,code:d},e)}}),d):void(a.isFunction(h.errorfunc)&&h.errorfunc({},"entitySet cannot be empty",0))}})});
//# sourceMappingURL=grid.odata.js.map