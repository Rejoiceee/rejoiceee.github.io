(function(){"use strict";var t={3995:function(t,e,n){var o=n(5130),r=n(6768);const i={id:"app"};function s(t,e,n,o,s,c){const l=(0,r.g2)("ScrollContent");return(0,r.uX)(),(0,r.CE)("div",i,[(0,r.bF)(l)])}var c=n(4232);const l={class:"nav",ref:"nav"},a=(0,r.Fv)('<ul><li><a href="#section1">Section 1</a></li><li><a href="#section2">Section 2</a></li><li><a href="#section3">Section 3</a></li><li><a href="#section4">Section 4</a></li><li><a href="#section5">Section 5</a></li></ul>',1),f=[a],u={class:"sections"},d={class:"section section1",ref:"sections"},v={class:"section section2",ref:"sections"},h=(0,r.Lk)("span",null,"Section 2 Content",-1),m=[h],p={class:"section section3",ref:"sections"},y={class:"scroll-wrapper"},w={class:"scroll-container",ref:"scrollContainer"},b={class:"scroll-content",ref:"scrollContent"},k={class:"section section4",ref:"sections"},g={class:"section section5",ref:"sections"};function C(t,e,n,o,i,s){return(0,r.uX)(),(0,r.CE)("div",null,[(0,r.Lk)("nav",l,f,512),(0,r.Lk)("div",u,[(0,r.Lk)("div",d,"Section 1 Content",512),(0,r.Lk)("div",v,m,512),(0,r.Lk)("div",p,[(0,r.Lk)("div",y,[(0,r.Lk)("div",w,[(0,r.Lk)("div",b,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(i.items,(t=>((0,r.uX)(),(0,r.CE)("div",{key:t,class:"item",ref_for:!0,ref:"items"},(0,c.v_)(t),1)))),128))],512)],512)])],512),(0,r.Lk)("div",k,"Section 4 Content",512),(0,r.Lk)("div",g,"Section 5 Content",512)])])}var L={name:"ScrollContent",data(){return{items:["Item 1","Item 2","Item 3","Item 4","Item 5","Item 6"]}},async mounted(){await(0,r.dY)();const t=Array.from(document.querySelectorAll(".section")),e=this.$refs.nav,n=e.querySelectorAll("li a"),o=this.$refs.scrollContainer,i=this.$refs.scrollContent,s=Array.from(this.$refs.items||[]);e.addEventListener("click",(e=>{const o=e.target;if("A"!==o.tagName)return;const r=Array.from(n).indexOf(o);t[r].scrollIntoView({block:"center",behavior:"smooth"})}));const c=t[2];if(!c)return void console.error("Top container (section3) not found");const l=c.offsetTop,a=l-o.scrollWidth;c.style.height=o.scrollWidth+"px",window.addEventListener("scroll",(()=>{let t=window.scrollY||document.documentElement.scrollTop,e=t-l,n=Math.max(.5,1-e/1e3);i.style.transform=e-o.scrollWidth-window.clientWidth>0?0:`translateX(${-e}px)`,n=e<a/2?.8+e/(a/2)*.8<.8?.8:.8+e/(a/2)*.8:1-(e-a/2)/(a/2)*.8<.8?.8:1-(e-a/2)/(a/2)*.8,s.forEach((t=>{t.style.transform=`scale(${n})`}))}));const f=(t,e={root:null,rootMargin:"10px",threshold:.2})=>{const n=Array.isArray(t)?t:Array.from(t),o=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?t.target.classList.add("current"):t.target.classList.remove("current")}))}),e);n.forEach((t=>o.observe(t)))};f(t)},beforeUnmount(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll(){document.body.style.setProperty("--scroll",(window.scrollY/(document.body.offsetHeight-window.innerHeight)).toFixed(2))}}},S=n(1241);const E=(0,S.A)(L,[["render",C]]);var O=E,A={name:"App",components:{ScrollContent:O}};const x=(0,S.A)(A,[["render",s]]);var I=x;(0,o.Ef)(I).mount("#app")}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o].call(i.exports,i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,i){if(!o){var s=1/0;for(f=0;f<t.length;f++){o=t[f][0],r=t[f][1],i=t[f][2];for(var c=!0,l=0;l<o.length;l++)(!1&i||s>=i)&&Object.keys(n.O).every((function(t){return n.O[t](o[l])}))?o.splice(l--,1):(c=!1,i<s&&(s=i));if(c){t.splice(f--,1);var a=r();void 0!==a&&(e=a)}}return e}i=i||0;for(var f=t.length;f>0&&t[f-1][2]>i;f--)t[f]=t[f-1];t[f]=[o,r,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={524:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,i,s=o[0],c=o[1],l=o[2],a=0;if(s.some((function(e){return 0!==t[e]}))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(l)var f=l(n)}for(e&&e(o);a<s.length;a++)i=s[a],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(f)},o=self["webpackChunkproject"]=self["webpackChunkproject"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(3995)}));o=n.O(o)})();
//# sourceMappingURL=app.34d63b99.js.map