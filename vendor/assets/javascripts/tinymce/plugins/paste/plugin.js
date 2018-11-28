!function(){"use strict";var u=function(e){var t=e,n=function(){return t};return{get:n,set:function(e){t=e},clone:function(){return u(n())}}},t=tinymce.util.Tools.resolve("tinymce.PluginManager"),o=function(e){return!(!/(^|[ ,])powerpaste([, ]|$)/.test(e.settings.plugins)||!t.get("powerpaste")||("undefined"!=typeof window.console&&window.console.log&&window.console.log("PowerPaste is incompatible with Paste plugin! Remove 'paste' from the 'plugins' option."),0))},s=function(e,t){return{clipboard:e,quirks:t}},f=function(e,t,n,r){return e.fire("PastePreProcess",{content:t,internal:n,wordContent:r})},d=function(e,t,n,r){return e.fire("PastePostProcess",{node:t,internal:n,wordContent:r})},l=function(e,t){return e.fire("PastePlainTextToggle",{state:t})},n=function(e,t){return e.fire("paste",{ieFake:t})},m={shouldPlainTextInform:function(e){return e.getParam("paste_plaintext_inform",!0)},shouldBlockDrop:function(e){return e.getParam("paste_block_drop",!1)},shouldPasteDataImages:function(e){return e.getParam("paste_data_images",!1)},shouldFilterDrop:function(e){return e.getParam("paste_filter_drop",!0)},getPreProcess:function(e){return e.getParam("paste_preprocess")},getPostProcess:function(e){return e.getParam("paste_postprocess")},getWebkitStyles:function(e){return e.getParam("paste_webkit_styles")},shouldRemoveWebKitStyles:function(e){return e.getParam("paste_remove_styles_if_webkit",!0)},shouldMergeFormats:function(e){return e.getParam("paste_merge_formats",!0)},isSmartPasteEnabled:function(e){return e.getParam("smart_paste",!0)},isPasteAsTextEnabled:function(e){return e.getParam("paste_as_text",!1)},getRetainStyleProps:function(e){return e.getParam("paste_retain_style_properties")},getWordValidElements:function(e){return e.getParam("paste_word_valid_elements","-strong/b,-em/i,-u,-span,-p,-ol,-ul,-li,-h1,-h2,-h3,-h4,-h5,-h6,-p/div,-a[href|name],sub,sup,strike,br,del,table[width],tr,td[colspan|rowspan|width],th[colspan|rowspan|width],thead,tfoot,tbody")},shouldConvertWordFakeLists:function(e){return e.getParam("paste_convert_word_fake_lists",!0)},shouldUseDefaultFilters:function(e){return e.getParam("paste_enable_default_filters",!0)}},r=function(e,t,n){var r,a,i;"text"===t.pasteFormat.get()?(t.pasteFormat.set("html"),l(e,!1)):(t.pasteFormat.set("text"),l(e,!0),i=e,!1===n.get()&&m.shouldPlainTextInform(i)&&(a="Paste is now in plain text mode. Contents will now be pasted as plain text until you toggle this option off.",(r=e).notificationManager.open({text:r.translate(a),type:"info"}),n.set(!0))),e.focus()},c=function(e,n,t){e.addCommand("mceTogglePlainTextPaste",function(){r(e,n,t)}),e.addCommand("mceInsertClipboardContent",function(e,t){t.content&&n.pasteHtml(t.content,t.internal),t.text&&n.pasteText(t.text)})},v=tinymce.util.Tools.resolve("tinymce.Env"),h=tinymce.util.Tools.resolve("tinymce.util.Delay"),b=tinymce.util.Tools.resolve("tinymce.util.Tools"),a=tinymce.util.Tools.resolve("tinymce.util.VK"),e="x-tinymce/html",i="\x3c!-- "+e+" --\x3e",p=function(e){return i+e},g=function(e){return e.replace(i,"")},y=function(e){return-1!==e.indexOf(i)},x=function(){return e},P=tinymce.util.Tools.resolve("tinymce.html.Entities"),w=function(e){return e.replace(/\r?\n/g,"<br>")},_=function(e,t,n){var r=e.split(/\n\n/),a=function(e,t){var n,r=[],a="<"+e;if("object"==typeof t){for(n in t)t.hasOwnProperty(n)&&r.push(n+'="'+P.encodeAllRaw(t[n])+'"');r.length&&(a+=" "+r.join(" "))}return a+">"}(t,n),i="</"+t+">",o=b.map(r,function(e){return e.split(/\n/).join("<br />")});return 1===o.length?o[0]:b.map(o,function(e){return a+e+i}).join("")},D=function(e){return!/<(?:\/?(?!(?:div|p|br|span)>)\w+|(?:(?!(?:span style="white-space:\s?pre;?">)|br\s?\/>))\w+\s[^>]+)>/i.test(e)},T=function(e,t,n){return t?_(e,t,n):w(e)},C=tinymce.util.Tools.resolve("tinymce.html.DomParser"),k=tinymce.util.Tools.resolve("tinymce.html.Node"),R=tinymce.util.Tools.resolve("tinymce.html.Schema"),F=tinymce.util.Tools.resolve("tinymce.html.Serializer");function S(t,e){return b.each(e,function(e){t=e.constructor===RegExp?t.replace(e,""):t.replace(e[0],e[1])}),t}var E={filter:S,innerText:function(t){var n=R(),r=C({},n),a="",i=n.getShortEndedElements(),o=b.makeMap("script noscript style textarea video audio iframe object"," "),s=n.getBlockElements();return t=S(t,[/<!\[[^\]]+\]>/g]),function e(t){var n=t.name,r=t;if("br"!==n){if("wbr"!==n)if(i[n]&&(a+=" "),o[n])a+=" ";else{if(3===t.type&&(a+=t.value),!t.shortEnded&&(t=t.firstChild))for(;e(t),t=t.next;);s[n]&&r.next&&(a+="\n","p"===n&&(a+="\n"))}}else a+="\n"}(r.parse(t)),a},trimHtml:function(e){return e=S(e,[/^[\s\S]*<body[^>]*>\s*|\s*<\/body[^>]*>[\s\S]*$/gi,/<!--StartFragment-->|<!--EndFragment-->/g,[/( ?)<span class="Apple-converted-space">\u00a0<\/span>( ?)/g,function(e,t,n){return t||n?"\xa0":" "}],/<br class="Apple-interchange-newline">/g,/<br>$/i])},createIdGenerator:function(e){var t=0;return function(){return e+t++}},isMsEdge:function(){return-1!==navigator.userAgent.indexOf(" Edge/")}};function I(t){var n,e;return e=[/^[IVXLMCD]{1,2}\.[ \u00a0]/,/^[ivxlmcd]{1,2}\.[ \u00a0]/,/^[a-z]{1,2}[\.\)][ \u00a0]/,/^[A-Z]{1,2}[\.\)][ \u00a0]/,/^[0-9]+\.[ \u00a0]/,/^[\u3007\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d]+\.[ \u00a0]/,/^[\u58f1\u5f10\u53c2\u56db\u4f0d\u516d\u4e03\u516b\u4e5d\u62fe]+\.[ \u00a0]/],t=t.replace(/^[\u00a0 ]+/,""),b.each(e,function(e){if(e.test(t))return!(n=!0)}),n}function M(e){var i,o,s=1;function n(e){var t="";if(3===e.type)return e.value;if(e=e.firstChild)for(;t+=n(e),e=e.next;);return t}function l(e,t){if(3===e.type&&t.test(e.value))return e.value=e.value.replace(t,""),!1;if(e=e.firstChild)do{if(!l(e,t))return!1}while(e=e.next);return!0}function t(t,n,r){var a=t._listLevel||s;a!==s&&(a<s?i&&(i=i.parent.parent):(o=i,i=null)),i&&i.name===n?i.append(t):(o=o||i,i=new k(n,1),1<r&&i.attr("start",""+r),t.wrap(i)),t.name="li",s<a&&o&&o.lastChild.append(i),s=a,function e(t){if(t._listIgnore)t.remove();else if(t=t.firstChild)for(;e(t),t=t.next;);}(t),l(t,/^\u00a0+/),l(t,/^\s*([\u2022\u00b7\u00a7\u25CF]|\w+\.)/),l(t,/^\u00a0+/)}for(var r=[],a=e.firstChild;null!=a;)if(r.push(a),null!==(a=a.walk()))for(;void 0!==a&&a.parent!==e;)a=a.walk();for(var u=0;u<r.length;u++)if("p"===(e=r[u]).name&&e.firstChild){var c=n(e);if(/^[\s\u00a0]*[\u2022\u00b7\u00a7\u25CF]\s*/.test(c)){t(e,"ul");continue}if(I(c)){var f=/([0-9]+)\./.exec(c),d=1;f&&(d=parseInt(f[1],10)),t(e,"ol",d);continue}if(e._listLevel){t(e,"ul",1);continue}i=null}else o=i,i=null}function O(n,r,a,i){var o,s={},e=n.dom.parseStyle(i);return b.each(e,function(e,t){switch(t){case"mso-list":(o=/\w+ \w+([0-9]+)/i.exec(i))&&(a._listLevel=parseInt(o[1],10)),/Ignore/i.test(e)&&a.firstChild&&(a._listIgnore=!0,a.firstChild._listIgnore=!0);break;case"horiz-align":t="text-align";break;case"vert-align":t="vertical-align";break;case"font-color":case"mso-foreground":t="color";break;case"mso-background":case"mso-highlight":t="background";break;case"font-weight":case"font-style":return void("normal"!==e&&(s[t]=e));case"mso-element":if(/^(comment|comment-list)$/i.test(e))return void a.remove()}0!==t.indexOf("mso-comment")?0!==t.indexOf("mso-")&&("all"===m.getRetainStyleProps(n)||r&&r[t])&&(s[t]=e):a.remove()}),/(bold)/i.test(s["font-weight"])&&(delete s["font-weight"],a.wrap(new k("b",1))),/(italic)/i.test(s["font-style"])&&(delete s["font-style"],a.wrap(new k("i",1))),(s=n.dom.serializeStyle(s,a.name))||null}var A={preProcess:function(e,t){return m.shouldUseDefaultFilters(e)?function(r,e){var t,a;(t=m.getRetainStyleProps(r))&&(a=b.makeMap(t.split(/[, ]/))),e=E.filter(e,[/<br class="?Apple-interchange-newline"?>/gi,/<b[^>]+id="?docs-internal-[^>]*>/gi,/<!--[\s\S]+?-->/gi,/<(!|script[^>]*>.*?<\/script(?=[>\s])|\/?(\?xml(:\w+)?|img|meta|link|style|\w:\w+)(?=[\s\/>]))[^>]*>/gi,[/<(\/?)s>/gi,"<$1strike>"],[/&nbsp;/gi,"\xa0"],[/<span\s+style\s*=\s*"\s*mso-spacerun\s*:\s*yes\s*;?\s*"\s*>([\s\u00a0]*)<\/span>/gi,function(e,t){return 0<t.length?t.replace(/./," ").slice(Math.floor(t.length/2)).split("").join("\xa0"):""}]]);var n=m.getWordValidElements(r),i=R({valid_elements:n,valid_children:"-li[p]"});b.each(i.elements,function(e){e.attributes["class"]||(e.attributes["class"]={},e.attributesOrder.push("class")),e.attributes.style||(e.attributes.style={},e.attributesOrder.push("style"))});var o=C({},i);o.addAttributeFilter("style",function(e){for(var t,n=e.length;n--;)(t=e[n]).attr("style",O(r,a,t,t.attr("style"))),"span"===t.name&&t.parent&&!t.attributes.length&&t.unwrap()}),o.addAttributeFilter("class",function(e){for(var t,n,r=e.length;r--;)n=(t=e[r]).attr("class"),/^(MsoCommentReference|MsoCommentText|msoDel)$/i.test(n)&&t.remove(),t.attr("class",null)}),o.addNodeFilter("del",function(e){for(var t=e.length;t--;)e[t].remove()}),o.addNodeFilter("a",function(e){for(var t,n,r,a=e.length;a--;)if(n=(t=e[a]).attr("href"),r=t.attr("name"),n&&-1!==n.indexOf("#_msocom_"))t.remove();else if(n&&0===n.indexOf("file://")&&(n=n.split("#")[1])&&(n="#"+n),n||r){if(r&&!/^_?(?:toc|edn|ftn)/i.test(r)){t.unwrap();continue}t.attr({href:n,name:r})}else t.unwrap()});var s=o.parse(e);return m.shouldConvertWordFakeLists(r)&&M(s),e=F({validate:r.settings.validate},i).serialize(s)}(e,t):t},isWordContent:function(e){return/<font face="Times New Roman"|class="?Mso|style="[^"]*\bmso-|style='[^'']*\bmso-|w:WordDocument/i.test(e)||/class="OutlineElement/.test(e)||/id="?docs\-internal\-guid\-/.test(e)}},H=function(e,t){return{content:e,cancelled:t}},B=function(e,t,n,r){var a,i,o,s,l,u,c=f(e,t,n,r);return e.hasEventListeners("PastePostProcess")&&!c.isDefaultPrevented()?(a=e,i=c.content,o=n,s=r,l=a.dom.create("div",{style:"display:none"},i),u=d(a,l,o,s),H(u.node.innerHTML,u.isDefaultPrevented())):H(c.content,c.isDefaultPrevented())},L=function(e,t,n){var r=A.isWordContent(t),a=r?A.preProcess(e,t):t;return B(e,a,n,r)},$=function(e,t){var n,r;return e.insertContent((n=t,r=e.dom.create("body",{},n),b.each(r.querySelectorAll("meta"),function(e){return e.parentNode.removeChild(e)}),r.innerHTML),{merge:m.shouldMergeFormats(e),paste:!0}),!0},j=function(e){return/^https?:\/\/[\w\?\-\/+=.&%@~#]+$/i.test(e)},W=function(e){return j(e)&&/.(gif|jpe?g|png)$/.test(e)},N=function(e,t,n){return!(!1!==e.selection.isCollapsed()||!j(t)||(a=t,i=n,(r=e).undoManager.extra(function(){i(r,a)},function(){r.execCommand("mceInsertLink",!1,a)}),0));var r,a,i},V=function(e,t,n){return!!W(t)&&(a=t,i=n,(r=e).undoManager.extra(function(){i(r,a)},function(){r.insertContent('<img src="'+a+'">')}),!0);var r,a,i},z=function(e,t){var n,r;!1===m.isSmartPasteEnabled(e)?$(e,t):(n=e,r=t,b.each([N,V,$],function(e){return!0!==e(n,r,$)}))},K=function(e,t,n){var r=n||y(t),a=L(e,g(t),r);!1===a.cancelled&&z(e,a.content)},U=function(e,t){t=e.dom.encode(t).replace(/\r\n/g,"\n"),t=T(t,e.settings.forced_root_block,e.settings.forced_root_block_attrs),K(e,t,!1)},q=function(e){var t={};if(e){if(e.getData){var n=e.getData("Text");n&&0<n.length&&-1===n.indexOf("data:text/mce-internal,")&&(t["text/plain"]=n)}if(e.types)for(var r=0;r<e.types.length;r++){var a=e.types[r];try{t[a]=e.getData(a)}catch(i){t[a]=""}}}return t},G=function(e,t){return t in e&&0<e[t].length},X=function(e){return G(e,"text/html")||G(e,"text/plain")},Y=E.createIdGenerator("mceclip"),Z=function(e,t,n,r){t&&(e.selection.setRng(t),t=null);var a,i,o,s,l,u,c,f=n.result,d=-1!==(i=(a=f).indexOf(","))?a.substr(i+1):null,m=Y(),p=e.settings.images_reuse_filename&&r.name?(o=e,s=r.name,(l=s.match(/([\s\S]+?)\.(?:jpeg|jpg|png|gif)$/i))?o.dom.encode(l[1]):null):m,g=new Image;if(g.src=f,u=e.settings,c=g,!u.images_dataimg_filter||u.images_dataimg_filter(c)){var v,h=e.editorUpload.blobCache,b=void 0;(v=h.findFirst(function(e){return e.base64()===d}))?b=v:(b=h.create(m,r,d,p),h.add(b)),K(e,'<img src="'+b.blobUri()+'">',!1)}else K(e,'<img src="'+f+'">',!1)},J=function(o,s,l){var e="paste"===s.type?s.clipboardData:s.dataTransfer;function t(e){var t,n,r,a=!1;if(e)for(t=0;t<e.length;t++)if(n=e[t],/^image\/(jpeg|png|gif|bmp)$/.test(n.type)){var i=n.getAsFile?n.getAsFile():n;(r=new window.FileReader).onload=Z.bind(null,o,l,r,i),r.readAsDataURL(i),s.preventDefault(),a=!0}return a}if(o.settings.paste_data_images&&e)return t(e.items)||t(e.files)},Q=function(e){return a.metaKeyPressed(e)&&86===e.keyCode||e.shiftKey&&45===e.keyCode},ee=function(c,f,d){var m,p=0;function g(e,t,n,r){var a,i;G(e,"text/html")?a=e["text/html"]:(a=f.getHtml(),r=r||y(a),f.isDefaultContent(a)&&(n=!0)),a=E.trimHtml(a),f.remove(),i=!1===r&&D(a),a.length&&!i||(n=!0),n&&(a=G(e,"text/plain")&&i?e["text/plain"]:E.innerText(a)),f.isDefaultContent(a)?t||c.windowManager.alert("Please use Ctrl+V/Cmd+V keyboard shortcuts to paste contents."):n?U(c,a):K(c,a,r)}c.on("keydown",function(e){function t(e){Q(e)&&!e.isDefaultPrevented()&&f.remove()}if(Q(e)&&!e.isDefaultPrevented()){if((m=e.shiftKey&&86===e.keyCode)&&v.webkit&&-1!==navigator.userAgent.indexOf("Version/"))return;if(e.stopImmediatePropagation(),p=(new Date).getTime(),v.ie&&m)return e.preventDefault(),void n(c,!0);f.remove(),f.create(),c.once("keyup",t),c.once("paste",function(){c.off("keyup",t)})}}),c.on("paste",function(e){var t,n,r,a=(new Date).getTime(),i=(t=c,n=q(e.clipboardData||t.getDoc().dataTransfer),E.isMsEdge()?b.extend(n,{"text/html":""}):n),o=(new Date).getTime()-a,s=(new Date).getTime()-p-o<1e3,l="text"===d.get()||m,u=G(i,x());m=!1,e.isDefaultPrevented()||(r=e.clipboardData,-1!==navigator.userAgent.indexOf("Android")&&r&&r.items&&0===r.items.length)?f.remove():X(i)||!J(c,e,f.getLastRng()||c.selection.getRng())?(s||e.preventDefault(),!v.ie||s&&!e.ieFake||G(i,"text/html")||(f.create(),c.dom.bind(f.getEl(),"paste",function(e){e.stopPropagation()}),c.getDoc().execCommand("Paste",!1,null),i["text/html"]=f.getHtml()),G(i,"text/html")?(e.preventDefault(),u||(u=y(i["text/html"])),g(i,s,l,u)):h.setEditorTimeout(c,function(){g(i,s,l,u)},0)):f.remove()})},te=function(e){return v.ie&&e.inline?document.body:e.getBody()},ne=function(t,e,n){var r;te(r=t)!==r.getBody()&&t.dom.bind(e,"paste keyup",function(e){ie(t,n)||t.fire("paste")})},re=function(e){return e.dom.get("mcepastebin")},ae=function(e,t){return t===e},ie=function(e,t){var n,r=re(e);return(n=r)&&"mcepastebin"===n.id&&ae(t,r.innerHTML)},oe=function(o){var s=u(null),l="%MCEPASTEBIN%";return{create:function(){return t=s,n=l,a=(e=o).dom,i=e.getBody(),t.set(e.selection.getRng()),r=e.dom.add(te(e),"div",{id:"mcepastebin","class":"mce-pastebin",contentEditable:!0,"data-mce-bogus":"all",style:"position: fixed; top: 50%; width: 10px; height: 10px; overflow: hidden; opacity: 0"},n),(v.ie||v.gecko)&&a.setStyle(r,"left","rtl"===a.getStyle(i,"direction",!0)?65535:-65535),a.bind(r,"beforedeactivate focusin focusout",function(e){e.stopPropagation()}),ne(e,r,n),r.focus(),void e.selection.select(r,!0);var e,t,n,r,a,i},remove:function(){return function(e,t){if(re(e)){for(var n=void 0,r=t.get();n=e.dom.get("mcepastebin");)e.dom.remove(n),e.dom.unbind(n);r&&e.selection.setRng(r)}t.set(null)}(o,s)},getEl:function(){return re(o)},getHtml:function(){return function(n){var t,e,r,a,i,o=function(e,t){e.appendChild(t),n.dom.remove(t,!0)};for(e=b.grep(te(n).childNodes,function(e){return"mcepastebin"===e.id}),t=e.shift(),b.each(e,function(e){o(t,e)}),r=(a=n.dom.select("div[id=mcepastebin]",t)).length-1;0<=r;r--)i=n.dom.create("div"),t.insertBefore(i,a[r]),o(i,a[r]);return t?t.innerHTML:""}(o)},getLastRng:function(){return s.get()},isDefault:function(){return ie(o,l)},isDefaultContent:function(e){return ae(l,e)}}},se=function(n,e){var t=oe(n);return n.on("preInit",function(){return ee(o=n,t,e),void o.parser.addNodeFilter("img",function(e,t,n){var r,a=function(e){e.attr("data-mce-object")||s===v.transparentSrc||e.remove()};if(!o.settings.paste_data_images&&(r=n).data&&!0===r.data.paste)for(var i=e.length;i--;)(s=e[i].attributes.map.src)&&(0===s.indexOf("webkit-fake-url")?a(e[i]):o.settings.allow_html_data_urls||0!==s.indexOf("data:")||a(e[i]))});var o,s}),{pasteFormat:e,pasteHtml:function(e,t){return K(n,e,t)},pasteText:function(e){return U(n,e)},pasteImageData:function(e,t){return J(n,e,t)},getDataTransferItems:q,hasHtmlOrText:X,hasContentType:G}},le=function(){},ue=function(e,t,n){if(r=e,!1!==v.iOS||r===undefined||"function"!=typeof r.setData||!0===E.isMsEdge())return!1;try{return e.clearData(),e.setData("text/html",t),e.setData("text/plain",n),e.setData(x(),t),!0}catch(a){return!1}var r},ce=function(e,t,n,r){ue(e.clipboardData,t.html,t.text)?(e.preventDefault(),r()):n(t.html,r)},fe=function(s){return function(e,t){var n=p(e),r=s.dom.create("div",{contenteditable:"false","data-mce-bogus":"all"}),a=s.dom.create("div",{contenteditable:"true"},n);s.dom.setStyles(r,{position:"fixed",top:"0",left:"-3000px",width:"1000px",overflow:"hidden"}),r.appendChild(a),s.dom.add(s.getBody(),r);var i=s.selection.getRng();a.focus();var o=s.dom.createRng();o.selectNodeContents(a),s.selection.setRng(o),setTimeout(function(){s.selection.setRng(i),r.parentNode.removeChild(r),t()},0)}},de=function(e){return{html:e.selection.getContent({contextual:!0}),text:e.selection.getContent({format:"text"})}},me=function(e){return!e.selection.isCollapsed()||!!(t=e).dom.getParent(t.selection.getStart(),"td[data-mce-selected],th[data-mce-selected]",t.getBody());var t},pe=function(e){var t,n;e.on("cut",(t=e,function(e){me(t)&&ce(e,de(t),fe(t),function(){setTimeout(function(){t.execCommand("Delete")},0)})})),e.on("copy",(n=e,function(e){me(n)&&ce(e,de(n),fe(n),le)}))},ge=tinymce.util.Tools.resolve("tinymce.dom.RangeUtils"),ve=function(e,t){return ge.getCaretRangeFromPoint(t.clientX,t.clientY,e.getDoc())},he=function(e,t){e.focus(),e.selection.setRng(t)},be=function(o,s,l){m.shouldBlockDrop(o)&&o.on("dragend dragover draggesture dragdrop drop drag",function(e){e.preventDefault(),e.stopPropagation()}),m.shouldPasteDataImages(o)||o.on("drop",function(e){var t=e.dataTransfer;t&&t.files&&0<t.files.length&&e.preventDefault()}),o.on("drop",function(e){var t,n;if(n=ve(o,e),!e.isDefaultPrevented()&&!l.get()){t=s.getDataTransferItems(e.dataTransfer);var r,a=s.hasContentType(t,x());if((s.hasHtmlOrText(t)&&(!(r=t["text/plain"])||0!==r.indexOf("file://"))||!s.pasteImageData(e,n))&&n&&m.shouldFilterDrop(o)){var i=t["mce-internal"]||t["text/html"]||t["text/plain"];i&&(e.preventDefault(),h.setEditorTimeout(o,function(){o.undoManager.transact(function(){t["mce-internal"]&&o.execCommand("Delete"),he(o,n),i=E.trimHtml(i),t["text/html"]?s.pasteHtml(i,a):s.pasteText(i)})}))}}}),o.on("dragstart",function(e){l.set(!0)}),o.on("dragover dragend",function(e){m.shouldPasteDataImages(o)&&!1===l.get()&&(e.preventDefault(),he(o,ve(o,e))),"dragend"===e.type&&l.set(!1)})},ye=function(e){var t=e.plugins.paste,n=m.getPreProcess(e);n&&e.on("PastePreProcess",function(e){n.call(t,t,e)});var r=m.getPostProcess(e);r&&e.on("PastePostProcess",function(e){r.call(t,t,e)})};function xe(t,n){t.on("PastePreProcess",function(e){e.content=n(t,e.content,e.internal,e.wordContent)})}function Pe(e,t){if(!A.isWordContent(t))return t;var n=[];b.each(e.schema.getBlockElements(),function(e,t){n.push(t)});var r=new RegExp("(?:<br>&nbsp;[\\s\\r\\n]+|<br>)*(<\\/?("+n.join("|")+")[^>]*>)(?:<br>&nbsp;[\\s\\r\\n]+|<br>)*","g");return t=E.filter(t,[[r,"$1"]]),t=E.filter(t,[[/<br><br>/g,"<BR><BR>"],[/<br>/g," "],[/<BR><BR>/g,"<br>"]])}function we(e,t,n,r){if(r||n)return t;var u,a=m.getWebkitStyles(e);if(!1===m.shouldRemoveWebKitStyles(e)||"all"===a)return t;if(a&&(u=a.split(/[, ]/)),u){var c=e.dom,f=e.selection.getNode();t=t.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi,function(e,t,n,r){var a=c.parseStyle(c.decode(n)),i={};if("none"===u)return t+r;for(var o=0;o<u.length;o++){var s=a[u[o]],l=c.getStyle(f,u[o],!0);/color/.test(u[o])&&(s=c.toHex(s),l=c.toHex(l)),l!==s&&(i[u[o]]=s)}return(i=c.serializeStyle(i,"span"))?t+' style="'+i+'"'+r:t+r})}else t=t.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi,"$1$3");return t=t.replace(/(<[^>]+) data-mce-style="([^"]+)"([^>]*>)/gi,function(e,t,n,r){return t+' style="'+n+'"'+r})}function _e(n,e){n.$("a",e).find("font,u").each(function(e,t){n.dom.remove(t,!0)})}var De=function(e){var t,n;v.webkit&&xe(e,we),v.ie&&(xe(e,Pe),n=_e,(t=e).on("PastePostProcess",function(e){n(t,e.node)}))},Te=function(e,t,n){var r=n.control;r.active("text"===t.pasteFormat.get()),e.on("PastePlainTextToggle",function(e){r.active(e.state)})},Ce=function(e,t){var n=function(r){for(var a=[],e=1;e<arguments.length;e++)a[e-1]=arguments[e];return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=a.concat(e);return r.apply(null,n)}}(Te,e,t);e.addButton("pastetext",{active:!1,icon:"pastetext",tooltip:"Paste as text",cmd:"mceTogglePlainTextPaste",onPostRender:n}),e.addMenuItem("pastetext",{text:"Paste as text",selectable:!0,active:t.pasteFormat,cmd:"mceTogglePlainTextPaste",onPostRender:n})};t.add("paste",function(e){if(!1===o(e)){var t=u(!1),n=u(!1),r=u(m.isPasteAsTextEnabled(e)?"text":"html"),a=se(e,r),i=De(e);return Ce(e,a),c(e,a,t),ye(e),pe(e),be(e,a,n),s(a,i)}})}();