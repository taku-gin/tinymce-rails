/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.0.2 (2019-03-05)
 */
!function(){"use strict";var r=function(e){var t=e,n=function(){return t};return{get:n,set:function(e){t=e},clone:function(){return r(n())}}},e=tinymce.util.Tools.resolve("tinymce.PluginManager"),p=tinymce.util.Tools.resolve("tinymce.util.Tools");function x(e){return e&&1===e.nodeType&&"false"===e.contentEditable}var t,n,a,o,i,u={findAndReplaceDOMText:function R(e,t,n,r,a){var o,i,m,f,p,g,d=[],c=0;function l(e,t){if(t=t||0,!e[0])throw new Error("findAndReplaceDOMText cannot handle zero-length matches");var n=e.index;if(0<t){var r=e[t];if(!r)throw new Error("Invalid capture group");n+=e[0].indexOf(r),e[0]=r}return[n,n+e[0].length,[e[0]]]}if(m=t.ownerDocument,f=a.getBlockElements(),p=a.getWhiteSpaceElements(),g=a.getShortEndedElements(),i=function s(e){var t;if(3===e.nodeType)return e.data;if(p[e.nodeName]&&!f[e.nodeName])return"";if(t="",x(e))return"\n";if((f[e.nodeName]||g[e.nodeName])&&(t+="\n"),e=e.firstChild)for(;t+=s(e),e=e.nextSibling;);return t}(t)){if(e.global)for(;o=e.exec(i);)d.push(l(o,r));else o=i.match(e),d.push(l(o,r));return d.length&&(c=d.length,function h(e,t,n){var r,a,o,i,d=[],c=0,l=e,s=t.shift(),u=0;e:for(;;){if((f[l.nodeName]||g[l.nodeName]||x(l))&&c++,3===l.nodeType&&(!a&&l.length+c>=s[1]?(a=l,i=s[1]-c):r&&d.push(l),!r&&l.length+c>s[0]&&(r=l,o=s[0]-c),c+=l.length),r&&a){if(l=n({startNode:r,startNodeIndex:o,endNode:a,endNodeIndex:i,innerNodes:d,match:s[2],matchIndex:u}),c-=a.length-i,a=r=null,d=[],u++,!(s=t.shift()))break}else if(p[l.nodeName]&&!f[l.nodeName]||!l.firstChild){if(l.nextSibling){l=l.nextSibling;continue}}else if(!x(l)){l=l.firstChild;continue}for(;;){if(l.nextSibling){l=l.nextSibling;break}if(l.parentNode===e)break e;l=l.parentNode}}}(t,d,function u(e){var h;if("function"!=typeof e){var r=e.nodeType?e:m.createElement(e);h=function(e,t){var n=r.cloneNode(!1);return n.setAttribute("data-mce-index",t),e&&n.appendChild(m.createTextNode(e)),n}}else h=e;return function(e){var t,n,r,a=e.startNode,o=e.endNode,i=e.matchIndex;if(a===o){var d=a;r=d.parentNode,0<e.startNodeIndex&&(t=m.createTextNode(d.data.substring(0,e.startNodeIndex)),r.insertBefore(t,d));var c=h(e.match[0],i);return r.insertBefore(c,d),e.endNodeIndex<d.length&&(n=m.createTextNode(d.data.substring(e.endNodeIndex)),r.insertBefore(n,d)),d.parentNode.removeChild(d),c}t=m.createTextNode(a.data.substring(0,e.startNodeIndex)),n=m.createTextNode(o.data.substring(e.endNodeIndex));for(var l=h(a.data.substring(e.startNodeIndex),i),s=0,u=e.innerNodes.length;s<u;++s){var f=e.innerNodes[s],p=h(f.data,i);f.parentNode.replaceChild(p,f)}var g=h(o.data.substring(0,e.endNodeIndex),i);return(r=a.parentNode).insertBefore(t,a),r.insertBefore(l,a),r.removeChild(a),(r=o.parentNode).insertBefore(g,o),r.insertBefore(n,o),r.removeChild(o),g}}(n))),c}}},g=function(e){var t=e.getAttribute("data-mce-index");return"number"==typeof t?""+t:t},h=function(e){var t=e.parentNode;e.firstChild&&t.insertBefore(e.firstChild,e),e.parentNode.removeChild(e)},d=function(e,t){var n,r=[];if((n=p.toArray(e.getBody().getElementsByTagName("span"))).length)for(var a=0;a<n.length;a++){var o=g(n[a]);null!==o&&o.length&&o===t.toString()&&r.push(n[a])}return r},f=function(e,t,n){var r=t.get(),a=e.dom;(n=!1!==n)?r++:r--,a.removeClass(d(e,t.get()),"mce-match-marker-selected");var o=d(e,r);return o.length?(a.addClass(d(e,r),"mce-match-marker-selected"),e.selection.scrollIntoView(o[0]),r):-1},m=function(e,t){var n=t.parentNode;e.remove(t),e.isEmpty(n)&&e.remove(n)},v=function(e,t){var n=f(e,t,!0);-1!==n&&t.set(n)},b=function(e,t){var n=f(e,t,!1);-1!==n&&t.set(n)},N=function(e){var t=g(e);return null!==t&&0<t.length},y=function(e,t,n){var r,a,o,i;for(a=p.toArray(e.getBody().getElementsByTagName("span")),r=0;r<a.length;r++){var d=g(a[r]);null!==d&&d.length&&(d===t.get().toString()&&(o||(o=a[r].firstChild),i=a[r].firstChild),h(a[r]))}if(o&&i){var c=e.dom.createRng();return c.setStart(o,0),c.setEnd(i,i.data.length),!1!==n&&e.selection.setRng(c),c}},w=function(e,t){return 0<d(e,t.get()+1).length},C=function(e,t){return 0<d(e,t.get()-1).length},s={done:y,find:function(e,t,n,r,a){n=(n=n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")).replace(/\s/g,"[^\\S\\r\\n]"),n=a?"\\b"+n+"\\b":n;var o,i,d,c,l,s=(o=e,i=t,d=new RegExp(n,r?"g":"gi"),(l=o.dom.create("span",{"data-mce-bogus":1})).className="mce-match-marker",c=o.getBody(),y(o,i,!1),u.findAndReplaceDOMText(d,c,l,!1,o.schema));return s&&(t.set(-1),t.set(f(e,t,!0))),s},next:v,prev:b,replace:function(e,t,n,r,a){var o,i,d,c,l,s,u=t.get();for(r=!1!==r,d=e.getBody(),i=p.grep(p.toArray(d.getElementsByTagName("span")),N),o=0;o<i.length;o++){var f=g(i[o]);if(c=l=parseInt(f,10),a||c===t.get()){for(n.length?(i[o].firstChild.nodeValue=n,h(i[o])):m(e.dom,i[o]);i[++o];){if((c=parseInt(g(i[o]),10))!==l){o--;break}m(e.dom,i[o])}r&&u--}else l>t.get()&&i[o].setAttribute("data-mce-index",l-1)}return t.set(u),r?(s=w(e,t),v(e,t)):(s=C(e,t),b(e,t)),!a&&s},hasNext:w,hasPrev:C},c=function(r,a){return{done:function(e){return s.done(r,a,e)},find:function(e,t,n){return s.find(r,a,e,t,n)},next:function(){return s.next(r,a)},prev:function(){return s.prev(r,a)},replace:function(e,t,n){return s.replace(r,a,e,t,n)}}},l=function(e){return function(){return e}},T=l(!1),A=l(!0),S=function(){return B},B=(o={fold:function(e,t){return e()},is:T,isSome:T,isNone:A,getOr:a=function(e){return e},getOrThunk:n=function(e){return e()},getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:function(){return null},getOrUndefined:function(){return undefined},or:a,orThunk:n,map:S,ap:S,each:function(){},bind:S,flatten:S,exists:T,forall:A,filter:S,equals:t=function(e){return e.isNone()},equals_:t,toArray:function(){return[]},toString:l("none()")},Object.freeze&&Object.freeze(o),o),I=(i="function",function(e){return function(e){if(null===e)return"null";var t=typeof e;return"object"===t&&Array.prototype.isPrototypeOf(e)?"array":"object"===t&&String.prototype.isPrototypeOf(e)?"string":t}(e)===i}),k=(Array.prototype.slice,I(Array.from)&&Array.from,function(r,a){var e,o={};function i(e){(s.hasNext(r,a)?e.enable:e.disable)("next"),(s.hasPrev(r,a)?e.enable:e.disable)("prev")}r.undoManager.add(),e=p.trim(r.selection.getContent({format:"text"}));var d=function(e,t){!function(e,t){for(var n=0,r=e.length;n<r;n++)t(e[n],n,e)}(["replace","replaceall","prev","next"],t?e.disable:e.enable)};function c(e){r.windowManager.alert("Could not find the specified string.",function(){e.focus("findtext")})}var l=function(e){var t=e.getData();if(!t.findtext.length)return s.done(r,a,!1),d(e,!0),void i(e);if(o.text===t.findtext&&o.caseState===t.matchcase&&o.wholeWord===t.wholewords)return s.hasNext(r,a)?(s.next(r,a),void i(e)):void c(e);var n=s.find(r,a,t.findtext,t.matchcase,t.wholewords);n||c(e),d(e,0===n),i(e),o={text:t.findtext,caseState:t.matchcase,wholeWord:t.wholewords}},t={findtext:e,replacetext:"",matchcase:!1,wholewords:!1};r.windowManager.open({title:"Find and Replace",size:"normal",body:{type:"panel",items:[{type:"input",name:"findtext",label:"Find"},{type:"input",name:"replacetext",label:"Replace with"},{type:"grid",columns:2,items:[{type:"checkbox",name:"matchcase",label:"Match case"},{type:"checkbox",name:"wholewords",label:"Find whole words only"}]}]},buttons:[{type:"custom",name:"find",text:"Find",align:"start",primary:!0},{type:"custom",name:"replace",text:"Replace",align:"start",disabled:!0},{type:"custom",name:"replaceall",text:"Replace All",align:"start",disabled:!0},{type:"custom",name:"prev",text:"Previous",align:"end",icon:"arrow-left",disabled:!0},{type:"custom",name:"next",text:"Next",align:"end",icon:"arrow-right",disabled:!0}],initialData:t,onAction:function(e,t){var n=e.getData();switch(t.name){case"find":l(e);break;case"replace":s.replace(r,a,n.replacetext)||(d(e,!0),a.set(-1),o={});break;case"replaceall":s.replace(r,a,n.replacetext,!0,!0),d(e,!0),o={};break;case"prev":s.prev(r,a),i(e);break;case"next":s.next(r,a),i(e)}},onSubmit:l,onClose:function(){r.focus(),s.done(r,a),r.undoManager.add()}})}),E=function(e,t){e.addCommand("SearchReplace",function(){k(e,t)})},O=function(e,t){return function(){k(e,t)}},M=function(e,t){e.ui.registry.addMenuItem("searchreplace",{text:"Find and replace...",shortcut:"Meta+F",onAction:O(e,t),icon:"search"}),e.ui.registry.addButton("searchreplace",{tooltip:"Find and replace",onAction:O(e,t),icon:"search"}),e.shortcuts.add("Meta+F","",O(e,t))};e.add("searchreplace",function(e){var t=r(-1);return E(e,t),M(e,t),c(e,t)}),function D(){}}();