(()=>{var e,a={464:()=>{window.typetura={selectors:[".typetura",".flexible-type","article","section","aside"]},$(document).ready((function(){$(".slideshow").slick({centerMode:!0,centerPadding:"15%",slidesToShow:1,variableWidth:!0,adaptiveHeight:!1})}));var e=new Instafeed({target:"stream1",clientId:"17841401857240059",accessToken:InstagramToken,limit:4,template:'<div><img title="{{caption}}" src="{{image}}" /><span class="username"><a href="{{link}}">{{username}}</a></span></div>'}),a=new Instafeed({target:"stream2",clientId:"17841400011612286",accessToken:"IGQVJXbjIzeVFIb2lZAeWJ4X0NhRVBnUHlleTA4bEV2RWhNc3k5VUFHUXNMX05iV3RRQmp4NVhrRUF6eDlPOVkwQ1Q1djY1dUw0bms4ZAHV2SXkwbW9qWEpGWmc0a1p5QWpBaE1JTl9B",limit:4,template:'<div><img title="{{caption}}" src="{{image}}" /><span class="username"><a href="{{link}}">{{username}}</span></a></div>'});e.run(),a.run(),$((function(){var e=$(".main-nav");$(window).scroll((function(){$(window).scrollTop()>=200?e.removeClass("header-static").addClass("header-scroll"):e.removeClass("header-scroll").addClass("header-static")}))})),$(".hamb").click((function(){$("body").toggleClass("menu-open")})),$(".mobile-nav a").click((function(){$("body").removeClass("menu-open")})),document.querySelectorAll('a[href^="#"]').forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})}))}))},622:()=>{}},r={};function t(e){var n=r[e];if(void 0!==n)return n.exports;var i=r[e]={exports:{}};return a[e](i,i.exports,t),i.exports}t.m=a,e=[],t.O=(a,r,n,i)=>{if(!r){var o=1/0;for(d=0;d<e.length;d++){for(var[r,n,i]=e[d],s=!0,l=0;l<r.length;l++)(!1&i||o>=i)&&Object.keys(t.O).every((e=>t.O[e](r[l])))?r.splice(l--,1):(s=!1,i<o&&(o=i));if(s){e.splice(d--,1);var c=n();void 0!==c&&(a=c)}}return a}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[r,n,i]},t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),(()=>{var e={752:0,830:0};t.O.j=a=>0===e[a];var a=(a,r)=>{var n,i,[o,s,l]=r,c=0;if(o.some((a=>0!==e[a]))){for(n in s)t.o(s,n)&&(t.m[n]=s[n]);if(l)var d=l(t)}for(a&&a(r);c<o.length;c++)i=o[c],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(d)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(a.bind(null,0)),r.push=a.bind(null,r.push.bind(r))})(),t.O(void 0,[830],(()=>t(464)));var n=t.O(void 0,[830],(()=>t(622)));n=t.O(n)})();