/*!
 * 
 *   Name: dvsa-front-end/development
 *   Version: 1.2.9
 *   Author: Tameem Safi <https://github.com/tameemsafi>
 *   Contributors: Tameem Safi <https://github.com/tameemsafi>, James Nelson <j.nelson@kainos.com>
 *   Timestamp: April 17th 2018, 11:38:14 am
 *   Source: https://github.com/dvsa/front-end
 * 
 */
webpackJsonp([3],{328:function(e,t,n){"use strict";n(329),n(330),n(331),n(332);var i=n(150),a=n(333);n(339),(0,i.domReady)(function(){(0,a.initModules)()})},329:function(e,t,n){(function(t){var n="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},i=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,t=0,i=n.Prism={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof a?new a(e.type,i.util.encode(e.content),e.alias):"Array"===i.util.type(e)?e.map(i.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e,t){var n=i.util.type(e);switch(t=t||{},n){case"Object":if(t[i.util.objId(e)])return t[i.util.objId(e)];var a={};t[i.util.objId(e)]=a;for(var r in e)e.hasOwnProperty(r)&&(a[r]=i.util.clone(e[r],t));return a;case"Array":if(t[i.util.objId(e)])return t[i.util.objId(e)];var a=[];return t[i.util.objId(e)]=a,e.forEach(function(e,n){a[n]=i.util.clone(e,t)}),a}return e}},languages:{extend:function(e,t){var n=i.util.clone(i.languages[e]);for(var a in t)n[a]=t[a];return n},insertBefore:function(e,t,n,a){a=a||i.languages;var r=a[e];if(2==arguments.length){n=arguments[1];for(var s in n)n.hasOwnProperty(s)&&(r[s]=n[s]);return r}var o={};for(var l in r)if(r.hasOwnProperty(l)){if(l==t)for(var s in n)n.hasOwnProperty(s)&&(o[s]=n[s]);o[l]=r[l]}return i.languages.DFS(i.languages,function(t,n){n===a[e]&&t!=e&&(this[t]=o)}),a[e]=o},DFS:function(e,t,n,a){a=a||{};for(var r in e)e.hasOwnProperty(r)&&(t.call(e,r,e[r],n||r),"Object"!==i.util.type(e[r])||a[i.util.objId(e[r])]?"Array"!==i.util.type(e[r])||a[i.util.objId(e[r])]||(a[i.util.objId(e[r])]=!0,i.languages.DFS(e[r],t,r,a)):(a[i.util.objId(e[r])]=!0,i.languages.DFS(e[r],t,null,a)))}},plugins:{},highlightAll:function(e,t){i.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var a={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",a);for(var r,s=a.elements||e.querySelectorAll(a.selector),o=0;r=s[o++];)i.highlightElement(r,!0===t,a.callback)},highlightElement:function(t,a,r){for(var s,o,l=t;l&&!e.test(l.className);)l=l.parentNode;l&&(s=(l.className.match(e)||[,""])[1].toLowerCase(),o=i.languages[s]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+s,t.parentNode&&(l=t.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+s));var u=t.textContent,c={element:t,language:s,grammar:o,code:u};if(i.hooks.run("before-sanity-check",c),!c.code||!c.grammar)return c.code&&(i.hooks.run("before-highlight",c),c.element.textContent=c.code,i.hooks.run("after-highlight",c)),void i.hooks.run("complete",c);if(i.hooks.run("before-highlight",c),a&&n.Worker){var d=new Worker(i.filename);d.onmessage=function(e){c.highlightedCode=e.data,i.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,r&&r.call(c.element),i.hooks.run("after-highlight",c),i.hooks.run("complete",c)},d.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else c.highlightedCode=i.highlight(c.code,c.grammar,c.language),i.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,r&&r.call(t),i.hooks.run("after-highlight",c),i.hooks.run("complete",c)},highlight:function(e,t,n){var r={code:e,grammar:t,language:n};return i.hooks.run("before-tokenize",r),r.tokens=i.tokenize(r.code,r.grammar),i.hooks.run("after-tokenize",r),a.stringify(i.util.encode(r.tokens),r.language)},matchGrammar:function(e,t,n,a,r,s,o){var l=i.Token;for(var u in n)if(n.hasOwnProperty(u)&&n[u]){if(u==o)return;var c=n[u];c="Array"===i.util.type(c)?c:[c];for(var d=0;d<c.length;++d){var g=c[d],m=g.inside,v=!!g.lookbehind,p=!!g.greedy,f=0,h=g.alias;if(p&&!g.pattern.global){var y=g.pattern.toString().match(/[imuy]*$/)[0];g.pattern=RegExp(g.pattern.source,y+"g")}g=g.pattern||g;for(var b=a,w=r;b<t.length;w+=t[b].length,++b){var P=t[b];if(t.length>e.length)return;if(!(P instanceof l)){if(p&&b!=t.length-1){g.lastIndex=w;var k=g.exec(e);if(!k)break;for(var C=k.index+(v?k[1].length:0),F=k.index+k[0].length,x=b,E=w,N=t.length;x<N&&(E<F||!t[x].type&&!t[x-1].greedy);++x)E+=t[x].length,C>=E&&(++b,w=E);if(t[b]instanceof l)continue;S=x-b,P=e.slice(w,E),k.index-=w}else{g.lastIndex=0;var k=g.exec(P),S=1}if(k){v&&(f=k[1]?k[1].length:0);var C=k.index+f,k=k[0].slice(f),F=C+k.length,A=P.slice(0,C),_=P.slice(F),B=[b,S];A&&(++b,w+=A.length,B.push(A));var I=new l(u,m?i.tokenize(k,m):k,h,k,p);if(B.push(I),_&&B.push(_),Array.prototype.splice.apply(t,B),1!=S&&i.matchGrammar(e,t,n,b,w,!0,u),s)break}else if(s)break}}}}},tokenize:function(e,t,n){var a=[e],r=t.rest;if(r){for(var s in r)t[s]=r[s];delete t.rest}return i.matchGrammar(e,a,t,0,0,!1),a},hooks:{all:{},add:function(e,t){var n=i.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=i.hooks.all[e];if(n&&n.length)for(var a,r=0;a=n[r++];)a(t)}}},a=i.Token=function(e,t,n,i,a){this.type=e,this.content=t,this.alias=n,this.length=0|(i||"").length,this.greedy=!!a};if(a.stringify=function(e,t,n){if("string"==typeof e)return e;if("Array"===i.util.type(e))return e.map(function(n){return a.stringify(n,t,e)}).join("");var r={type:e.type,content:a.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n};if(e.alias){var s="Array"===i.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(r.classes,s)}i.hooks.run("wrap",r);var o=Object.keys(r.attributes).map(function(e){return e+'="'+(r.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+r.tag+' class="'+r.classes.join(" ")+'"'+(o?" "+o:"")+">"+r.content+"</"+r.tag+">"},!n.document)return n.addEventListener?(i.disableWorkerMessageHandler||n.addEventListener("message",function(e){var t=JSON.parse(e.data),a=t.language,r=t.code,s=t.immediateClose;n.postMessage(i.highlight(r,i.languages[a],a)),s&&n.close()},!1),n.Prism):n.Prism;var r=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return r&&(i.filename=r.src,i.manual||r.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(i.highlightAll):window.setTimeout(i.highlightAll,16):document.addEventListener("DOMContentLoaded",i.highlightAll))),n.Prism}();void 0!==e&&e.exports&&(e.exports=i),void 0!==t&&(t.Prism=i),i.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},i.languages.markup.tag.inside["attr-value"].inside.entity=i.languages.markup.entity,i.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),i.languages.xml=i.languages.markup,i.languages.html=i.languages.markup,i.languages.mathml=i.languages.markup,i.languages.svg=i.languages.markup,i.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},i.languages.css.atrule.inside.rest=i.languages.css,i.languages.markup&&(i.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:i.languages.css,alias:"language-css",greedy:!0}}),i.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:i.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:i.languages.css}},alias:"language-css"}},i.languages.markup.tag)),i.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},i.languages.javascript=i.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),i.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),i.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:i.languages.javascript}},string:/[\s\S]+/}}}),i.languages.markup&&i.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:i.languages.javascript,alias:"language-javascript",greedy:!0}}),i.languages.js=i.languages.javascript,function(){"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){for(var n,a=t.getAttribute("data-src"),r=t,s=/\blang(?:uage)?-(?!\*)([\w-]+)\b/i;r&&!s.test(r.className);)r=r.parentNode;if(r&&(n=(t.className.match(s)||[,""])[1]),!n){var o=(a.match(/\.(\w+)$/)||[,""])[1];n=e[o]||o}var l=document.createElement("code");l.className="language-"+n,t.textContent="",l.textContent="Loading…",t.appendChild(l);var u=new XMLHttpRequest;u.open("GET",a,!0),u.onreadystatechange=function(){4==u.readyState&&(u.status<400&&u.responseText?(l.textContent=u.responseText,i.highlightElement(l)):u.status>=400?l.textContent="✖ Error "+u.status+" while fetching file: "+u.statusText:l.textContent="✖ Error: File does not exist or is empty")},t.hasAttribute("data-download-link")&&i.plugins.toolbar&&i.plugins.toolbar.registerButton("download-file",function(){var e=document.createElement("a");return e.textContent=t.getAttribute("data-download-link-label")||"Download",e.setAttribute("download",""),e.href=a,e}),u.send(null)})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}()}).call(t,n(151))},330:function(e,t){!function(){if("undefined"!=typeof self&&self.Prism&&self.document){var e=[],t={},n=function(){};Prism.plugins.toolbar={};var i=Prism.plugins.toolbar.registerButton=function(n,i){var a;a="function"==typeof i?i:function(e){var t;return"function"==typeof i.onClick?(t=document.createElement("button"),t.type="button",t.addEventListener("click",function(){i.onClick.call(this,e)})):"string"==typeof i.url?(t=document.createElement("a"),t.href=i.url):t=document.createElement("span"),t.textContent=i.text,t},e.push(t[n]=a)},a=Prism.plugins.toolbar.hook=function(i){var a=i.element.parentNode;if(a&&/pre/i.test(a.nodeName)&&!a.parentNode.classList.contains("code-toolbar")){var r=document.createElement("div");r.classList.add("code-toolbar"),a.parentNode.insertBefore(r,a),r.appendChild(a);var s=document.createElement("div");s.classList.add("toolbar"),document.body.hasAttribute("data-toolbar-order")&&(e=document.body.getAttribute("data-toolbar-order").split(",").map(function(e){return t[e]||n})),e.forEach(function(e){var t=e(i);if(t){var n=document.createElement("div");n.classList.add("toolbar-item"),n.appendChild(t),s.appendChild(n)}}),r.appendChild(s)}};i("label",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-label")){var n,i,a=t.getAttribute("data-label");try{i=document.querySelector("template#"+a)}catch(e){}return i?n=i.content:(t.hasAttribute("data-url")?(n=document.createElement("a"),n.href=t.getAttribute("data-url")):n=document.createElement("span"),n.textContent=a),n}}),Prism.hooks.add("complete",a)}}()},331:function(e,t){!function(){function t(e){this.defaults=a({},e)}function n(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})}function i(e){for(var t=0,n=0;n<e.length;++n)e.charCodeAt(n)=="\t".charCodeAt(0)&&(t+=3);return e.length+t}var a=Object.assign||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e};t.prototype={setDefaults:function(e){this.defaults=a(this.defaults,e)},normalize:function(e,t){t=a(this.defaults,t);for(var i in t){var r=n(i);"normalize"!==i&&"setDefaults"!==r&&t[i]&&this[r]&&(e=this[r].call(this,e,t[i]))}return e},leftTrim:function(e){return e.replace(/^\s+/,"")},rightTrim:function(e){return e.replace(/\s+$/,"")},tabsToSpaces:function(e,t){return t=0|t||4,e.replace(/\t/g,new Array(++t).join(" "))},spacesToTabs:function(e,t){return t=0|t||4,e.replace(new RegExp(" {"+t+"}","g"),"\t")},removeTrailing:function(e){return e.replace(/\s*?$/gm,"")},removeInitialLineFeed:function(e){return e.replace(/^(?:\r?\n|\r)/,"")},removeIndent:function(e){var t=e.match(/^[^\S\n\r]*(?=\S)/gm);return t&&t[0].length?(t.sort(function(e,t){return e.length-t.length}),t[0].length?e.replace(new RegExp("^"+t[0],"gm"),""):e):e},indent:function(e,t){return e.replace(/^[^\S\n\r]*(?=\S)/gm,new Array(++t).join("\t")+"$&")},breakLines:function(e,t){t=!0===t?80:0|t||80;for(var n=e.split("\n"),a=0;a<n.length;++a)if(!(i(n[a])<=t)){for(var r=n[a].split(/(\s+)/g),s=0,o=0;o<r.length;++o){var l=i(r[o]);s+=l,s>t&&(r[o]="\n"+r[o],s=l)}n[a]=r.join("")}return n.join("\n")}},void 0!==e&&e.exports&&(e.exports=t),"undefined"!=typeof Prism&&(Prism.plugins.NormalizeWhitespace=new t({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0}),Prism.hooks.add("before-sanity-check",function(e){var t=Prism.plugins.NormalizeWhitespace;if(!e.settings||!1!==e.settings["whitespace-normalization"]){if((!e.element||!e.element.parentNode)&&e.code)return void(e.code=t.normalize(e.code,e.settings));var n=e.element.parentNode,i=/\bno-whitespace-normalization\b/;if(e.code&&n&&"pre"===n.nodeName.toLowerCase()&&!i.test(n.className)&&!i.test(e.element.className)){for(var a=n.childNodes,r="",s="",o=!1,l=0;l<a.length;++l){var u=a[l];u==e.element?o=!0:"#text"===u.nodeName&&(o?s+=u.nodeValue:r+=u.nodeValue,n.removeChild(u),--l)}if(e.element.children.length&&Prism.plugins.KeepMarkup){var c=r+e.element.innerHTML+s;e.element.innerHTML=t.normalize(c,e.settings),e.code=e.element.textContent}else e.code=r+e.code+s,e.code=t.normalize(e.code,e.settings)}}}))}()},332:function(e,t){!function(){if("undefined"!=typeof self&&self.Prism&&self.document){var e=/\n(?!$)/g,t=function(t){var i=n(t),a=i["white-space"];if("pre-wrap"===a||"pre-line"===a){var r=t.querySelector("code"),s=t.querySelector(".line-numbers-rows"),o=t.querySelector(".line-numbers-sizer"),l=r.textContent.split(e);o||(o=document.createElement("span"),o.className="line-numbers-sizer",r.appendChild(o)),o.style.display="block",l.forEach(function(e,t){o.textContent=e||"\n";var n=o.getBoundingClientRect().height;s.children[t].style.height=n+"px"}),o.textContent="",o.style.display="none"}},n=function(e){return e?window.getComputedStyle?getComputedStyle(e):e.currentStyle||null:null};window.addEventListener("resize",function(){Array.prototype.forEach.call(document.querySelectorAll("pre.line-numbers"),t)}),Prism.hooks.add("complete",function(n){if(n.code){var i=n.element.parentNode,a=/\s*\bline-numbers\b\s*/;if(i&&/pre/i.test(i.nodeName)&&(a.test(i.className)||a.test(n.element.className))&&!n.element.querySelector(".line-numbers-rows")){a.test(n.element.className)&&(n.element.className=n.element.className.replace(a," ")),a.test(i.className)||(i.className+=" line-numbers");var r,s=n.code.match(e),o=s?s.length+1:1,l=new Array(o+1);l=l.join("<span></span>"),r=document.createElement("span"),r.setAttribute("aria-hidden","true"),r.className="line-numbers-rows",r.innerHTML=l,i.hasAttribute("data-start")&&(i.style.counterReset="linenumber "+(parseInt(i.getAttribute("data-start"),10)-1)),n.element.appendChild(r),t(i),Prism.hooks.run("line-numbers",n)}}}),Prism.hooks.add("line-numbers",function(e){e.plugins=e.plugins||{},e.plugins.lineNumbers=!0}),Prism.plugins.lineNumbers={getLine:function(e,t){if("PRE"===e.tagName&&e.classList.contains("line-numbers")){var n=e.querySelector(".line-numbers-rows"),i=parseInt(e.getAttribute("data-start"),10)||1,a=i+(n.children.length-1);t<i&&(t=i),t>a&&(t=a);var r=t-i;return n.children[r]}}}}}()},333:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initModules=void 0;var i=n(334),a=n(336);t.initModules=function(){(0,i.initLibraryNavigation)(),(0,a.initDevPreview)()}},334:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initLibraryNavigation=void 0;var i=n(335);t.initLibraryNavigation=function(){new i.LibraryPageNavigation}},335:function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.LibraryPageNavigation=void 0;var a=n(4);t.LibraryPageNavigation=function e(){var t=this;if(i(this,e),this.mobileNavigationClickHandler=function(){(0,a.toggleClass)(t.navigationInner,t.navigationInnerOpenClassName)},this.sidebar=!1,this.maxWidth=800,this.navigationId="styleguide-navigation",this.navigationInnerClassName="styleguide-navigation__inner",this.navigationInnerOpenClassName="styleguide-navigation__inner--open",this.contentId="styleguide-content",this.mobileNavigationClassName="styleguide-navigation__mobile-nav",this.mobileNavigationContainerClassName="styleguide-navigation",this.libraryContainerId="library-container",this.libraryContainerElement=document.getElementById(this.libraryContainerId),this.navigation=document.getElementById(this.navigationId),this.navigation&&this.libraryContainerElement)return this.mobileNavigationContainer=document.querySelector("."+this.mobileNavigationClassName),this.navigationInner=this.navigation.querySelector("."+this.navigationInnerClassName),this.content=document.getElementById(this.contentId),this.mobileNavigationContainer?this.navigationInner?this.content?void(0,a.addEventListenerToEl)(this.mobileNavigationContainer,"click",this.mobileNavigationClickHandler):console.warn("Library content not found"):console.warn("Navigation inner not found"):console.warn("Mobile navigation container not found")}},336:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initDevPreview=void 0;var i=n(337),a=n(338);t.initDevPreview=function(){new i.DevPreview,new a.DevPreviewFullscreen}},337:function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.DevPreview=void 0;var a=n(45),r=(function(e){e&&e.__esModule}(a),n(4));t.DevPreview=function e(){var t=this;i(this,e),this.init=function(){t.addBodyPaddingToAccountForFloatingButton(),t.movePreviewElementToChildOfBody(),t.addEvents()},this.addBodyPaddingToAccountForFloatingButton=function(){if(t.elements.devPreviewFloatingButton&&t.elements.footer){var e=t.elements.devPreviewFloatingButton.offsetHeight,n=window.getComputedStyle(t.elements.footer,null).getPropertyValue("padding-bottom")||0;n=n.replace("px",""),n+=e,t.elements.footer.style.paddingBottom=n+"px"}},this.movePreviewElementToChildOfBody=function(){t.elements.body.appendChild(t.elements.devPreviewFullPage),t.elements.devPreviewFloatingButton&&t.elements.body.appendChild(t.elements.devPreviewFloatingButton)},this.addEvents=function(){t.elements.devPreviewFloatingButton.addEventListener("click",t.toggleFullPagePreview),(0,r.delegateEvent)(document,"click",t.selectors.devPreviewCloseButton,t.toggleFullPagePreview)},this.toggleFullPagePreview=function(){t.state.fullPagePreviewHidden=!t.state.fullPagePreviewHidden,(0,r.toggleClass)(t.elements.devPreviewFullPage,t.classnames.devPreviewHidden,t.state.fullPagePreviewHidden),(0,r.toggleClass)(t.elements.devPreviewFloatingButton,t.classnames.devPreviewHidden,!t.state.fullPagePreviewHidden),(0,r.toggleClass)(t.elements.body,t.classnames.devPreviewBodyOverflowHidden,!t.state.fullPagePreviewHidden)},this.classnames={devPreviewHidden:"dev-preview--hidden",devPreviewBodyOverflowHidden:"dev-preview__body-overflow-hidden"},this.selectors={devPreviewFullPage:".dev-preview--full-page",devPreviewFloatingButton:".dev-preview__floating-button",devPreviewCloseButton:".dev-preview__close-button",content:"#content",body:"body",footer:"#footer"},this.elements={body:document.querySelector(this.selectors.body),devPreviewFullPage:document.querySelector(this.selectors.devPreviewFullPage),devPreviewFloatingButton:document.querySelector(this.selectors.devPreviewFloatingButton),content:document.querySelector(this.selectors.content),footer:document.querySelector(this.selectors.footer)},this.state={fullPagePreviewHidden:!0},this.elements.body&&this.elements.devPreviewFullPage&&this.elements.content&&this.init()}},338:function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.DevPreviewFullscreen=void 0;var a=n(45),r=(function(e){e&&e.__esModule}(a),n(4));t.DevPreviewFullscreen=function e(){var t=this;i(this,e),this.init=function(){t.setupState(),(0,r.delegateEvent)(document,"click",t.selectors.devPreviewFullscreenButton,t.onFullscreenPreviewClick)},this.setupState=function(){t.elements.previewElements.forEach(function(e){var n=e.querySelector(t.selectors.devPreviewFullscreenButton),i=e.querySelector(t.selectors.devPreviewExample),a=e.querySelector(t.selectors.devPreviewPismCode);t.state.previewElements.push({devPreviewElement:e,fullscreenButton:n,devPreviewExample:i,devPreviewPismCode:a,isFullscreen:!1});var r=t.state.previewElements.length-1;e&&e.setAttribute(t.attributes.stateItemId,r),n&&n.setAttribute(t.attributes.stateItemId,r)})},this.onFullscreenPreviewClick=function(e){if(e&&e.target){var n=e.target.getAttribute(t.attributes.stateItemId),i=t.state.previewElements[n];i&&(i.isFullscreen?(i.devPreviewElement.insertBefore(i.devPreviewExample,i.devPreviewPismCode),(0,r.toggleClass)(i.devPreviewExample,t.classnames.devPreviewExample.fullscreen,!1),(0,r.toggleClass)(t.elements.body,t.classnames.devPreview.overflowBodyHidden,!1),window.scrollTo(0,t.state.previousYOffset),t.state.previousYOffset=0):(t.state.previousYOffset=window.pageYOffset,t.elements.body.appendChild(i.devPreviewExample),(0,r.toggleClass)(i.devPreviewExample,t.classnames.devPreviewExample.fullscreen,!0),(0,r.toggleClass)(t.elements.body,t.classnames.devPreview.overflowBodyHidden,!0),console.log(t.state.previousYOffset)),i.isFullscreen=!i.isFullscreen,i.fullscreenButton.innerText=i.isFullscreen?t.i18n.hideFullscreenPreview:t.i18n.fullScreenPreview)}},this.classnames={devPreview:{overflowBodyHidden:"dev-preview__body-overflow-hidden"},devPreviewExample:{fullscreen:"dev-preview__example--fullscreen"}},this.selectors={devPreview:".dev-preview",devPreviewExample:".dev-preview__example",devPreviewFullscreenButton:".dev-preview__fullscreen-button",devPreviewPismCode:".dev-preview__prism-code",body:"body"},this.attributes={exampleId:"data-example-id",stateItemId:"data-state-item-id"},this.i18n={fullScreenPreview:"Fullscreen preview",hideFullscreenPreview:"Hide fullscreen"},this.elements={body:document.querySelector(this.selectors.body),previewElements:Array.from(document.querySelectorAll(this.selectors.devPreview))},this.state={previousYOffset:0,previewElements:[]},this.elements.previewElements&&Array.isArray(this.elements.previewElements)&&this.init()}},339:function(e,t){}},[328]);