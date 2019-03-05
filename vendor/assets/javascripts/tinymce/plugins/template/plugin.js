/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.0.2 (2019-03-05)
 */
!function(){"use strict";var e,t,n,r,a,o=tinymce.util.Tools.resolve("tinymce.PluginManager"),u=function(e){return function(){return e}},i=u(!1),c=u(!0),p=tinymce.util.Tools.resolve("tinymce.util.Tools"),m=tinymce.util.Tools.resolve("tinymce.util.XHR"),l=function(e){return e.getParam("template_cdate_classes","cdate")},s=function(e){return e.getParam("template_mdate_classes","mdate")},f=function(e){return e.getParam("template_selected_content_classes","selcontent")},d=function(e){return e.getParam("template_preview_replace_values")},g=function(e){return e.getParam("template_replace_values")},y=function(e){return e.templates},h=function(e){return e.getParam("template_cdate_format",e.translate("%Y-%m-%d"))},v=function(e){return e.getParam("template_mdate_format",e.translate("%Y-%m-%d"))},b=function(e,t){if((e=""+e).length<t)for(var n=0;n<t-e.length;n++)e="0"+e;return e},O=function(e,t,n){var r="Sun Mon Tue Wed Thu Fri Sat Sun".split(" "),a="Sunday Monday Tuesday Wednesday Thursday Friday Saturday Sunday".split(" "),o="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),u="January February March April May June July August September October November December".split(" ");return n=n||new Date,t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=t.replace("%D","%m/%d/%Y")).replace("%r","%I:%M:%S %p")).replace("%Y",""+n.getFullYear())).replace("%y",""+n.getYear())).replace("%m",b(n.getMonth()+1,2))).replace("%d",b(n.getDate(),2))).replace("%H",""+b(n.getHours(),2))).replace("%M",""+b(n.getMinutes(),2))).replace("%S",""+b(n.getSeconds(),2))).replace("%I",""+((n.getHours()+11)%12+1))).replace("%p",n.getHours()<12?"AM":"PM")).replace("%B",""+e.translate(u[n.getMonth()]))).replace("%b",""+e.translate(o[n.getMonth()]))).replace("%A",""+e.translate(a[n.getDay()]))).replace("%a",""+e.translate(r[n.getDay()]))).replace("%%","%")},T=function(n,e){return p.each(e,function(e,t){"function"==typeof e&&(e=e(t)),n=n.replace(new RegExp("\\{\\$"+t+"\\}","g"),e)}),n},M=function(e,t){var r=e.dom,a=g(e);p.each(r.select("*",t),function(n){p.each(a,function(e,t){r.hasClass(n,t)&&"function"==typeof a[t]&&a[t](n)})})},_=function(e,t){return new RegExp("\\b"+t+"\\b","g").test(e.className)},S=function(t,n){return function(){var e=y(t);"function"!=typeof e?"string"==typeof e?m.send({url:e,success:function(e){n(JSON.parse(e))}}):n(e):e(n)}},x=T,P=M,A=function(t,e,n){var r,a,o=t.dom,u=t.selection.getContent();n=T(n,g(t)),r=o.create("div",null,n),(a=o.select(".mceTmpl",r))&&0<a.length&&(r=o.create("div",null)).appendChild(a[0].cloneNode(!0)),p.each(o.select("*",r),function(e){_(e,l(t).replace(/\s+/g,"|"))&&(e.innerHTML=O(t,h(t))),_(e,s(t).replace(/\s+/g,"|"))&&(e.innerHTML=O(t,v(t))),_(e,f(t).replace(/\s+/g,"|"))&&(e.innerHTML=u)}),M(t,r),t.execCommand("mceInsertContent",!1,r.innerHTML),t.addVisual()},w=function(e){e.addCommand("mceInsertTemplate",function t(r){for(var a=[],e=1;e<arguments.length;e++)a[e-1]=arguments[e];return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=a.concat(e);return r.apply(null,n)}}(A,e))},D=function(r){r.on("PreProcess",function(e){var t=r.dom,n=v(r);p.each(t.select("div",e.node),function(e){t.hasClass(e,"mceTmpl")&&(p.each(t.select("*",e),function(e){t.hasClass(e,r.getParam("template_mdate_classes","mdate").replace(/\s+/g,"|"))&&(e.innerHTML=O(r,n))}),P(r,e))})})},C=i,N=c,H=function(){return k},k=(r={fold:function(e,t){return e()},is:C,isSome:C,isNone:N,getOr:n=function(e){return e},getOrThunk:t=function(e){return e()},getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:function(){return null},getOrUndefined:function(){return undefined},or:n,orThunk:t,map:H,ap:H,each:function(){},bind:H,flatten:H,exists:C,forall:N,filter:H,equals:e=function(e){return e.isNone()},equals_:e,toArray:function(){return[]},toString:u("none()")},Object.freeze&&Object.freeze(r),r),I=function(n){var e=function(){return n},t=function(){return a},r=function(e){return e(n)},a={fold:function(e,t){return t(n)},is:function(e){return n===e},isSome:N,isNone:C,getOr:e,getOrThunk:e,getOrDie:e,getOrNull:e,getOrUndefined:e,or:t,orThunk:t,map:function(e){return I(e(n))},ap:function(e){return e.fold(H,function(e){return I(e(n))})},each:function(e){e(n)},bind:r,flatten:e,exists:r,forall:r,filter:function(e){return e(n)?a:k},equals:function(e){return e.is(n)},equals_:function(e,t){return e.fold(C,function(e){return t(n,e)})},toArray:function(){return[n]},toString:function(){return"some("+n+")"}};return a},J={some:I,none:H,from:function(e){return null===e||e===undefined?k:I(e)}},L=(a="function",function(e){return function(e){if(null===e)return"null";var t=typeof e;return"object"===t&&Array.prototype.isPrototypeOf(e)?"array":"object"===t&&String.prototype.isPrototypeOf(e)?"string":t}(e)===a}),Y=(Array.prototype.slice,L(Array.from)&&Array.from,tinymce.util.Tools.resolve("tinymce.util.Promise")),j=Object.hasOwnProperty,q=function(e,t){return j.call(e,t)},F={'"':"&quot;","<":"&lt;",">":"&gt;","&":"&amp;","'":"&#039;"},E=function(e){return e.replace(/["'<>&]/g,function(e){return(t=F,n=e,q(t,n)?J.some(t[n]):J.none()).getOr(e);var t,n})},R=function(l,t){var e=function(e){return function(e,t){for(var n=e.length,r=new Array(n),a=0;a<n;a++){var o=e[a];r[a]=t(o,a,e)}return r}(e,function(e){return{text:e.text,value:e.text}})},s=function(e,t){return function(e,t){for(var n=0,r=e.length;n<r;n++){var a=e[n];if(t(a,n,e))return J.some(a)}return J.none()}(e,function(e){return e.text===t})},f=function(e){return new Y(function(t,n){e.value.url?m.send({url:e.value.url,success:function(e){t(e)},error:function(e){n(e)}}):t(e.value.content)})};(function(){if(t&&0!==t.length)return J.from(p.map(t,function(e,t){return{selected:0===t,text:e.title,value:{url:e.url,content:e.content,description:e.description}}}));var e=l.translate("No templates defined.");return l.notificationManager.open({text:e,type:"info"}),J.none()})().each(function(o){var u=e(o),i=function(e,t){return{title:"Insert Template",size:"large",body:{type:"panel",items:e},initialData:t,buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],onSubmit:(n=o,function(t){var e=t.getData();s(n,e.template).each(function(e){f(e).then(function(e){A(l,!1,e),t.close()})})}),onChange:(r=o,a=c,function(n,e){if("template"===e.name){var t=n.getData().template;s(r,t).each(function(t){n.block("Loading..."),f(t).then(function(e){a(n,t,e),n.unblock()})})}})};var r,a,n},c=function(e,t,n){var r=function(t,e){if(-1===e.indexOf("<html>")){var n="";p.each(t.contentCSS,function(e){n+='<link type="text/css" rel="stylesheet" href="'+t.documentBaseURI.toAbsolute(e)+'">'});var r=t.settings.body_class||"";-1!==r.indexOf("=")&&(r=(r=t.getParam("body_class","","hash"))[t.id]||""),e="<!DOCTYPE html><html><head>"+n+'</head><body class="'+r+'">'+e+"</body></html>"}return x(e,d(t))}(l,n),a=[{type:"selectbox",name:"template",label:"Templates",items:u},{type:"htmlpanel",html:'<p aria-live="polite">'+E(t.value.description)+"</p>"},{label:"Preview",type:"iframe",name:"preview",sandboxed:!1}],o={template:t.text,preview:r};e.unblock(),e.redial(i(a,o)),e.focus("template")},t=l.windowManager.open(i([],{template:"",preview:""}));t.block("Loading..."),f(o[0]).then(function(e){c(t,o[0],e)})})},z=function(t){return function(e){R(t,e)}},B=function(e){e.ui.registry.addButton("template",{icon:"template",tooltip:"Insert template",onAction:S(e.settings,z(e))}),e.ui.registry.addMenuItem("template",{icon:"template",text:"Insert template...",onAction:S(e.settings,z(e))})};o.add("template",function(e){B(e),w(e),D(e)}),function U(){}}();