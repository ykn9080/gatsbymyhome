"use strict";(self.webpackChunkyoungkinam_s_homepage_madeof_gatsby=self.webpackChunkyoungkinam_s_homepage_madeof_gatsby||[]).push([[112],{1496:function(e,t,a){var r=a(5318);var i,n=r(a(1506)),s=r(a(5354)),d=r(a(7316)),o=r(a(7154)),l=r(a(7294)),u=r(a(5697)),c=["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"],f=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=L([].concat(t.fluid))),t.fixed&&(t.fixed=L([].concat(t.fixed))),t},g=function(e){var t=e.media;return!!t&&(S&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed,r=h(t||a||[]);return r&&r.src},h=function(e){if(S&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(g);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},m=Object.create({}),b=function(e){var t=f(e),a=p(t);return m[a]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,S="undefined"!=typeof window,v=S&&window.IntersectionObserver,E=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&l.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function L(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function R(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function O(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var x=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},V=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?O(e,!0):"")+O(e)})).join("")+"<img "+l+s+d+a+r+t+n+i+o+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},k=l.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,d=l.default.createElement(z,(0,o.default)({ref:t,src:a},n,{ariaHidden:s}));return r.length>1?l.default.createElement("picture",null,i(r),d):d})),z=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,u=e.onError,f=e.loading,g=e.draggable,p=e.ariaHidden,h=(0,d.default)(e,c);return l.default.createElement("img",(0,o.default)({"aria-hidden":p,sizes:a,srcSet:r,src:i},h,{onLoad:s,onError:u,ref:t,loading:f,draggable:g,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));z.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var H=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=S&&b(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!y&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||S&&(y||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=l.default.createRef(),a.placeholderRef=t.placeholderRef||l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:S}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:b(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=x(e,(function(){var e=b(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=f(e),(a=p(t))&&(m[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=f(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,d=void 0===s?{}:s,u=e.placeholderStyle,c=void 0===u?{}:u,g=e.placeholderClassName,p=e.fluid,m=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,S=e.Tag,v=e.itemProp,E=e.loading,L=e.draggable,O=p||m;if(!O)return null;var x=!1===this.state.fadeIn||this.state.imgLoaded,H=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,o.default)({opacity:x?1:0,transition:H?"opacity "+y+"ms":"none"},d),T="boolean"==typeof b?"lightgray":b,N={transitionDelay:y+"ms"},P=(0,o.default)({opacity:this.state.imgLoaded?0:1},H&&N,d,c),W={title:t,alt:this.state.isVisible?"":a,style:P,className:g,itemProp:v},_=this.state.isHydrated?h(O):O[0];if(p)return l.default.createElement(S,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:_.maxWidth?_.maxWidth+"px":null,maxHeight:_.maxHeight?_.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(_.srcSet)},l.default.createElement(S,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/_.aspectRatio+"%"}}),T&&l.default.createElement(S,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},H&&N)}),_.base64&&l.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:_.base64,spreadProps:W,imageVariants:O,generateSources:I}),_.tracedSVG&&l.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:_.tracedSVG,spreadProps:W,imageVariants:O,generateSources:R}),this.state.isVisible&&l.default.createElement("picture",null,w(O),l.default.createElement(z,{alt:a,title:t,sizes:_.sizes,src:_.src,crossOrigin:this.props.crossOrigin,srcSet:_.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:E,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:V((0,o.default)({alt:a,title:t,loading:E},_,{imageVariants:O}))}}));if(m){var j=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:_.width,height:_.height},n);return"inherit"===n.display&&delete j.display,l.default.createElement(S,{className:(r||"")+" gatsby-image-wrapper",style:j,ref:this.handleRef,key:"fixed-"+JSON.stringify(_.srcSet)},T&&l.default.createElement(S,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:T,width:_.width,opacity:this.state.imgLoaded?0:1,height:_.height},H&&N)}),_.base64&&l.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:_.base64,spreadProps:W,imageVariants:O,generateSources:I}),_.tracedSVG&&l.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:_.tracedSVG,spreadProps:W,imageVariants:O,generateSources:R}),this.state.isVisible&&l.default.createElement("picture",null,w(O),l.default.createElement(z,{alt:a,title:t,width:_.width,height:_.height,sizes:_.sizes,src:_.src,crossOrigin:this.props.crossOrigin,srcSet:_.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:E,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:V((0,o.default)({alt:a,title:t,loading:E},_,{imageVariants:O}))}}))}return null},t}(l.default.Component);H.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),T=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function N(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");u.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}H.propTypes={resolutions:C,sizes:T,fixed:N(u.default.oneOfType([C,u.default.arrayOf(C)])),fluid:N(u.default.oneOfType([T,u.default.arrayOf(T)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool}},4577:function(e,t,a){var r=a(7294),i=a(5302);t.Z=function(e){var t,a=e.location,n=(null==a||null===(t=a.pathname)||void 0===t?void 0:t.split("/"))||[],s=n.length-1;""===n[s]&&n.splice(s,1);var d="",o="";return r.createElement("ul",{className:"breadcrumbs"},n.map((function(e,t){if(!(["ko","en","gatsbymyhome"].indexOf(e)>-1))return""===e?(d="Home",o="/"):(d=""+e,o=""+o+e+"/"),t===n.length-1?r.createElement("li",null,d):r.createElement("li",null,r.createElement(i.UE,{to:o,key:e},d))})))}}}]);
//# sourceMappingURL=c53806afa2ef5a2d8d9e2f21024f41af8b37a71b-44aee6f8686b5805878b.js.map