(()=>{var e,r={464:()=>{$(document).ready((function(){$(".slideshow").slick({centerMode:!0,centerPadding:"15%",slidesToShow:1,variableWidth:!0,adaptiveHeight:!1})})),new Instafeed({target:"stream1",clientId:"17841401857240059",accessToken:InstagramToken,limit:8,template:'<div><img title="{{caption}}" src="{{image}}" /></div>'}).run(),$((function(){var e=$(".main-nav");$(window).scroll((function(){$(window).scrollTop()>=200?e.removeClass("header-static").addClass("header-scroll"):e.removeClass("header-scroll").addClass("header-static")}))})),$(".hamb").click((function(){$("body").toggleClass("menu-open")})),$(".mobile-nav a").click((function(){$("body").removeClass("menu-open")})),document.querySelectorAll('a[href^="#"]').forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})}))}))},622:()=>{}},o={};function t(e){var n=o[e];if(void 0!==n)return n.exports;var a=o[e]={exports:{}};return r[e](a,a.exports,t),a.exports}t.m=r,e=[],t.O=(r,o,n,a)=>{if(!o){var i=1/0;for(d=0;d<e.length;d++){for(var[o,n,a]=e[d],l=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(t.O).every((e=>t.O[e](o[s])))?o.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(d--,1);var c=n();void 0!==c&&(r=c)}}return r}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[o,n,a]},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={752:0,830:0};t.O.j=r=>0===e[r];var r=(r,o)=>{var n,a,[i,l,s]=o,c=0;if(i.some((r=>0!==e[r]))){for(n in l)t.o(l,n)&&(t.m[n]=l[n]);if(s)var d=s(t)}for(r&&r(o);c<i.length;c++)a=i[c],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(d)},o=self.webpackChunk=self.webpackChunk||[];o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o))})(),t.O(void 0,[830],(()=>t(464)));var n=t.O(void 0,[830],(()=>t(622)));n=t.O(n)})();