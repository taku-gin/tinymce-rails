/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.0.2 (2019-03-05)
 */
!function(t){"use strict";var a=function(e){var t=e,n=function(){return t};return{get:n,set:function(e){t=e},clone:function(){return a(n())}}},n=tinymce.util.Tools.resolve("tinymce.PluginManager"),c=function(e){return!(!/(^|[ ,])tinymcespellchecker([, ]|$)/.test(e.settings.plugins)||!n.get("tinymcespellchecker")||("undefined"!=typeof t.window.console&&t.window.console.log&&t.window.console.log("Spell Checker Pro is incompatible with Spell Checker plugin! Remove 'spellchecker' from the 'plugins' option."),0))},f=function(e){return e.getParam("spellchecker_languages","English=en,Danish=da,Dutch=nl,Finnish=fi,French=fr_FR,German=de,Italian=it,Polish=pl,Portuguese=pt_BR,Spanish=es,Swedish=sv")},s=function(e){var t=e.getParam("language","en");return e.getParam("spellchecker_language",t)},d=function(e){return e.getParam("spellchecker_rpc_url")},g=function(e){return e.getParam("spellchecker_callback")},l=function(e){var t=new RegExp('[^\\s!"#$%&()*+,-./:;<=>?@[\\]^_{|}`\xa7\xa9\xab\xae\xb1\xb6\xb7\xb8\xbb\xbc\xbd\xbe\xbf\xd7\xf7\xa4\u201d\u201c\u201e\xa0\u2002\u2003\u2009]+',"g");return e.getParam("spellchecker_wordchar_pattern",t)},N=tinymce.util.Tools.resolve("tinymce.util.Tools"),h=tinymce.util.Tools.resolve("tinymce.util.URI"),p=tinymce.util.Tools.resolve("tinymce.util.XHR"),u=function(e){return e.fire("SpellcheckStart")},o=function(e){return e.fire("SpellcheckEnd")};function b(e){return e&&1===e.nodeType&&"false"===e.contentEditable}var m,r=function(a,r){var n,o,g,h,p,i=[],v=r.dom;function c(e,t){if(!e[0])throw new Error("findAndReplaceDOMText cannot handle zero-length matches");return{start:e.index,end:e.index+e[0].length,text:e[0],data:t}}function s(e){var t=a.getElementsByTagName("*"),n=[];e="number"==typeof e?""+e:null;for(var r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-mce-index");null!==i&&i.length&&-1!==o.className.indexOf("mce-spellchecker-word")&&(i!==e&&null!==e||n.push(o))}return n}function l(e){for(var t=i.length;t--;)if(i[t]===e)return t;return-1}function e(e){for(var t=0,n=i.length;t<n&&!1!==e(i[t],t);t++);return this}function t(e){var t,n,r=s(e?l(e):null);for(t=r.length;t--;)(n=r[t]).parentNode.insertBefore(n.firstChild,n),n.parentNode.removeChild(n);return this}function u(e){var t=s(l(e)),n=r.dom.createRng();return n.setStartBefore(t[0]),n.setEndAfter(t[t.length-1]),n}return g=r.schema.getBlockElements(),h=r.schema.getWhiteSpaceElements(),p=r.schema.getShortEndedElements(),{text:o=function d(e){var t;if(3===e.nodeType)return e.data;if(h[e.nodeName]&&!g[e.nodeName])return"";if(b(e))return"\n";if(t="",(g[e.nodeName]||p[e.nodeName])&&(t+="\n"),e=e.firstChild)for(;t+=d(e),e=e.nextSibling;);return t}(a),matches:i,each:e,filter:function f(n){var r=[];return e(function(e,t){n(e,t)&&r.push(e)}),i=r,this},reset:function m(){return i.splice(0,i.length),t(),this},matchFromElement:function x(e){return i[e.getAttribute("data-mce-index")]},elementFromMatch:function k(e){return s(l(e))[0]},find:function N(e,t){if(o&&e.global)for(;n=e.exec(o);)i.push(c(n,t));return this},add:function y(e,t,n){return i.push({start:e,end:e+t,text:o.substr(e,t),data:n}),this},wrap:function S(e){return i.length&&function f(e,t,n){var r,o,i,a,c,s=[],l=0,u=e,d=0;(t=t.slice(0)).sort(function(e,t){return e.start-t.start}),c=t.shift();e:for(;;){if((g[u.nodeName]||p[u.nodeName]||b(u))&&l++,3===u.nodeType&&(!o&&u.length+l>=c.end?(o=u,a=c.end-l):r&&s.push(u),!r&&u.length+l>c.start&&(r=u,i=c.start-l),l+=u.length),r&&o){if(u=n({startNode:r,startNodeIndex:i,endNode:o,endNodeIndex:a,innerNodes:s,match:c.text,matchIndex:d}),l-=o.length-a,o=r=null,s=[],d++,!(c=t.shift()))break}else if(h[u.nodeName]&&!g[u.nodeName]||!u.firstChild){if(u.nextSibling){u=u.nextSibling;continue}}else if(!b(u)){u=u.firstChild;continue}for(;;){if(u.nextSibling){u=u.nextSibling;break}if(u.parentNode===e)break e;u=u.parentNode}}}(a,i,function t(o){function m(e,t){var n=i[t];n.stencil||(n.stencil=o(n));var r=n.stencil.cloneNode(!1);return r.setAttribute("data-mce-index",t),e&&r.appendChild(v.doc.createTextNode(e)),r}return function(e){var t,n,r,o=e.startNode,i=e.endNode,a=e.matchIndex,c=v.doc;if(o===i){var s=o;r=s.parentNode,0<e.startNodeIndex&&(t=c.createTextNode(s.data.substring(0,e.startNodeIndex)),r.insertBefore(t,s));var l=m(e.match,a);return r.insertBefore(l,s),e.endNodeIndex<s.length&&(n=c.createTextNode(s.data.substring(e.endNodeIndex)),r.insertBefore(n,s)),s.parentNode.removeChild(s),l}t=c.createTextNode(o.data.substring(0,e.startNodeIndex)),n=c.createTextNode(i.data.substring(e.endNodeIndex));for(var u=m(o.data.substring(e.startNodeIndex),a),d=0,f=e.innerNodes.length;d<f;++d){var g=e.innerNodes[d],h=m(g.data,a);g.parentNode.replaceChild(h,g)}var p=m(i.data.substring(0,e.endNodeIndex),a);return(r=o.parentNode).insertBefore(t,o),r.insertBefore(u,o),r.removeChild(o),(r=i.parentNode).insertBefore(p,i),r.insertBefore(n,i),r.removeChild(i),p}}(e)),this},unwrap:t,replace:function w(e,t){var n=u(e);return n.deleteContents(),0<t.length&&n.insertNode(r.dom.doc.createTextNode(t)),n},rangeFromMatch:u,indexOf:l}},v=function(e,t){if(!t.get()){var n=r(e.getBody(),e);t.set(n)}return t.get()},x=function(e,t,n,r,o,i,a){var c,s,l,u=g(e);(u||(c=e,s=t,l=n,function(e,t,n,r){var o={method:e,lang:l.get()},i="";o["addToDictionary"===e?"word":"text"]=t,N.each(o,function(e,t){i&&(i+="&"),i+=t+"="+encodeURIComponent(e)}),p.send({url:new h(s).toAbsolute(d(c)),type:"post",content_type:"application/x-www-form-urlencoded",data:i,success:function(e){if(e=JSON.parse(e))e.error?r(e.error):n(e);else{var t=c.translate("Server response wasn't proper JSON.");r(t)}},error:function(){var e=c.translate("The spelling service was not found: (")+d(c)+c.translate(")");r(e)}})})).call(e.plugins.spellchecker,r,o,i,a)},k=function(e,t,n){e.dom.select("span.mce-spellchecker-word").length||y(e,t,n)},y=function(e,t,n){var r=e.selection.getBookmark();if(v(e,n).reset(),e.selection.moveToBookmark(r),n.set(null),t.get())return t.set(!1),o(e),!0},S=function(e){var t=e.getAttribute("data-mce-index");return"number"==typeof t?""+t:t},w=function(t,e,n,r,o){var i=!!o.dictionary,a=o.words;if(t.setProgressState(!1),function(e){for(var t in e)return!1;return!0}(a)){var c=t.translate("No misspellings found.");return t.notificationManager.open({text:c,type:"info"}),void e.set(!1)}r.set({suggestions:a,hasDictionarySupport:i});var s=t.selection.getBookmark();v(t,n).find(l(t)).filter(function(e){return!!a[e.text]}).wrap(function(e){return t.dom.create("span",{"class":"mce-spellchecker-word","aria-invalid":"spelling","data-mce-bogus":1,"data-mce-word":e.text})}),t.selection.moveToBookmark(s),e.set(!0),u(t)},T={spellcheck:function(t,e,n,r,o,i){y(t,n,r)||(t.setProgressState(!0),x(t,e,i,"spellcheck",v(t,r).text,function(e){w(t,n,r,o,e)},function(e){t.notificationManager.open({text:e,type:"error"}),t.setProgressState(!1),y(t,n,r)}),t.focus())},checkIfFinished:k,addToDictionary:function(t,e,n,r,o,i,a){t.setProgressState(!0),x(t,e,o,"addToDictionary",i,function(){t.setProgressState(!1),t.dom.remove(a,!0),k(t,n,r)},function(e){t.notificationManager.open({text:e,type:"error"}),t.setProgressState(!1)})},ignoreWord:function(t,e,n,r,o,i){t.selection.collapse(),i?N.each(t.dom.select("span.mce-spellchecker-word"),function(e){e.getAttribute("data-mce-word")===r&&t.dom.remove(e,!0)}):t.dom.remove(o,!0),k(t,e,n)},findSpansByIndex:function(e,t){var n,r=[];if((n=N.toArray(e.getBody().getElementsByTagName("span"))).length)for(var o=0;o<n.length;o++){var i=S(n[o]);null!==i&&i.length&&i===t.toString()&&r.push(n[o])}return r},getElmIndex:S,markErrors:w},I=function(t,n,r,o,e,i){return{getTextMatcher:function(){return o.get()},getWordCharPattern:function(){return l(t)},markErrors:function(e){T.markErrors(t,n,o,r,e)},getLanguage:function(){return e.get()}}},A=function(e,t,n,r,o,i){e.addCommand("mceSpellCheck",function(){T.spellcheck(e,t,n,r,o,i)})},B=Object.prototype.hasOwnProperty,E=(m=function(e,t){return t},function(){for(var e=new Array(arguments.length),t=0;t<e.length;t++)e[t]=arguments[t];if(0===e.length)throw new Error("Can't merge zero objects");for(var n={},r=0;r<e.length;r++){var o=e[r];for(var i in o)B.call(o,i)&&(n[i]=m(n[i],o[i]))}return n}),C="SpellcheckStart SpellcheckEnd",P=function(n,e,r,t,o,i){var a,c,s,l=(s=n,a=N.map(f(s).split(","),function(e){return{name:(e=e.split("="))[0],value:e[1]}}),c=[],N.each(a,function(e){c.push({selectable:!0,text:e.name,data:e.value})}),c),u=function(){T.spellcheck(n,e,r,t,i,o)},d={tooltip:"Spellcheck",onAction:u,icon:"spell-check",onSetup:function(e){var t=function(){e.setActive(r.get())};return n.on(C,t),function(){n.off(C,t)}}};n.ui.registry.addButton("spellchecker",E(d,1<l.length?{type:"splitbutton",menu:l,select:function(e){return e===o.get()},fetch:function(e){e(N.map(l,function(e){return{type:"choiceitem",value:e.data,text:e.text}}))},onItemAction:function(e,t){o.set(t)}}:{type:"togglebutton"})),n.ui.registry.addToggleMenuItem("spellchecker",{text:"Spellcheck",onSetup:function(e){e.setActive(r.get());var t=function(){e.setActive(r.get())};return n.on(C,t),function(){n.off(C,t)}},onAction:u})},R=function(h,p,m,v,x,k){h.ui.registry.addContextMenu("spellchecker",{update:function(e){var t=e;if("mce-spellchecker-word"!==t.className)return[];var n,r,o,i,a,c,s,l,u,d,f=T.findSpansByIndex(h,T.getElmIndex(t));if(0<f.length){var g=h.dom.createRng();return g.setStartBefore(f[0]),g.setEndAfter(f[f.length-1]),h.selection.setRng(g),n=h,r=p,o=m,i=v,a=x,c=k,s=t.getAttribute("data-mce-word"),l=f,u=[],d=o.get().suggestions[s],N.each(d,function(e){u.push({text:e,onAction:function(){n.insertContent(n.dom.encode(e)),n.dom.remove(l),T.checkIfFinished(n,i,a)}})}),o.get().hasDictionarySupport&&(u.push({type:"separator"}),u.push({text:"Add to dictionary",onAction:function(){T.addToDictionary(n,r,i,a,c,s,l)}})),u.push.apply(u,[{type:"separator"},{text:"Ignore",onAction:function(){T.ignoreWord(n,i,a,s,l)}},{text:"Ignore all",onAction:function(){T.ignoreWord(n,i,a,s,l,!0)}}]),u}}})};n.add("spellchecker",function(e,t){if(!1===c(e)){var n=a(!1),r=a(s(e)),o=a(null),i=a(null);return P(e,t,n,o,r,i),R(e,t,i,n,o,r),A(e,t,n,o,i,r),I(e,n,i,o,r,t)}}),function e(){}}(window);