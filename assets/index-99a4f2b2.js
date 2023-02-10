(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const c={section:document.querySelector(".js-section-one"),buttonOne:document.querySelector(".js-button-one"),buttonTwo:document.querySelector(".js-button-two"),init:function(){this.switching()},switching:function(){this.buttonOne.addEventListener("click",()=>{this.section.classList.remove("section--slide"),this.buttonTwo.classList.remove("bottom__button--active"),this.buttonOne.classList.add("bottom__button--active")}),this.buttonTwo.addEventListener("click",()=>{this.section.classList.add("section--slide"),this.buttonOne.classList.remove("bottom__button--active"),this.buttonTwo.classList.add("bottom__button--active")})}};class a{constructor(e,i,n){this.main={element:e},this.main.images=[],this.main.element.style.isolation="isolate",this.properties=n,this.imageInitializing(i),this.imageFading()}imageInitializing(e){for(let i=0;i<e.length;i++)this.main.images[i]=document.createElement("div"),this.main.images[i].style.background=`url('${e[i]}') no-repeat center center / cover`,this.properties&&this.properties.height?this.main.images[i].style.height=`${this.properties.height}`:this.main.images[i].style.height="200px",this.properties&&this.properties.width?this.main.images[i].style.width=`${this.properties.width}`:this.main.images[i].style.width="200px",this.main.images[i].style.position="absolute",this.main.images[i].style.zIndex="-1",this.main.images[i].style.opacity="0",this.properties&&this.properties.animation?(!this.properties.animation.transitionTime&&!this.properties.animation.moving&&(this.main.images[i].style.transition="opacity 300ms ease-in-out"),!this.properties.animation.transitionTime&&this.properties.animation.moving&&(this.main.images[i].style.transition="300ms ease-in-out"),this.properties.animation.transitionTime&&!this.properties.animation.moving&&(this.main.images[i].style.transition=`opacity ${this.properties.animation.transitionTime}ms ease-in-out`),this.properties.animation.transitionTime&&this.properties.animation.moving&&(this.main.images[i].style.transition=`${this.properties.animation.transitionTime}ms ease-in-out`)):this.main.images[i].style.transition="opacity 300ms ease-in-out",this.main.element.appendChild(this.main.images[i])}imageFading(){let e=0,i=0;this.properties&&this.properties.animation&&this.properties.animation.moving&&this.main.images.forEach(n=>{const t=Math.floor(Math.random()*(this.main.element.clientWidth-100)),s=Math.floor(Math.random()*(this.main.element.clientHeight-100));n.style.top=`${s}px`,n.style.left=`${t}px`}),setInterval(()=>{if(e<this.main.images.length){const n=Math.floor(Math.random()*(this.main.element.clientWidth-100)),t=Math.floor(Math.random()*(this.main.element.clientHeight-100));this.main.images[e].style.top=`${t}px`,this.main.images[e].style.left=`${n}px`,this.main.images[e].style.opacity="1",e++}else{e=0;const n=Math.floor(Math.random()*(this.main.element.clientWidth-100)),t=Math.floor(Math.random()*(this.main.element.clientHeight-100));this.main.images[e].style.top=`${t}px`,this.main.images[e].style.left=`${n}px`,this.main.images[e].style.opacity="1",e=1}},this.properties&&this.properties.cycle?this.properties.cycle.duration:1e3),setTimeout(()=>{setInterval(()=>{i<this.main.images.length?(this.main.images[i].style.opacity="0",i++):(i=0,this.main.images[i].style.opacity="0",i=1)},this.properties&&this.properties.cycle?this.properties.cycle.duration:1e3)},this.properties&&this.properties.cycle?this.properties.cycle.duration*this.properties.cycle.numberOfImages:3e3)}}c.init();const r=["images/fading-backgrounds-1.jpg","images/fading-backgrounds-2.jpg","images/fading-backgrounds-3.jpg","images/fading-backgrounds-4.jpg","images/fading-backgrounds-5.jpg","images/fading-backgrounds-6.jpg","images/fading-backgrounds-7.jpg","images/fading-backgrounds-8.jpg","images/fading-backgrounds-9.jpg","images/fading-backgrounds-10.jpg"],l=document.querySelector(".js-section-one"),h={height:"200px",width:"300px",animation:{transitionTime:500,moving:!1},cycle:{duration:1e3,numberOfImages:3}};new a(l,r,h);const p=document.querySelector(".js-section-two"),g={height:"200px",width:"300px",animation:{transitionTime:1200,moving:!0},cycle:{duration:400,numberOfImages:3}};new a(p,r,g);
