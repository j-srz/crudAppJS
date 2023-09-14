(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const s=async()=>(await(await fetch("https://api.breakingbadquotes.xyz/v1/quotes")).json())[0],u=async o=>{document.querySelector("#app-title").innerHTML="Breakingbad App",o.innerHTML="Loading...";const n=document.createElement("blockquote"),c=document.createElement("h3"),r=document.createElement("button");r.innerText="Next Quote",r.addEventListener("click",async()=>{o.innerHTML="Loading...";const t=await s();e(t)});const e=t=>{n.innerHTML=t.quote,c.innerHTML=t.author,o.replaceChildren(n,c,r)};s().then(e)};document.querySelector("#app").innerHTML=`

    <h1 id="app-title">Vite+JS</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>

  </div>
`;const a=document.querySelector(".card");u(a);
