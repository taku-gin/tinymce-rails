!function(){var a={},b=function(b){for(var c=a[b],e=c.deps,f=c.defn,g=e.length,h=new Array(g),i=0;i<g;++i)h[i]=d(e[i]);var j=f.apply(null,h);if(void 0===j)throw"module ["+b+"] returned undefined";c.instance=j},c=function(b,c,d){if("string"!=typeof b)throw"module id must be a string";if(void 0===c)throw"no dependencies for "+b;if(void 0===d)throw"no definition function for "+b;a[b]={deps:c,defn:d,instance:void 0}},d=function(c){var d=a[c];if(void 0===d)throw"module ["+c+"] was undefined";return void 0===d.instance&&b(c),d.instance},e=function(a,b){for(var c=a.length,e=new Array(c),f=0;f<c;++f)e.push(d(a[f]));b.apply(null,b)},f={};f.bolt={module:{api:{define:c,require:e,demand:d}}};var g=c,h=function(a,b){g(a,[],function(){return b})};h("4",tinymce.util.Tools.resolve),g("1",["4"],function(a){return a("tinymce.PluginManager")}),g("2",["4"],function(a){return a("tinymce.util.Tools")}),g("5",["4"],function(a){return a("tinymce.Env")}),g("6",["4"],function(a){return a("tinymce.util.JSON")}),g("7",["4"],function(a){return a("tinymce.util.XHR")}),g("8",["4"],function(a){return a("tinymce.ui.Throbber")}),g("e",["4"],function(a){return a("tinymce.util.Promise")}),h("d",document),g("9",["e","2","d"],function(a,b,c){return function(c){function d(a,b){return a?a.replace(/\/$/,"")+"/"+b.replace(/^\//,""):b}function e(a,b,e,f){var g,h;g=new XMLHttpRequest,g.open("POST",c.url),g.withCredentials=c.credentials,g.upload.onprogress=function(a){f(a.loaded/a.total*100)},g.onerror=function(){e("Image upload failed due to a XHR Transport error. Code: "+g.status)},g.onload=function(){var a;return g.status<200||g.status>=300?void e("HTTP Error: "+g.status):(a=JSON.parse(g.responseText),a&&"string"==typeof a.location?void b(d(c.basePath,a.location)):void e("Invalid JSON: "+g.responseText))},h=new FormData,h.append("file",a.blob(),a.filename()),g.send(h)}function f(b,c){return new a(function(a,d){try{c(b,a,d,i)}catch(a){d(a.message)}})}function g(a){return a===e}function h(b){return!c.url&&g(c.handler)?a.reject("Upload url missng from the settings."):f(b,c.handler)}var i=function(){};return c=b.extend({credentials:!1,handler:e},c),{upload:h}}}),h("b",Math),g("a",["2","b","d"],function(a,b,c){var d=function(a,d){function e(a,b){f.parentNode&&f.parentNode.removeChild(f),d({width:a,height:b})}var f=c.createElement("img");f.onload=function(){e(b.max(f.width,f.clientWidth),b.max(f.height,f.clientHeight))},f.onerror=function(){e()};var g=f.style;g.visibility="hidden",g.position="fixed",g.bottom=g.left=0,g.width=g.height="auto",c.body.appendChild(f),f.src=a},e=function(b,c,d){function e(b,d){return d=d||[],a.each(b,function(a){var b={text:a.text||a.title};a.menu?b.menu=e(a.menu):(b.value=a.value,c(b)),d.push(b)}),d}return e(b,d||[])},f=function(a){return a&&(a=a.replace(/px$/,"")),a},g=function(a){return a.length>0&&/^[0-9]+$/.test(a)&&(a+="px"),a},h=function(a){if(a.margin){var b=a.margin.split(" ");switch(b.length){case 1:a["margin-top"]=a["margin-top"]||b[0],a["margin-right"]=a["margin-right"]||b[0],a["margin-bottom"]=a["margin-bottom"]||b[0],a["margin-left"]=a["margin-left"]||b[0];break;case 2:a["margin-top"]=a["margin-top"]||b[0],a["margin-right"]=a["margin-right"]||b[1],a["margin-bottom"]=a["margin-bottom"]||b[0],a["margin-left"]=a["margin-left"]||b[1];break;case 3:a["margin-top"]=a["margin-top"]||b[0],a["margin-right"]=a["margin-right"]||b[1],a["margin-bottom"]=a["margin-bottom"]||b[2],a["margin-left"]=a["margin-left"]||b[1];break;case 4:a["margin-top"]=a["margin-top"]||b[0],a["margin-right"]=a["margin-right"]||b[1],a["margin-bottom"]=a["margin-bottom"]||b[2],a["margin-left"]=a["margin-left"]||b[3]}delete a.margin}return a};return{getImageSize:d,buildListItems:e,removePixelSuffix:f,addPixelSuffix:g,mergeMargins:h}}),h("c",RegExp),g("3",["5","6","2","7","8","9","a","b","c","d"],function(a,b,c,d,e,f,g,h,i,j){return function(j){function k(a){var c=j.settings.image_list;"string"==typeof c?d.send({url:c,success:function(c){a(b.parse(c))}}):"function"==typeof c?c(a):a(c)}function l(b){function d(){var a=new e(s.getEl()),b=this.value(),c=new f({url:B.images_upload_url,basePath:B.images_upload_base_path,credentials:B.images_upload_credentials,handler:B.images_upload_handler}),d=j.editorUpload.blobCache.create({blob:b,name:b.name?b.name.replace(/\.[^\.]+$/,""):null,base64:"data:image/fake;base64,="}),g=function(){a.hide(),URL.revokeObjectURL(d.blobUri())};return a.show(),c.upload(d).then(function(a){var b=s.find("#src");return b.value(a),s.find("tabpanel")[0].activateTab(0),b.fire("change"),g(),a},function(a){j.windowManager.alert(a),g()})}function k(a){return j.schema.getTextBlockElements()[a.nodeName]}function l(){var a,b,c,d;a=s.find("#width")[0],b=s.find("#height")[0],a&&b&&(c=a.value(),d=b.value(),s.find("#constrain")[0].checked()&&v&&w&&c&&d&&(v!=c?(d=h.round(c/v*d),isNaN(d)||b.value(d)):(c=h.round(d/w*c),isNaN(c)||a.value(c))),v=c,w=d)}function m(){if(j.settings.image_advtab){var a=s.toJSON(),b=A.parseStyle(a.style);b=g.mergeMargins(b),a.vspace&&(b["margin-top"]=b["margin-bottom"]=g.addPixelSuffix(a.vspace)),a.hspace&&(b["margin-left"]=b["margin-right"]=g.addPixelSuffix(a.hspace)),a.border&&(b["border-width"]=g.addPixelSuffix(a.border)),s.find("#style").value(A.serializeStyle(A.parseStyle(A.serializeStyle(b))))}}function n(){if(j.settings.image_advtab){var a=s.toJSON(),b=A.parseStyle(a.style);s.find("#vspace").value(""),s.find("#hspace").value(""),b=g.mergeMargins(b),(b["margin-top"]&&b["margin-bottom"]||b["margin-right"]&&b["margin-left"])&&(b["margin-top"]===b["margin-bottom"]?s.find("#vspace").value(g.removePixelSuffix(b["margin-top"])):s.find("#vspace").value(""),b["margin-right"]===b["margin-left"]?s.find("#hspace").value(g.removePixelSuffix(b["margin-right"])):s.find("#hspace").value("")),b["border-width"]&&s.find("#border").value(g.removePixelSuffix(b["border-width"])),s.find("#style").value(A.serializeStyle(A.parseStyle(A.serializeStyle(b))))}}function o(a){function b(){a.onload=a.onerror=null,j.selection&&(j.selection.select(a),j.nodeChanged())}a.onload=function(){z.width||z.height||!C||A.setAttribs(a,{width:a.clientWidth,height:a.clientHeight}),b()},a.onerror=b}function p(){var a,b;m(),l(),z=c.extend(z,s.toJSON()),z.alt||(z.alt=""),z.title||(z.title=""),""===z.width&&(z.width=null),""===z.height&&(z.height=null),z.style||(z.style=null),z={src:z.src,alt:z.alt,title:z.title,width:z.width,height:z.height,style:z.style,caption:z.caption,"class":z["class"]},j.undoManager.transact(function(){if(!z.src)return void(t&&(A.remove(t),j.focus(),j.nodeChanged()));if(""===z.title&&(z.title=null),t?A.setAttribs(t,z):(z.id="__mcenew",j.focus(),j.selection.setContent(A.createHTML("img",z)),t=A.get("__mcenew"),A.setAttrib(t,"id",null)),j.editorUpload.uploadImagesAuto(),z.caption===!1&&A.is(t.parentNode,"figure.image")&&(a=t.parentNode,A.insertAfter(t,a),A.remove(a)),z.caption!==!0)o(t);else if(!A.is(t.parentNode,"figure.image")){b=t,t=t.cloneNode(!0),a=A.create("figure",{"class":"image"}),a.appendChild(t),a.appendChild(A.create("figcaption",{contentEditable:!0},"Caption")),a.contentEditable=!1;var c=A.getParent(b,k);c?A.split(c,b,a):A.replace(a,b),j.selection.select(a)}})}function q(a){var b,d,e,f=a.meta||{};x&&x.value(j.convertURL(this.value(),"src")),c.each(f,function(a,b){s.find("#"+b).value(a)}),f.width||f.height||(b=j.convertURL(this.value(),"src"),d=j.settings.image_prepend_url,e=new i("^(?:[a-z]+:)?//","i"),d&&!e.test(b)&&b.substring(0,d.length)!==d&&(b=d+b),this.value(b),g.getImageSize(j.documentBaseURI.toAbsolute(this.value()),function(a){a.width&&a.height&&C&&(v=a.width,w=a.height,s.find("#width").value(v),s.find("#height").value(w))}))}function r(a){a.meta=s.toJSON()}var s,t,u,v,w,x,y,z={},A=j.dom,B=j.settings,C=B.image_dimensions!==!1;t=j.selection.getNode(),u=A.getParent(t,"figure.image"),u&&(t=A.select("img",u)[0]),t&&("IMG"!=t.nodeName||t.getAttribute("data-mce-object")||t.getAttribute("data-mce-placeholder"))&&(t=null),t&&(v=A.getAttrib(t,"width"),w=A.getAttrib(t,"height"),z={src:A.getAttrib(t,"src"),alt:A.getAttrib(t,"alt"),title:A.getAttrib(t,"title"),"class":A.getAttrib(t,"class"),width:v,height:w,caption:!!u}),b&&(x={type:"listbox",label:"Image list",values:g.buildListItems(b,function(a){a.value=j.convertURL(a.value||a.url,"src")},[{text:"None",value:""}]),value:z.src&&j.convertURL(z.src,"src"),onselect:function(a){var b=s.find("#alt");(!b.value()||a.lastControl&&b.value()==a.lastControl.text())&&b.value(a.control.text()),s.find("#src").value(a.control.value()).fire("change")},onPostRender:function(){x=this}}),j.settings.image_class_list&&(y={name:"class",type:"listbox",label:"Class",values:g.buildListItems(j.settings.image_class_list,function(a){a.value&&(a.textStyle=function(){return j.formatter.getCssText({inline:"img",classes:[a.value]})})})});var D=[{name:"src",type:"filepicker",filetype:"image",label:"Source",autofocus:!0,onchange:q,onbeforecall:r},x];if(j.settings.image_description!==!1&&D.push({name:"alt",type:"textbox",label:"Image description"}),j.settings.image_title&&D.push({name:"title",type:"textbox",label:"Image Title"}),C&&D.push({type:"container",label:"Dimensions",layout:"flex",direction:"row",align:"center",spacing:5,items:[{name:"width",type:"textbox",maxLength:5,size:3,onchange:l,ariaLabel:"Width"},{type:"label",text:"x"},{name:"height",type:"textbox",maxLength:5,size:3,onchange:l,ariaLabel:"Height"},{name:"constrain",type:"checkbox",checked:!0,text:"Constrain proportions"}]}),D.push(y),j.settings.image_caption&&a.ceFalse&&D.push({name:"caption",type:"checkbox",label:"Caption"}),j.settings.image_advtab||j.settings.images_upload_url){var E=[{title:"General",type:"form",items:D}];if(j.settings.image_advtab&&(t&&(t.style.marginLeft&&t.style.marginRight&&t.style.marginLeft===t.style.marginRight&&(z.hspace=g.removePixelSuffix(t.style.marginLeft)),t.style.marginTop&&t.style.marginBottom&&t.style.marginTop===t.style.marginBottom&&(z.vspace=g.removePixelSuffix(t.style.marginTop)),t.style.borderWidth&&(z.border=g.removePixelSuffix(t.style.borderWidth)),z.style=j.dom.serializeStyle(j.dom.parseStyle(j.dom.getAttrib(t,"style")))),E.push({title:"Advanced",type:"form",pack:"start",items:[{label:"Style",name:"style",type:"textbox",onchange:n},{type:"form",layout:"grid",packV:"start",columns:2,padding:0,alignH:["left","right"],defaults:{type:"textbox",maxWidth:50,onchange:m},items:[{label:"Vertical space",name:"vspace"},{label:"Horizontal space",name:"hspace"},{label:"Border",name:"border"}]}]})),j.settings.images_upload_url){var F=".jpg,.jpeg,.png,.gif",G={title:"Upload",type:"form",layout:"flex",direction:"column",align:"stretch",padding:"20 20 20 20",items:[{type:"container",layout:"flex",direction:"column",align:"center",spacing:10,items:[{text:"Browse for an image",type:"browsebutton",accept:F,onchange:d},{text:"OR",type:"label"}]},{text:"Drop an image here",type:"dropzone",accept:F,height:100,onchange:d}]};E.push(G)}s=j.windowManager.open({title:"Insert/edit image",data:z,bodyType:"tabpanel",body:E,onSubmit:p})}else s=j.windowManager.open({title:"Insert/edit image",data:z,body:D,onSubmit:p})}function m(){k(l)}return{open:m}}}),g("0",["1","2","3"],function(a,b,c){return a.add("image",function(a){a.on("preInit",function(){function c(a){var b=a.attr("class");return b&&/\bimage\b/.test(b)}function d(a){return function(d){function e(b){b.attr("contenteditable",a?"true":null)}for(var f,g=d.length;g--;)f=d[g],c(f)&&(f.attr("contenteditable",a?"false":null),b.each(f.getAll("figcaption"),e))}}a.parser.addNodeFilter("figure",d(!0)),a.serializer.addNodeFilter("figure",d(!1))}),a.addButton("image",{icon:"image",tooltip:"Insert/edit image",onclick:c(a).open,stateSelector:"img:not([data-mce-object],[data-mce-placeholder]),figure.image"}),a.addMenuItem("image",{icon:"image",text:"Image",onclick:c(a).open,context:"insert",prependToContext:!0}),a.addCommand("mceImage",c(a).open)}),function(){}}),d("0")()}();