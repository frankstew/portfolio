var F=Object.defineProperty;var I=(n,t,e)=>t in n?F(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var h=(n,t,e)=>(I(n,typeof t!="symbol"?t+"":t,e),e);import{T as b,M as D,S as O,a as k,b as x,P as A,W as N,A as G,B as U,c as C,F as q,d as E}from"./vendor.742aff41.js";const z=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function e(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=e(o);fetch(o.href,i)}};z();function y(n,t){return Math.random()*(t-n)+n}class u{constructor(t,e,s,o,i=y(1e-4,.05),c=null,d=y(.001,.01),g=Math.random()<.5?-1:1){h(this,"setRotationDirection",function(t){if(t==null){var e=Math.floor(y(1,4));e==1?this.rotationDirection=[1,0,0]:e==2?this.rotationDirection=[0,1,0]:this.rotationDirection=[0,0,1]}else this.rotationDirection=t;Math.random()<.5&&(this.rotationDirection[0]*=-1,this.rotationDirection[1]*=-1,this.rotationDirection[2]*=-1)});h(this,"cartesianFromPolar",function(t,e){return[t*Math.cos(e),t*Math.sin(e),0]});h(this,"createPlanet",function(t,e,s,o){const i=new b().load(t),c=new b().load(e),d=new D(new O(s[0],s[1],s[2]),new k({map:i,normalMap:c}));return d.position.x=o[0],d.position.y=o[1],d.position.z=o[2],d});h(this,"lengthOfVec",function(t){for(var e=0,s=0;s<t.length;s++)e+=t[s]*t[s];return Math.sqrt(e)});h(this,"rotatePlanet",function(){var t=this.lengthOfVec(this.rotationDirection);this.planetBody.rotation.x+=this.rotationSpeed*this.rotationDirection[0]/t,this.planetBody.rotation.y+=this.rotationSpeed*this.rotationDirection[1]/t,this.planetBody.rotation.z+=this.rotationSpeed*this.rotationDirection[2]/t});h(this,"orbitPlanet",function(){if(this.planetBody.position.y<0)var t=-Math.acos(this.planetBody.position.x/this.radius);else var t=Math.acos(this.planetBody.position.x/this.radius);t+=this.orbitDirection*this.orbitSpeed,this.planetBody.position.x=this.radius*Math.cos(t),this.planetBody.position.y=this.radius*Math.sin(t)});this.radius=o[0],this.initialPolarAngle=o[1],this.planetBody=this.createPlanet(t,e,s,this.cartesianFromPolar(this.radius,this.initialPolarAngle)),this.rotationSpeed=i,this.setRotationDirection(c),this.orbitSpeed=d,this.orbitDirection=g}}var V="/assets/Alien_Flesh_002_COLOR.3086309c.jpg",W="/assets/Alien_Flesh_002_NRM.d9888cb8.jpg",H="/assets/Blue_Ice_001_COLOR.1a825b7b.jpg",J="/assets/Blue_Ice_001_NORM.4fdb24b9.jpg",T="/assets/Encrusted_Gems_002_COLOR.5457be8f.jpg",Z="/assets/Encrusted_Gems_002_NORM.77baac65.jpg",$="/assets/Jungle_Floor_001_basecolor.2f61348b.jpg",K="/assets/Jungle_Floor_001_normal.b61c6ddf.jpg",Y="/assets/Lava_006_basecolor.f23479b4.jpg",Q="/assets/Lava_006_normal.6ef5225e.jpg",X="/assets/Rock_038_basecolor.2d6174ba.jpg",tt="/assets/Rock_038_normal.f1254928.jpg",et="/assets/Sea_Rock_001_BaseColor.fe0c26bf.jpg",ot="/assets/Sea_Rock_001_Normal.7f2e040e.jpg",nt="/assets/Sun.f22b1cfb.jpg";const r=new x,l=new A(75,window.innerWidth/window.innerHeight,.1,1e3);l.position.setZ(100);const p=new N({canvas:document.querySelector("#background")});p.setPixelRatio(window.devicePixelRatio);p.setSize(window.innerWidth,window.innerHeight);l.position.setZ(100);p.render(r,l);const v=new G(16777215);v.position.set(5,5,5);r.add(v);var at=document.getElementById("work");console.log(at);function st(){const n=new U,t=new C({color:16777215});var e=it();n.setAttribute("position",new q(e,3));const s=new E(n,t);r.add(s)}function it(){const n=1e3,t=[];for(let i=0;i<1200;i++){var e=a(3*n/4,n),s=a(0,2*Math.PI),o=a(0,Math.PI);const c=e*Math.sin(o)*Math.cos(s),d=e*Math.sin(o)*Math.sin(s)+500,g=e*Math.cos(o);t.push(c,g,d)}return t}st();function a(n,t){return Math.random()*(t-n)+n}var _=new u(V,W,[a(2,10),32,32],[a(280,290),a(0,2*Math.PI)],.01,[0,0,1],.005,-1);r.add(_.planetBody);const M=new u(H,J,[a(2,10),32,32],[a(65,70),a(0,2*Math.PI)]);r.add(M.planetBody);const w=new u(T,Z,[a(2,10),32,32],[a(95,105),a(0,2*Math.PI)]);r.add(w.planetBody);const P=new u($,K,[a(2,10),32,32],[a(130,145),a(0,2*Math.PI)]);r.add(P.planetBody);const R=new u(Y,Q,[a(20,30),32,32],[a(170,185),a(0,2*Math.PI)]);r.add(R.planetBody);const B=new u(X,tt,[a(2,10),32,32],[a(210,225),a(0,2*Math.PI)]);r.add(B.planetBody);const L=new u(et,ot,[a(2,10),32,32],[a(250,270),a(0,2*Math.PI)]);r.add(L.planetBody);const S=new u(nt,null,[50,32,32],[0,0],.002);r.add(S.planetBody);function rt(){const n=document.body.getBoundingClientRect().top;l.position.z>20||l.position.z<-20||(l.position.z=n*-.01,console.log(l.position))}document.body.onscroll=rt;function f(n){n.rotatePlanet(),n.orbitPlanet()}function j(){requestAnimationFrame(j),f(_),f(M),f(w),f(P),f(R),f(B),f(L),S.rotatePlanet(),l.position.setZ(600),l.position.setY(100),p.render(r,l)}j();var m=document.getElementById("about_me_button");m.onclick=()=>{document.querySelector(".bio").classList.toggle("collapsed"),m.style.opacity=0,m.disabled=!0,m.classList.toggle("hidden")};var lt=document.querySelector(".bio");let ct=window.innerHeight*1.5/144;lt.style.transition="max-height "+ct.toString()+"s ease-out";