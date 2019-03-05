/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.0.2 (2019-03-05)
 */
!function(s){"use strict";var e,n,t,r,i=tinymce.util.Tools.resolve("tinymce.PluginManager"),o=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]},h=function(e){return function(){return e}},a=function(e){return e},u=h(!1),c=h(!0),l=u,f=c,d=function(){return m},m=(r={fold:function(e,n){return e()},is:l,isSome:l,isNone:f,getOr:t=function(e){return e},getOrThunk:n=function(e){return e()},getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:function(){return null},getOrUndefined:function(){return undefined},or:t,orThunk:n,map:d,ap:d,each:function(){},bind:d,flatten:d,exists:l,forall:f,filter:d,equals:e=function(e){return e.isNone()},equals_:e,toArray:function(){return[]},toString:h("none()")},Object.freeze&&Object.freeze(r),r),g=function(t){var e=function(){return t},n=function(){return i},r=function(e){return e(t)},i={fold:function(e,n){return n(t)},is:function(e){return t===e},isSome:f,isNone:l,getOr:e,getOrThunk:e,getOrDie:e,getOrNull:e,getOrUndefined:e,or:n,orThunk:n,map:function(e){return g(e(t))},ap:function(e){return e.fold(d,function(e){return g(e(t))})},each:function(e){e(t)},bind:r,flatten:e,exists:r,forall:r,filter:function(e){return e(t)?i:m},equals:function(e){return e.is(t)},equals_:function(e,n){return e.fold(l,function(e){return n(t,e)})},toArray:function(){return[t]},toString:function(){return"some("+t+")"}};return i},y={some:g,none:d,from:function(e){return null===e||e===undefined?m:g(e)}},p=function(n){return function(e){return function(e){if(null===e)return"null";var n=typeof e;return"object"===n&&Array.prototype.isPrototypeOf(e)?"array":"object"===n&&String.prototype.isPrototypeOf(e)?"string":n}(e)===n}},w=p("string"),v=p("object"),b=p("function"),O=p("number"),S=function(e,n){for(var t=0,r=e.length;t<r;t++)n(e[t],t,e)},N=Array.prototype.push,x=function(e){for(var n=[],t=0,r=e.length;t<r;++t){if(!Array.prototype.isPrototypeOf(e[t]))throw new Error("Arr.flatten item "+t+" was not an array, input: "+e);N.apply(n,e[t])}return n},T=(Array.prototype.slice,b(Array.from)&&Array.from,function(){return(T=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e}).apply(this,arguments)}),E=function(e){var t=y.none(),n=[],r=function(e){i()?a(e):n.push(e)},i=function(){return t.isSome()},o=function(e){S(e,a)},a=function(n){t.each(function(e){setTimeout(function(){n(e)},0)})};return e(function(e){t=y.some(e),o(n),n=[]}),{get:r,map:function(t){return E(function(n){r(function(e){n(t(e))})})},isReady:i}},D={nu:E,pure:function(n){return E(function(e){e(n)})}},A=function(n){var e=function(e){var r;n((r=e,function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=this;setTimeout(function(){r.apply(t,e)},0)}))},t=function(){return D.nu(e)};return{map:function(r){return A(function(t){e(function(e){var n=r(e);t(n)})})},bind:function(t){return A(function(n){e(function(e){t(e).get(n)})})},anonBind:function(t){return A(function(n){e(function(e){t.get(n)})})},toLazy:t,toCached:function(){var n=null;return A(function(e){null===n&&(n=t()),n.get(e)})},get:e}},C={nu:A,pure:function(n){return A(function(e){e(n)})}},_=function(t){return{is:function(e){return t===e},isValue:c,isError:u,getOr:h(t),getOrThunk:h(t),getOrDie:h(t),or:function(e){return _(t)},orThunk:function(e){return _(t)},fold:function(e,n){return n(t)},map:function(e){return _(e(t))},mapError:function(e){return _(t)},each:function(e){e(t)},bind:function(e){return e(t)},exists:function(e){return e(t)},forall:function(e){return e(t)},toOption:function(){return y.some(t)}}},I=function(t){return{is:u,isValue:u,isError:c,getOr:a,getOrThunk:function(e){return e()},getOrDie:function(){return e=String(t),function(){throw new Error(e)}();var e},or:function(e){return e},orThunk:function(e){return e()},fold:function(e,n){return e(t)},map:function(e){return I(t)},mapError:function(e){return I(e(t))},each:o,bind:function(e){return I(t)},exists:u,forall:c,toOption:y.none}},R={value:_,error:I},L=function(o){return T({},o,{toCached:function(){return L(o.toCached())},bindFuture:function(n){return L(o.bind(function(e){return e.fold(function(e){return C.pure(R.error(e))},function(e){return n(e)})}))},bindResult:function(n){return L(o.map(function(e){return e.bind(n)}))},mapResult:function(n){return L(o.map(function(e){return e.map(n)}))},mapError:function(n){return L(o.map(function(e){return e.mapError(n)}))},foldResult:function(n,t){return o.map(function(e){return e.fold(n,t)})},withTimeout:function(e,i){return L(C.nu(function(n){var t=!1,r=window.setTimeout(function(){t=!0,n(R.error(i()))},e);o.get(function(e){t||(window.clearTimeout(r),n(e))})}))}})},U=function(e){return L(C.nu(e))},P=U,k=Object.prototype.hasOwnProperty,M=function(a){return function(){for(var e=new Array(arguments.length),n=0;n<e.length;n++)e[n]=arguments[n];if(0===e.length)throw new Error("Can't merge zero objects");for(var t={},r=0;r<e.length;r++){var i=e[r];for(var o in i)k.call(i,o)&&(t[o]=a(t[o],i[o]))}return t}},j=M(function(e,n){return v(e)&&v(n)?j(e,n):n}),z=M(function(e,n){return n}),B="undefined"!=typeof window?window:Function("return this;")(),F=function(e,n){return function(e,n){for(var t=n!==undefined&&null!==n?n:B,r=0;r<e.length&&t!==undefined&&null!==t;++r)t=t[e[r]];return t}(e.split("."),n)},H={getOrDie:function(e,n){var t=F(e,n);if(t===undefined||null===t)throw e+" not available on this browser";return t}},W=function(){return H.getOrDie("URL")},G=function(e){return W().createObjectURL(e)},X=function(e){W().revokeObjectURL(e)},$=function(e){var n=e.imageList.map(function(e){return{name:"images",type:"selectbox",label:"Image list",items:e}}),t=e.classList.map(function(e){return{name:"classes",type:"selectbox",label:"Class",items:e}});return x([[{name:"src",type:"urlinput",filetype:"image",label:"Source"}],n.toArray(),e.hasDescription?[{name:"alt",type:"input",label:"Image description"}]:[],e.hasImageTitle?[{name:"title",type:"input",label:"Image title"}]:[],e.hasDimensions?[{name:"dimensions",type:"sizeinput"}]:[],[{type:"grid",columns:2,items:x([t.toArray(),e.hasImageCaption?[{type:"label",label:"Caption",items:[{type:"checkbox",name:"caption",label:"Show caption"}]}]:[]])}]])},q=function(e){return{title:"General",items:$(e)}},V=$,J=tinymce.util.Tools.resolve("tinymce.util.Promise"),Y=tinymce.util.Tools.resolve("tinymce.util.Tools"),Z=tinymce.util.Tools.resolve("tinymce.util.XHR"),K=function(e){return!1!==e.settings.image_dimensions},Q=function(e){return!0===e.settings.image_advtab},ee=function(e){return e.getParam("image_prepend_url","")},ne=function(e){return e.getParam("image_class_list")},te=function(e){return!1!==e.settings.image_description},re=function(e){return!0===e.settings.image_title},ie=function(e){return!0===e.settings.image_caption},oe=function(e){return e.getParam("image_list",!1)},ae=function(e){return!!e.getParam("images_upload_url",!1)},ue=function(e){return!!e.getParam("images_upload_handler",!1)},se=function(e){return e.getParam("images_upload_url")},ce=function(e){return e.getParam("images_upload_handler")},le=function(e){return e.getParam("images_upload_base_path")},fe=function(e){return e.getParam("images_upload_credentials")},de=function(e,n){return Math.max(parseInt(e,10),parseInt(n,10))},me=function(e,n){var t=s.document.createElement("img");function r(e){t.parentNode&&t.parentNode.removeChild(t),n(e)}t.onload=function(){var e={width:de(t.width,t.clientWidth),height:de(t.height,t.clientHeight)};r(R.value(e))},t.onerror=function(){r(R.error(undefined))};var i=t.style;i.visibility="hidden",i.position="fixed",i.bottom=i.left="0px",i.width=i.height="auto",s.document.body.appendChild(t),t.src=e},ge=function(e){return e&&(e=e.replace(/px$/,"")),e},pe=function(e){return 0<e.length&&/^[0-9]+$/.test(e)&&(e+="px"),e},he=function(e){if(e.margin){var n=String(e.margin).split(" ");switch(n.length){case 1:e["margin-top"]=e["margin-top"]||n[0],e["margin-right"]=e["margin-right"]||n[0],e["margin-bottom"]=e["margin-bottom"]||n[0],e["margin-left"]=e["margin-left"]||n[0];break;case 2:e["margin-top"]=e["margin-top"]||n[0],e["margin-right"]=e["margin-right"]||n[1],e["margin-bottom"]=e["margin-bottom"]||n[0],e["margin-left"]=e["margin-left"]||n[1];break;case 3:e["margin-top"]=e["margin-top"]||n[0],e["margin-right"]=e["margin-right"]||n[1],e["margin-bottom"]=e["margin-bottom"]||n[2],e["margin-left"]=e["margin-left"]||n[1];break;case 4:e["margin-top"]=e["margin-top"]||n[0],e["margin-right"]=e["margin-right"]||n[1],e["margin-bottom"]=e["margin-bottom"]||n[2],e["margin-left"]=e["margin-left"]||n[3]}delete e.margin}return e},ve=function(e,n){var t=oe(e);"string"==typeof t?Z.send({url:t,success:function(e){n(JSON.parse(e))}}):"function"==typeof t?t(n):n(t)},be=function(e,n,t){function r(){t.onload=t.onerror=null,e.selection&&(e.selection.select(t),e.nodeChanged())}t.onload=function(){n.width||n.height||!K(e)||e.dom.setAttribs(t,{width:t.clientWidth,height:t.clientHeight}),r()},t.onerror=r},ye=function(i){return new J(function(e,n){var t=function r(){return new(H.getOrDie("FileReader"))}();t.onload=function(){e(t.result)},t.onerror=function(){n(t.error.message)},t.readAsDataURL(i)})},we=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils").DOM,Oe=function(e){return e.style.marginLeft&&e.style.marginRight&&e.style.marginLeft===e.style.marginRight?ge(e.style.marginLeft):""},Se=function(e){return e.style.marginTop&&e.style.marginBottom&&e.style.marginTop===e.style.marginBottom?ge(e.style.marginTop):""},Ne=function(e){return e.style.borderWidth?ge(e.style.borderWidth):""},xe=function(e,n){return e.hasAttribute(n)?e.getAttribute(n):""},Te=function(e,n){return e.style[n]?e.style[n]:""},Ee=function(e){return null!==e.parentNode&&"FIGURE"===e.parentNode.nodeName},De=function(e,n,t){e.setAttribute(n,t)},Ae=function(e){var n,t,r,i;Ee(e)?(i=(r=e).parentNode,we.insertAfter(r,i),we.remove(i)):(n=e,t=we.create("figure",{"class":"image"}),we.insertAfter(t,n),t.appendChild(n),t.appendChild(we.create("figcaption",{contentEditable:!0},"Caption")),t.contentEditable="false")},Ce=function(e,n){var t=e.getAttribute("style"),r=n(null!==t?t:"");0<r.length?(e.setAttribute("style",r),e.setAttribute("data-mce-style",r)):e.removeAttribute("style")},_e=function(e,r){return function(e,n,t){e.style[n]?(e.style[n]=pe(t),Ce(e,r)):De(e,n,t)}},Ie=function(e,n){return e.style[n]?ge(e.style[n]):xe(e,n)},Re=function(e,n){var t=pe(n);e.style.marginLeft=t,e.style.marginRight=t},Le=function(e,n){var t=pe(n);e.style.marginTop=t,e.style.marginBottom=t},Ue=function(e,n){var t=pe(n);e.style.borderWidth=t},Pe=function(e,n){e.style.borderStyle=n},ke=function(e){return"FIGURE"===e.nodeName},Me=function(e,n){var t=s.document.createElement("img");return De(t,"style",n.style),(Oe(t)||""!==n.hspace)&&Re(t,n.hspace),(Se(t)||""!==n.vspace)&&Le(t,n.vspace),(Ne(t)||""!==n.border)&&Ue(t,n.border),(Te(t,"borderStyle")||""!==n.borderStyle)&&Pe(t,n.borderStyle),e(t.getAttribute("style"))},je=function(e,n){return{src:xe(n,"src"),alt:xe(n,"alt"),title:xe(n,"title"),width:Ie(n,"width"),height:Ie(n,"height"),"class":xe(n,"class"),style:e(xe(n,"style")),caption:Ee(n),hspace:Oe(n),vspace:Se(n),border:Ne(n),borderStyle:Te(n,"borderStyle")}},ze=function(e,n,t,r,i){t[r]!==n[r]&&i(e,r,t[r])},Be=function(r,i){return function(e,n,t){r(e,t),Ce(e,i)}},Fe=function(e,n,t){var r=je(e,t);ze(t,r,n,"caption",function(e,n,t){return Ae(e)}),ze(t,r,n,"src",De),ze(t,r,n,"alt",De),ze(t,r,n,"title",De),ze(t,r,n,"width",_e(0,e)),ze(t,r,n,"height",_e(0,e)),ze(t,r,n,"class",De),ze(t,r,n,"style",Be(function(e,n){return De(e,"style",n)},e)),ze(t,r,n,"hspace",Be(Re,e)),ze(t,r,n,"vspace",Be(Le,e)),ze(t,r,n,"border",Be(Ue,e)),ze(t,r,n,"borderStyle",Be(Pe,e))},He=function(e,n){var t=e.dom.styles.parse(n),r=he(t),i=e.dom.styles.parse(e.dom.styles.serialize(r));return e.dom.styles.serialize(i)},We=function(e){var n=e.selection.getNode(),t=e.dom.getParent(n,"figure.image");return t?e.dom.select("img",t)[0]:n&&("IMG"!==n.nodeName||n.getAttribute("data-mce-object")||n.getAttribute("data-mce-placeholder"))?null:n},Ge=function(n,e){var t=n.dom,r=t.getParent(e.parentNode,function(e){return n.schema.getTextBlockElements()[e.nodeName]},n.getBody());return r?t.split(r,e):e},Xe=function(n,e){var t=function(e,n){var t=s.document.createElement("img");if(Fe(e,z(n,{caption:!1}),t),De(t,"alt",n.alt),n.caption){var r=we.create("figure",{"class":"image"});return r.appendChild(t),r.appendChild(we.create("figcaption",{contentEditable:!0},"Caption")),r.contentEditable="false",r}return t}(function(e){return He(n,e)},e);n.dom.setAttrib(t,"data-mce-id","__mcenew"),n.focus(),n.selection.setContent(t.outerHTML);var r=n.dom.select('*[data-mce-id="__mcenew"]')[0];if(n.dom.setAttrib(r,"data-mce-id",null),ke(r)){var i=Ge(n,r);n.selection.select(i)}else n.selection.select(r)},$e=function(e,n){var t=We(e);t?n.src?function(n,e){var t,r=We(n);if(Fe(function(e){return He(n,e)},e,r),t=r,n.dom.setAttrib(t,"src",t.getAttribute("src")),ke(r.parentNode)){var i=r.parentNode;Ge(n,i),n.selection.select(r.parentNode)}else n.selection.select(r),be(n,e,r)}(e,n):function(e,n){if(n){var t=e.dom.is(n.parentNode,"figure.image")?n.parentNode:n;e.dom.remove(t),e.focus(),e.nodeChanged(),e.dom.isEmpty(e.getBody())&&(e.setContent(""),e.selection.setCursorLocation())}}(e,t):n.src&&Xe(e,n)},qe=function(e){return w(e.value)?e.value:""},Ve=function(e,i){var o=[];return Y.each(e,function(e){var n=w(e.text)?e.text:w(e.title)?e.title:"";if(e.menu!==undefined){var t=Ve(e.menu,i);o.push({text:n,items:t})}else{var r=i(e);o.push({text:n,value:r})}}),o},Je=function(n){return void 0===n&&(n=qe),function(e){return e?y.from(e).map(function(e){return Ve(e,n)}):y.none()}},Ye=function(e,t){return function(e,n){for(var t=0;t<e.length;t++){var r=n(e[t],t);if(r.isSome())return r}return y.none()}(e,function(e){return n=e,Object.prototype.hasOwnProperty.call(n,"items")?Ye(e.items,t):e.value===t?y.some(e):y.none();var n})},Ze=Je,Ke=function(e){return Je(qe)(e)},Qe=function(e,n){return e.bind(function(e){return Ye(e,n)})},en=function(){};function nn(u){var n=function(e,r,i,n){var o,t;(o=function a(){return new(H.getOrDie("XMLHttpRequest"))}()).open("POST",u.url),o.withCredentials=u.credentials,o.upload.onprogress=function(e){n(e.loaded/e.total*100)},o.onerror=function(){i("Image upload failed due to a XHR Transport error. Code: "+o.status)},o.onload=function(){var e,n,t;o.status<200||300<=o.status?i("HTTP Error: "+o.status):(e=JSON.parse(o.responseText))&&"string"==typeof e.location?r((n=u.basePath,t=e.location,n?n.replace(/\/$/,"")+"/"+t.replace(/^\//,""):t)):i("Invalid JSON: "+o.responseText)},(t=new s.FormData).append("file",e.blob(),e.filename()),o.send(t)};return u=Y.extend({credentials:!1,handler:n},u),{upload:function(e){return u.url||u.handler!==n?(r=e,i=u.handler,new J(function(e,n){try{i(r,e,n,en)}catch(t){n(t.message)}})):J.reject("Upload url missing from the settings.");var r,i}}}var tn,rn,on,an=function(e){return{title:"Advanced",items:[{type:"input",label:"Style",name:"style"},{type:"grid",columns:2,items:[{type:"input",label:"Vertical space",name:"vspace"},{type:"input",label:"Horizontal space",name:"hspace"},{type:"input",label:"Border width",name:"border"},{type:"selectbox",name:"borderstyle",label:"Border style",items:[{text:"Select...",value:""},{text:"Solid",value:"solid"},{text:"Dotted",value:"dotted"},{text:"Dashed",value:"dashed"},{text:"Double",value:"double"},{text:"Groove",value:"groove"},{text:"Ridge",value:"ridge"},{text:"Inset",value:"inset"},{text:"Outset",value:"outset"},{text:"None",value:"none"},{text:"Hidden",value:"hidden"}]}]}]}},un=function(t){var n,e,r=Ze(function(e){return t.convertURL(e.value||e.url,"src")}),i=C.nu(function(n){ve(t,function(e){n(r(e).map(function(e){return x([[{text:"None",value:""}],e])}))})}),o=Ke(ne(t)),a=Q(t),u=ae(t),s=ue(t),c=(e=We(n=t))?je(function(e){return He(n,e)},e):{src:"",alt:"",title:"",width:"",height:"","class":"",style:"",caption:!1,hspace:"",vspace:"",border:"",borderStyle:""},l=te(t),f=re(t),d=K(t),m=ie(t),g=se(t),p=le(t),h=fe(t),v=ce(t),b=y.some(ee(t)).filter(function(e){return w(e)&&0<e.length});return i.map(function(e){return{image:c,imageList:e,classList:o,hasAdvTab:a,hasUploadUrl:u,hasUploadHandler:s,hasDescription:l,hasImageTitle:f,hasDimensions:d,hasImageCaption:m,url:g,basePath:p,credentials:h,handler:v,prependURL:b}})},sn=function(e){return{title:"Upload",items:[{type:"dropzone",name:"fileinput"}]}},cn=function(e){return{src:{value:e.src,meta:{}},images:e.src,alt:e.alt,title:e.title,dimensions:{width:e.width,height:e.height},classes:e["class"],caption:e.caption,style:e.style,vspace:e.vspace,border:e.border,hspace:e.hspace,borderstyle:e.borderStyle,fileinput:[]}},ln=function(e){return{src:e.src.value,alt:e.alt,title:e.title,width:e.dimensions.width,height:e.dimensions.height,"class":e.classes,style:e.style,caption:e.caption,hspace:e.hspace,vspace:e.vspace,border:e.border,borderStyle:e.borderstyle}},fn=function(e,n){var t,r,i=n.getData();(t=e,r=i.src.value,/^(?:[a-zA-Z]+:)?\/\//.test(r)?y.none():t.prependURL.bind(function(e){return r.substring(0,e.length)!==e?y.some(e+r):y.none()})).each(function(e){n.setData({src:{value:e,meta:i.src.meta}})})},dn=function(e,n){(function(e,n){var t=n.src.meta;if(t===undefined)return y.none();var r=j({},n);return e.hasDescription&&w(t.alt)&&(r.alt=t.alt),e.hasImageTitle&&w(t.title)&&(r.title=t.title),e.hasDimensions&&(w(t.width)&&(r.dimensions.width=t.width),w(t.height)&&(r.dimensions.height=t.height)),w(t["class"])&&Qe(e.classList,t["class"]).each(function(e){r.classes=e.value}),e.hasAdvTab&&(w(t.vspace)&&(r.vspace=t.vspace),w(t.border)&&(r.border=t.border),w(t.hspace)&&(r.hspace=t.hspace),w(t.borderstyle)&&(r.borderstyle=t.borderstyle)),y.some(r)})(e,n.getData()).each(function(e){return n.setData(e)})},mn=function(e,n,t,r){var i,o,a,u,s,c,l,f,d,m,g,p;fn(n,r),dn(n,r),i=e,o=n,a=t,s=(u=r).getData(),c=s.src.value,(l=s.src.meta||{}).width||l.height||!o.hasDimensions||i.imageSize(c).get(function(e){e.each(function(e){a.open&&u.setData({dimensions:e})})}),f=n,d=t,g=(m=r).getData(),p=Qe(f.imageList,g.src.value),d.prevImage=p,m.setData({images:p.map(function(e){return e.value}).getOr("")})},gn=function(e,n,t){var r,i,o,a,u,s=he(e(t.style)),c=j({},t);return c.vspace=(r=s)["margin-top"]&&r["margin-bottom"]&&r["margin-top"]===r["margin-bottom"]?ge(String(r["margin-top"])):"",c.hspace=(i=s)["margin-right"]&&i["margin-left"]&&i["margin-right"]===i["margin-left"]?ge(String(i["margin-right"])):"",c.border=(o=s)["border-width"]?ge(String(o["border-width"])):"",c.borderstyle=(a=s)["border-style"]?String(a["border-style"]):"",c.style=(u=n)(e(u(s))),c},pn=function(a,u,s,c){var e,n=c.getData();c.block("Uploading image"),(e=n.fileinput,0===e.length?y.none():y.some(e[0])).fold(function(){c.unblock()},function(t){var r=G(t),i=nn({url:u.url,basePath:u.basePath,credentials:u.credentials,handler:u.handler}),o=function(){c.unblock(),X(r)};ye(t).then(function(e){var n=a.createBlobCache(t,r,e);i.upload(n).then(function(e){c.setData({src:{value:e,meta:{}}}),c.showTab("General"),mn(a,u,s,c),o()})["catch"](function(e){o(),a.alertErr(c,e)})})})},hn=function(h,v,b){return function(e,n){var t,r,i,o,a,u,s,c,l,f,d,m,g,p;"src"===n.name?mn(h,v,b,e):"images"===n.name?(l=h,f=v,d=b,g=(m=e).getData(),(p=Qe(f.imageList,g.images)).each(function(e){""===g.alt||d.prevImage.map(function(e){return e.text===g.alt}).getOr(!1)?""===e.value?m.setData({src:e,alt:d.prevAlt}):m.setData({src:e,alt:e.text}):m.setData({src:e})}),d.prevImage=p,mn(l,f,d,m)):"alt"===n.name?b.prevAlt=e.getData().alt:"style"===n.name?(a=h,s=(u=e).getData(),c=gn(a.parseStyle,a.serializeStyle,s),u.setData(c)):"vspace"===n.name||"hspace"===n.name||"border"===n.name||"borderstyle"===n.name?(t=h,r=e,i=j(cn(v.image),r.getData()),o=Me(t.normalizeCss,ln(i)),r.setData({style:o})):"fileinput"===n.name&&pn(h,v,b,e)}},vn=function(o){return function(e){var n,t,r,i={prevImage:Qe((n=e).imageList,n.image.src),prevAlt:n.image.alt,open:!0};return{title:"Insert/Edit Image",size:"normal",body:(r=e,r.hasAdvTab||r.hasUploadUrl||r.hasUploadHandler?{type:"tabpanel",tabs:x([[q(r)],r.hasAdvTab?[an(r)]:[],r.hasUploadUrl||r.hasUploadHandler?[sn(r)]:[]])}:{type:"panel",items:V(r)}),buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:cn(e.image),onSubmit:o.onSubmit(e),onChange:hn(o,e,i),onClose:(t=i,function(){t.open=!1})}}},bn=function(n){var t,r,i,o,a,u,s,e={onSubmit:(s=n,function(t){return function(e){var n=j(cn(t.image),e.getData());s.undoManager.transact(function(){$e(s,ln(n))}),s.editorUpload.uploadImagesAuto(),e.close()}}),imageSize:(u=n,function(e){return P(function(t){me(u.documentBaseURI.toAbsolute(e),function(e){var n=e.bind(function(e){return(w(e.width)||O(e.width))&&(w(e.height)||O(e.height))?R.value({width:String(e.width),height:String(e.height)}):R.error(undefined)});t(n)})})}),createBlobCache:(a=n,function(e,n,t){return a.editorUpload.blobCache.create({blob:e,blobUri:n,name:e.name?e.name.replace(/\.[^\.]+$/,""):null,base64:t.split(",")[1]})}),alertErr:(o=n,function(e,n){o.windowManager.alert(n,e.close)}),normalizeCss:(i=n,function(e){return He(i,e)}),parseStyle:(r=n,function(e){return r.dom.parseStyle(e)}),serializeStyle:(t=n,function(e,n){return t.dom.serializeStyle(e,n)})};return{open:function(){return un(n).map(vn(e)).get(function(e){n.windowManager.open(e)})}}},yn=function(e){e.addCommand("mceImage",bn(e).open)},wn=function(o){return function(e){for(var n,t,r=e.length,i=function(e){e.attr("contenteditable",o?"true":null)};r--;)n=e[r],(t=n.attr("class"))&&/\bimage\b/.test(t)&&(n.attr("contenteditable",o?"false":null),Y.each(n.getAll("figcaption"),i))}},On=function(e){e.on("preInit",function(){e.parser.addNodeFilter("figure",wn(!0)),e.serializer.addNodeFilter("figure",wn(!1))})},Sn=function(e){if(null===e||e===undefined)throw new Error("Node cannot be null or undefined");return{dom:h(e)}},Nn={fromHtml:function(e,n){var t=(n||s.document).createElement("div");if(t.innerHTML=e,!t.hasChildNodes()||1<t.childNodes.length)throw s.console.error("HTML does not have a single root node",e),new Error("HTML must have a single root node");return Sn(t.childNodes[0])},fromTag:function(e,n){var t=(n||s.document).createElement(e);return Sn(t)},fromText:function(e,n){var t=(n||s.document).createTextNode(e);return Sn(t)},fromDom:Sn,fromPoint:function(e,n,t){var r=e.dom();return y.from(r.elementFromPoint(n,t)).map(Sn)}},xn=(s.Node.ATTRIBUTE_NODE,s.Node.CDATA_SECTION_NODE,s.Node.COMMENT_NODE,s.Node.DOCUMENT_NODE,s.Node.DOCUMENT_TYPE_NODE,s.Node.DOCUMENT_FRAGMENT_NODE,s.Node.ELEMENT_NODE,s.Node.TEXT_NODE,s.Node.PROCESSING_INSTRUCTION_NODE,s.Node.ENTITY_REFERENCE_NODE,s.Node.ENTITY_NODE,s.Node.NOTATION_NODE,function(e,n){var t=function(e,n){for(var t=0;t<e.length;t++){var r=e[t];if(r.test(n))return r}return undefined}(e,n);if(!t)return{major:0,minor:0};var r=function(e){return Number(n.replace(t,"$"+e))};return En(r(1),r(2))}),Tn=function(){return En(0,0)},En=function(e,n){return{major:e,minor:n}},Dn={nu:En,detect:function(e,n){var t=String(n).toLowerCase();return 0===e.length?Tn():xn(e,t)},unknown:Tn},An="Firefox",Cn=function(e,n){return function(){return n===e}},_n=function(e){var n=e.current;return{current:n,version:e.version,isEdge:Cn("Edge",n),isChrome:Cn("Chrome",n),isIE:Cn("IE",n),isOpera:Cn("Opera",n),isFirefox:Cn(An,n),isSafari:Cn("Safari",n)}},In={unknown:function(){return _n({current:undefined,version:Dn.unknown()})},nu:_n,edge:h("Edge"),chrome:h("Chrome"),ie:h("IE"),opera:h("Opera"),firefox:h(An),safari:h("Safari")},Rn="Windows",Ln="Android",Un="Solaris",Pn="FreeBSD",kn=function(e,n){return function(){return n===e}},Mn=function(e){var n=e.current;return{current:n,version:e.version,isWindows:kn(Rn,n),isiOS:kn("iOS",n),isAndroid:kn(Ln,n),isOSX:kn("OSX",n),isLinux:kn("Linux",n),isSolaris:kn(Un,n),isFreeBSD:kn(Pn,n)}},jn={unknown:function(){return Mn({current:undefined,version:Dn.unknown()})},nu:Mn,windows:h(Rn),ios:h("iOS"),android:h(Ln),linux:h("Linux"),osx:h("OSX"),solaris:h(Un),freebsd:h(Pn)},zn=function(e,n){var t=String(n).toLowerCase();return function(e,n){for(var t=0,r=e.length;t<r;t++){var i=e[t];if(n(i,t,e))return y.some(i)}return y.none()}(e,function(e){return e.search(t)})},Bn=function(e,t){return zn(e,t).map(function(e){var n=Dn.detect(e.versionRegexes,t);return{current:e.name,version:n}})},Fn=function(e,t){return zn(e,t).map(function(e){var n=Dn.detect(e.versionRegexes,t);return{current:e.name,version:n}})},Hn=function(e,n){return-1!==e.indexOf(n)},Wn=/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,Gn=function(n){return function(e){return Hn(e,n)}},Xn=[{name:"Edge",versionRegexes:[/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],search:function(e){return Hn(e,"edge/")&&Hn(e,"chrome")&&Hn(e,"safari")&&Hn(e,"applewebkit")}},{name:"Chrome",versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/,Wn],search:function(e){return Hn(e,"chrome")&&!Hn(e,"chromeframe")}},{name:"IE",versionRegexes:[/.*?msie\ ?([0-9]+)\.([0-9]+).*/,/.*?rv:([0-9]+)\.([0-9]+).*/],search:function(e){return Hn(e,"msie")||Hn(e,"trident")}},{name:"Opera",versionRegexes:[Wn,/.*?opera\/([0-9]+)\.([0-9]+).*/],search:Gn("opera")},{name:"Firefox",versionRegexes:[/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],search:Gn("firefox")},{name:"Safari",versionRegexes:[Wn,/.*?cpu os ([0-9]+)_([0-9]+).*/],search:function(e){return(Hn(e,"safari")||Hn(e,"mobile/"))&&Hn(e,"applewebkit")}}],$n=[{name:"Windows",search:Gn("win"),versionRegexes:[/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]},{name:"iOS",search:function(e){return Hn(e,"iphone")||Hn(e,"ipad")},versionRegexes:[/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,/.*cpu os ([0-9]+)_([0-9]+).*/,/.*cpu iphone os ([0-9]+)_([0-9]+).*/]},{name:"Android",search:Gn("android"),versionRegexes:[/.*?android\ ?([0-9]+)\.([0-9]+).*/]},{name:"OSX",search:Gn("os x"),versionRegexes:[/.*?os\ x\ ?([0-9]+)_([0-9]+).*/]},{name:"Linux",search:Gn("linux"),versionRegexes:[]},{name:"Solaris",search:Gn("sunos"),versionRegexes:[]},{name:"FreeBSD",search:Gn("freebsd"),versionRegexes:[]}],qn={browsers:h(Xn),oses:h($n)},Vn=function(e){var n,t,r,i,o,a,u,s,c,l,f,d=qn.browsers(),m=qn.oses(),g=Bn(d,e).fold(In.unknown,In.nu),p=Fn(m,e).fold(jn.unknown,jn.nu);return{browser:g,os:p,deviceType:(t=g,r=e,i=(n=p).isiOS()&&!0===/ipad/i.test(r),o=n.isiOS()&&!i,a=n.isAndroid()&&3===n.version.major,u=n.isAndroid()&&4===n.version.major,s=i||a||u&&!0===/mobile/i.test(r),c=n.isiOS()||n.isAndroid(),l=c&&!s,f=t.isSafari()&&n.isiOS()&&!1===/safari/i.test(r),{isiPad:h(i),isiPhone:h(o),isTablet:h(s),isPhone:h(l),isTouch:h(c),isAndroid:n.isAndroid,isiOS:n.isiOS,isWebView:h(f)})}},Jn=((tn=function(){var e=s.navigator.userAgent;return Vn(e)},on=!1,function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return on||(on=!0,rn=tn.apply(null,e)),rn}()).browser.isIE(),function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]}("element","offset"),function(o){o.ui.registry.addToggleButton("image",{icon:"image",tooltip:"Insert/edit image",onAction:bn(o).open,onSetup:function(e){return o.selection.selectorChangedWithUnbind("img:not([data-mce-object],[data-mce-placeholder]),figure.image",e.setActive).unbind}}),o.ui.registry.addMenuItem("image",{icon:"image",text:"Image...",onAction:bn(o).open}),o.ui.registry.addContextMenu("image",{update:function(e){return ke(e)||"IMG"===e.nodeName?[(i=e,{text:"Image",icon:"image",onAction:function(){var e,n,t,r=((tn=function(){var e=s.navigator.userAgent;return Vn(e)},on=!1,function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return on||(on=!0,rn=tn.apply(null,e)),rn}()).browser.isIE(),function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]}("element","offset"),e=Nn.fromDom(i),(n=e,t=n.dom(),y.from(t.parentNode).map(Nn.fromDom)).filter(function(e){return"figure"===e.dom().nodeName.toLowerCase()}).getOr(e));o.selection.select(r.dom()),bn(o).open()}})]:[];var i}})});i.add("image",function(e){On(e),Jn(e),yn(e)}),function Yn(){}}(window);