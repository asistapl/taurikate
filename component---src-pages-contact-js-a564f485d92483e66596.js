webpackJsonp([70144966829960],{13:function(e,t,o){"use strict";function i(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var n=i(o(28)),r=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|valueLink|accept|acceptCharset|accessKey|action|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class)|(on[A-Z].*)|((data|aria|x)-.*))$/i,a=n(r.test.bind(r));e.exports=a},17:function(e,t,o){"use strict";function i(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function n(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function r(e){this.setState({theme:e})}function a(e,t){var o=function(i,a){var l,s,c,g;void 0!==a&&(l=a.e,s=a.label,c=a.target,g=i.__emotion_forwardProp&&a.shouldForwardProp?function(e){return i.__emotion_forwardProp(e)&&a.shouldForwardProp(e)}:a.shouldForwardProp);var v=i.__emotion_real===i,y=void 0===l?v&&i.__emotion_base||i:i;return"function"!=typeof g&&(g="string"==typeof y&&y.charAt(0)===y.charAt(0).toLowerCase()?m:p),function(){var m=arguments,p=v&&void 0!==i.__emotion_styles?i.__emotion_styles.slice(0):[];if(void 0!==s&&p.push("label:"+s+";"),void 0===l)if(null==m[0]||void 0===m[0].raw)p.push.apply(p,m);else{p.push(m[0][0]);for(var k=m.length,b=1;b<k;b++)p.push(m[b],m[0][b])}var w=function(o){function i(){return o.apply(this,arguments)||this}n(i,o);var a=i.prototype;return a.componentWillMount=function(){void 0!==this.context[d]&&(this.unsubscribe=this.context[d].subscribe(r.bind(this)))},a.componentWillUnmount=function(){void 0!==this.unsubscribe&&this.context[d].unsubscribe(this.unsubscribe)},a.render=function(){var o=this.props,i=this.state;this.mergedProps=h(f,{},o,{theme:null!==i&&i.theme||o.theme||{}});var n="",r=[];return o.className&&(n+=void 0===l?e.getRegisteredStyles(r,o.className):o.className+" "),n+=void 0===l?e.css.apply(this,p.concat(r)):l,void 0!==c&&(n+=" "+c),t.createElement(y,h(g,{},o,{className:n,ref:o.innerRef}))},i}(t.Component);return w.displayName=void 0!==s?s:"Styled("+("string"==typeof y?y:y.displayName||y.name||"Component")+")",void 0!==i.defaultProps&&(w.defaultProps=i.defaultProps),w.contextTypes=u,w.__emotion_styles=p,w.__emotion_base=y,w.__emotion_real=w,w.__emotion_forwardProp=g,Object.defineProperty(w,"toString",{enumerable:!1,value:function(){return"."+c}}),w.withComponent=function(e,t){return o(e,void 0!==t?h(f,{},a,t):a).apply(void 0,p)},w}};return o}var l,s=i(o(2)),c=i(o(13)),d="__EMOTION_THEMING__",u=(l={},l[d]=s.object,l),m=c,p=function(e){return"theme"!==e&&"innerRef"!==e},f=function(){return!0},h=function(e,t){for(var o=2,i=arguments.length;o<i;o++){var n=arguments[o],r=void 0;for(r in n)e(r)&&(t[r]=n[r])}return t};e.exports=a},4:function(e,t,o){"use strict";function i(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var n=i(o(1)),r=o(7),a=i(o(17)),l=a(r,n);Object.keys(r).forEach(function(e){t[e]=r[e]}),t.default=l},143:function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.ContactLink=void 0;var n,r=o(7),a=o(1),l=i(a),s=o(4),c=i(s),d=o(3),u=(0,c.default)("svg",{target:"e1umk7190"})(function(e){var t,o=e.width;return t={display:"block",width:35,height:35,marginBottom:13,fill:"none",strokeWidth:.8,stroke:"#FFD6D6",strokeLinecap:"round",strokeLinejoin:"round",transition:"stroke 1s ease-out"},t[d.media.laptop]={width:60,height:60,marginBottom:20,strokeWidth:.5},t[d.media.laptopLg]={width:75,height:75,marginBottom:25},t[".HoverContactItem:hover &"]={stroke:"transparent"},t[".draw"]={strokeWidth:.3,stroke:"rgba(0, 0, 0, 1)",strokeDasharray:o,strokeDashoffset:o,transition:"stroke-dashoffset "+.015*o+"s ease-in-out",".HoverContactItem:hover &":{strokeDashoffset:0}},t}),m=t.ContactLink=(0,c.default)("a",{target:"e1umk7191"})({fontWeight:800,fontSize:18,lineHeight:1.6,transition:".3s",opacity:.6,":hover":{opacity:1}}),p=(0,c.default)("p",{target:"e1umk7192"})((n={maxWidth:"20em",marginTop:10,fontWeight:300,fontSize:18,lineHeight:1.6,color:"#888"},n[d.media.laptop]={marginTop:20,fontSize:16},n[d.media.laptopLg]={marginTop:25,fontSize:18},n)),f=function(){var e;return l.default.createElement("div",{className:(0,r.css)((e={display:"flex",flexDirection:"column",alignItems:"center","> *":{marginBottom:30}},e[d.media.laptop]={flexDirection:"row",alignItems:"stretch",margin:"0 -30px","> *":{marginBottom:0,padding:"0 30px",flexBasis:"33.333%"}},e))},l.default.createElement("div",{className:"HoverContactItem"},l.default.createElement(u,{viewBox:"0 0 24 24",width:79},l.default.createElement("path",{d:"M2,3.5h20c0.8,0,1.5,0.7,1.5,1.5v14c0,0.8-0.7,1.5-1.5,1.5H2c-0.8,0-1.5-0.7-1.5-1.5V5C0.5,4.2,1.2,3.5,2,3.5z M21.5,3.5l-9.5,7l-9.5-7 M3.5,20.5V8.2l8.5,6.3L23.5,6M20.5,8.2v12.3"}),l.default.createElement("path",{className:"draw",d:"M2,3.5h20c0.8,0,1.5,0.7,1.5,1.5v14c0,0.8-0.7,1.5-1.5,1.5H2c-0.8,0-1.5-0.7-1.5-1.5V5C0.5,4.2,1.2,3.5,2,3.5z M21.5,3.5l-9.5,7l-9.5-7 M3.5,20.5V8.2l8.5,6.3L23.5,6M20.5,8.2v12.3"})),l.default.createElement(m,{href:"mailto:k.e.marcinkiewicz@gmail.com"},"k.e.marcinkiewicz@gmail.com"),l.default.createElement(p,null,"You need a children's book illustration? Maybe a portrait of your significant other? Tell me about your idea. Together we can make some amazing art!")),l.default.createElement("div",{className:"HoverContactItem"},l.default.createElement(u,{viewBox:"0 0 24 24",width:76},l.default.createElement("path",{d:"M7,1.5h10c3,0,5.5,2.5,5.5,5.5v10c0,3-2.5,5.5-5.5,5.5H7c-3,0-5.5-2.5-5.5-5.5V7C1.5,4,4,1.5,7,1.5z M12,6.5c3,0,5.5,2.5,5.5,5.5S15,17.5,12,17.5S6.5,15,6.5,12S9,6.5,12,6.5z M18,4.5c0.3,0,0.5,0.2,0.5,0.5S18.3,5.5,18,5.5S17.5,5.3,17.5,5S17.7,4.5,18,4.5z"}),l.default.createElement("path",{className:"draw",d:"M7,1.5h10c3,0,5.5,2.5,5.5,5.5v10c0,3-2.5,5.5-5.5,5.5H7c-3,0-5.5-2.5-5.5-5.5V7C1.5,4,4,1.5,7,1.5z M12,6.5c3,0,5.5,2.5,5.5,5.5S15,17.5,12,17.5S6.5,15,6.5,12S9,6.5,12,6.5z M18,4.5c0.3,0,0.5,0.2,0.5,0.5S18.3,5.5,18,5.5S17.5,5.3,17.5,5S17.7,4.5,18,4.5z"})),l.default.createElement(m,{href:"http://instagram.com/taurikate"},"instagram.com/taurikate"),l.default.createElement(p,null,"It's where I post most of my artworks a few times a week. Follow me to never miss one!")),l.default.createElement("div",{className:"HoverContactItem"},l.default.createElement(u,{viewBox:"0 0 24 24",width:73},l.default.createElement("path",{d:"M12,0.5L12,0.5c0.7,0,1.3,0.2,1.8,0.5l8.8,5.8c0.6,0.4,0.9,1,0.9,1.7v6.9c0,0.7-0.3,1.3-0.9,1.7l-8.8,5.9c-0.5,0.4-1.2,0.6-1.8,0.6l0,0c-0.7,0-1.3-0.2-1.8-0.5l-8.8-5.9c-0.6-0.4-0.9-1-0.9-1.7V8.6c0-0.7,0.3-1.3,0.9-1.7l8.8-5.8C10.7,0.7,11.3,0.5,12,0.5z M10.5,3.5v5l-3,2L3.5,8L10.5,3.5z M13.5,3.5v5l3,2l4-2.5L13.5,3.5z M13.5,20.5v-5l3-2l4,2.5L13.5,20.5z M10.5,20.5v-5l-3-2l-4,2.5L10.5,20.5z M2.5,10.5L5,12l-2.5,1.5V10.5zM21.5,13.5L19,12l2.5-1.5V13.5z M12,10l-3,2l3,2l3-2L12,10z"}),l.default.createElement("path",{className:"draw",d:"M12,0.5L12,0.5c0.7,0,1.3,0.2,1.8,0.5l8.8,5.8c0.6,0.4,0.9,1,0.9,1.7v6.9c0,0.7-0.3,1.3-0.9,1.7l-8.8,5.9c-0.5,0.4-1.2,0.6-1.8,0.6l0,0c-0.7,0-1.3-0.2-1.8-0.5l-8.8-5.9c-0.6-0.4-0.9-1-0.9-1.7V8.6c0-0.7,0.3-1.3,0.9-1.7l8.8-5.8C10.7,0.7,11.3,0.5,12,0.5z M10.5,3.5v5l-3,2L3.5,8L10.5,3.5z M13.5,3.5v5l3,2l4-2.5L13.5,3.5z M13.5,20.5v-5l3-2l4,2.5L13.5,20.5z M10.5,20.5v-5l-3-2l-4,2.5L10.5,20.5z M2.5,10.5L5,12l-2.5,1.5V10.5zM21.5,13.5L19,12l2.5-1.5V13.5z M12,10l-3,2l3,2l3-2L12,10z"})),l.default.createElement(m,{href:"http://codepen.io/KazikM"},"codepen.io/KazikM"),l.default.createElement(p,null,"You may be interested in some interactive animations for your website. Here's my code “sketchbook”.")))};t.default=f},3:function(e,t,o){"use strict";t.__esModule=!0,t.isTouchDevice=t.isRetina=t.supportsGrid=t.supportsHover=t.max=t.min=t.media=t.breakpoints=t.rem=t.em=t.fancyFont=void 0;var i=o(4);(0,i.injectGlobal)({body:{margin:0,fontFamily:"'Nunito', sans-serif",paddingBottom:100},a:{textDecoration:"none",color:"inherit"},"h1, h2, h3, h4, h5, h6, p, figure":{margin:0},img:{maxWidth:"100%"}});var n=(t.fancyFont={fontWeight:"normal",fontFamily:"'Amatic SC', sans-serif"},t.em=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16;return"number"==typeof e&&0!==e?e/t+"em":e}),r=(t.rem=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16;return"number"==typeof e&&0!==e?e/t+"rem":e},t.breakpoints={mobile:1,tablet:600,laptop:1024,desktop:1600,mobileSm:1,mobileMd:375,mobileLg:425,tabletSm:600,tabletMd:768,tabletLg:900,laptopSm:1024,laptopMd:1366,laptopLg:1440,desktopSm:1600,desktopMd:1700,desktopLg:1920});t.media=Object.entries(r).reduce(function(e,t){var o=t[0],i=t[1];return e[o]="@media (min-width: "+n(i)+")",e},{}),t.min=function(e){return"@media (min-width: "+n(e)+")"},t.max=function(e){return"@media (max-width: "+n(e)+")"},t.supportsHover="@media (hover: hover)",t.supportsGrid="@supports(grid-area: auto)",t.isRetina=function(){return"undefined"!=typeof window&&window.matchMedia("(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)").matches},t.isTouchDevice=function(){return"undefined"!=typeof window&&window.matchMedia("(hover: none)").matches}}});
//# sourceMappingURL=component---src-pages-contact-js-a564f485d92483e66596.js.map