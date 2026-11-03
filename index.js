import{a as l,S as m,i as c}from"./assets/vendor-BX8YMJUK.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const d="58353545-3b2a3ecf65c96ffce892d02a2";l.defaults.baseURL="https://pixabay.com/api/";function g(r){return l.get("",{params:{key:d,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const f=document.querySelector(".gallery"),u=document.querySelector(".loader-wrapper"),y=new m(".gallery .gallery-link",{captionsData:"alt",captionDelay:250});function h({webformatURL:r,largeImageURL:o,tags:i,likes:a,views:e,comments:t,downloads:s}){return`
    <li class="gallery-item">
      <a class="gallery-link" href="${o}">
        <img class="gallery-image" src="${r}" alt="${i}" loading="lazy" />
      </a>
      <ul class="info">
        <li class="info-item">
          <p class="info-label">Likes</p>
          <p class="info-value">${a}</p>
        </li>
        <li class="info-item">
          <p class="info-label">Views</p>
          <p class="info-value">${e}</p>
        </li>
        <li class="info-item">
          <p class="info-label">Comments</p>
          <p class="info-value">${t}</p>
        </li>
        <li class="info-item">
          <p class="info-label">Downloads</p>
          <p class="info-value">${s}</p>
        </li>
      </ul>
    </li>`}function b(r){const o=r.map(h).join("");f.insertAdjacentHTML("beforeend",o),y.refresh()}function L(){f.innerHTML=""}function v(){u.classList.add("is-visible")}function w(){u.classList.remove("is-visible")}const S=document.querySelector(".form"),p={position:"topRight",messageColor:"#ffffff",iconColor:"#ffffff",maxWidth:432};function n(r){c.error({...p,message:r,backgroundColor:"#ef4040"})}function q(r){c.warning({...p,message:r,backgroundColor:"#ffa000"})}S.addEventListener("submit",$);function $(r){r.preventDefault();const o=r.currentTarget.elements["search-text"].value.trim();if(!o){q("Please enter a search query.");return}L(),v(),g(o).then(i=>{if(i.hits.length===0){n("Sorry, there are no images matching your search query. Please try again!");return}b(i.hits)}).catch(i=>{n(`Something went wrong: ${i.message}`)}).finally(()=>{w()})}
//# sourceMappingURL=index.js.map
