(()=>{var e,r={464:()=>{$(document).ready((function(){$(".slideshow").slick({centerMode:!0,centerPadding:"15%",slidesToShow:1,variableWidth:!0,adaptiveHeight:!1})})),new Instafeed({target:"stream1",clientId:"17841401857240059",accessToken:InstagramToken,limit:8,template:'<div><img title="{{caption}}" src="{{image}}" /><span class="username">{{username}}</span></div>'}).run(),$((function(){var e=$(".main-nav");$(window).scroll((function(){$(window).scrollTop()>=200?e.removeClass("header-static").addClass("header-scroll"):e.removeClass("header-scroll").addClass("header-static")}))})),$(".hamb").click((function(){$("body").toggleClass("menu-open")})),$(".mobile-nav a").click((function(){$("body").removeClass("menu-open")})),document.querySelectorAll('a[href^="#"]').forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})}))}))},622:()=>{}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var a=n[e]={exports:{}};return r[e](a,a.exports,o),a.exports}o.m=r,e=[],o.O=(r,n,t,a)=>{if(!n){var i=1/0;for(d=0;d<e.length;d++){for(var[n,t,a]=e[d],s=!0,l=0;l<n.length;l++)(!1&a||i>=a)&&Object.keys(o.O).every((e=>o.O[e](n[l])))?n.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(d--,1);var c=t();void 0!==c&&(r=c)}}return r}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[n,t,a]},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={752:0,830:0};o.O.j=r=>0===e[r];var r=(r,n)=>{var t,a,[i,s,l]=n,c=0;if(i.some((r=>0!==e[r]))){for(t in s)o.o(s,t)&&(o.m[t]=s[t]);if(l)var d=l(o)}for(r&&r(n);c<i.length;c++)a=i[c],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(d)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))})(),o.O(void 0,[830],(()=>o(464)));var t=o.O(void 0,[830],(()=>o(622)));t=o.O(t)})();