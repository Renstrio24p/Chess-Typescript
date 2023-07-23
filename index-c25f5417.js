(function(){const q=document.createElement("link").relList;if(q&&q.supports&&q.supports("modulepreload"))return;for(const k of document.querySelectorAll('link[rel="modulepreload"]'))f(k);new MutationObserver(k=>{for(const h of k)if(h.type==="childList")for(const g of h.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&f(g)}).observe(document,{childList:!0,subtree:!0});function m(k){const h={};return k.integrity&&(h.integrity=k.integrity),k.referrerPolicy&&(h.referrerPolicy=k.referrerPolicy),k.crossOrigin==="use-credentials"?h.credentials="include":k.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function f(k){if(k.ep)return;k.ep=!0;const h=m(k);fetch(k.href,h)}})();function qe(p){return p&&p.__esModule&&Object.prototype.hasOwnProperty.call(p,"default")?p.default:p}var Q={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(p){(function(){var q={}.hasOwnProperty;function m(){for(var f=[],k=0;k<arguments.length;k++){var h=arguments[k];if(h){var g=typeof h;if(g==="string"||g==="number")f.push(this&&this[h]||h);else if(Array.isArray(h))f.push(m.apply(this,h));else if(g==="object"){if(h.toString!==Object.prototype.toString&&!h.toString.toString().includes("[native code]")){f.push(h.toString());continue}for(var b in h)q.call(h,b)&&h[b]&&f.push(this&&this[b]||b)}}}return f.join(" ")}p.exports?(m.default=m,p.exports=m):window.classNames=m})()})(Q);var we=Q.exports;const me=qe(we),be={},F=document.createElement("div"),Ce=()=>{F.classList.add(`${Be("chessboard-container")}`),F.id="chessboard-container"},j=new Set;function J(){let p;do p=Math.random().toString(36).substring(2);while(j.has(p));return j.add(p),p}function Se(){let p=[],q=[];const m=["g1","g8","c1","c8"];let f=!0,k="blank";const h=document.getElementsByClassName("square"),g=document.getElementsByClassName("piece"),b=document.getElementsByTagName("img");z(),X(),G();function G(){const e=document.getElementsByClassName("square");for(let t=0;t<e.length;t++){let i=8-Math.floor(t/8),a=String.fromCharCode(97+t%8),c=e[t];c.id=a+i;let r="",n="",l="";c.querySelector(".piece")?c.querySelector(".piece")!==null&&(r=c.querySelector(".piece").getAttribute("color"),n=c.querySelector(".piece").classList[1],l=c.querySelector(".piece").id):(r="blank",n="blank",l="blank");let s={squareId:c.id,pieceColor:r,pieceType:n,pieceId:l};p.push(s)}}function S(e,t,i){let a=i.find(s=>s.squareId===e),c=i.find(s=>s.squareId===t),r=a.pieceColor,n=a.pieceType,l=a.pieceId;c.pieceColor=r,c.pieceType=n,c.pieceId=l,a.pieceColor="blank",a.pieceType="blank",a.pieceId="blank"}function y(e,t,i,a,c){q.push({from:e,to:t,pieceType:i,pieceColor:a,captured:c})}function U(e,t,i,a,c){let r,n,l;if(a=="g1"?(r="rookh1",n="f1",l="f1"):a=="c1"?(r="rooka1",n="d1",l="d1"):a=="g8"?(r="rookh8",n="f8",l="f8"):a=="c8"&&(r="rooka8",n="d8",l="d8"),T(l,t,c))return;let s=document.getElementById(r),o=document.getElementById(n);o.appendChild(s),S(s.id.slice(-2),o.id,c),document.getElementById(a).appendChild(e),f=!f,S(i,a,c),y(i,a,"king",t,!1),E()}function V(e,t,i,a){let c=a[0],r=parseInt(a[1]);r+=t==="white"?-1:1;let n=c+r;const l=document.getElementById(n);for(;l.firstChild;)l.removeChild(l.firstChild);let s=p.find(d=>d.squareId===n);s.pieceColor="blank",s.pieceType="blank",s.pieceId="blank",document.getElementById(a).appendChild(e),f=!f,S(i,a,p),y(i,a,"pawn",t,!0),E()}function I(e){return e.map(i=>({...i}))}function z(){for(let e=0;e<h.length;e++){h[e].addEventListener("dragover",Y),h[e].addEventListener("drop",ee);let t=8-Math.floor(e/8),i=String.fromCharCode(97+e%8),a=h[e];a.id=i+t}}function X(){for(let e=0;e<g.length;e++)g[e].addEventListener("dragstart",Z),g[e].setAttribute("draggable","true"),g[e].id=g[e].className.split(" ")[1]+g[e].parentElement.id;for(let e=0;e<b.length;e++)b[e].setAttribute("draggable","false")}function Y(e){e.preventDefault()}function Z(e){const t=e.target,i=t.getAttribute("color"),a=t.classList[1],c=t.id;if(f&&i=="white"||!f&&i=="black"){const r=t.parentNode.id;e.dataTransfer.setData("text",t.id+"|"+r);let l=L(r,{pieceColor:i,pieceType:a,pieceId:c},p),s=JSON.stringify(l);e.dataTransfer.setData("application/json",s)}}function ee(e){e.preventDefault();let t=e.dataTransfer.getData("text"),[i,a]=t.split("|"),c=e.dataTransfer.getData("application/json");if(c.length==0)return;let r=JSON.parse(c);const n=document.getElementById(i),l=n.getAttribute("color"),s=n.classList[1],o=e.currentTarget;let u=o.id;if(r=H(r,a,l,s),s=="king"&&T(u,l,p))return;let d=C(u,p);if(d.pieceColor=="blank"&&r.includes(u)){let v=!1;if(s=="king"&&(v=T(a,l,p)),s=="king"&&!P(l)&&m.includes(u)&&!v){U(n,l,a,u,p);return}if(s=="king"&&!P(l)&&m.includes(u)&&v)return;if(s=="pawn"&&k==u){V(n,l,a,u),k="blank";return}o.appendChild(n),f=!f,S(a,u,p),y(a,u,s,l,!1),E();return}if(d.pieceColor!="blank"&&r.includes(u)){for(;o.firstChild;)o.removeChild(o.firstChild);o.appendChild(n),f=!f,S(a,u,p),y(a,u,s,l,!0),E();return}}function L(e,t,i){const a=t.pieceColor,c=t.pieceType;let r=[];if(c=="rook")return r=A(e,a,i),r;if(c=="bishop")return r=N(e,a,i),r;if(c=="queen")return r=re(e,a,i),r;if(c=="knight")return r=O(e,a,i),r;if(c=="pawn")return r=te(e,a,i),r;if(c=="king")return r=K(e,a,i),r}function te(e,t,i){let a=W(e,t,i),c=ne(e,t,i);return[...a,...c]}function W(e,t,i){const a=e.charAt(0),c=e.charAt(1),r=parseInt(c);let n=[],l=a,s=r,o=l+s;const u=t=="white"?1:-1;s+=u;for(let d=-1;d<=1;d+=2)if(l=String.fromCharCode(a.charCodeAt(0)+d),l>="a"&&l<="h"){o=l+s;let w=i.find(B=>B.squareId===o).pieceColor;if(w!="blank"&&w!=t&&n.push(o),w=="blank"){o=l+c;let B=r+u*2,R=l+B;if(ie(o,R,u)){let x=r+u,ge=l+x;n.push(ge)}}}return n}function ie(e,t,i){let a=e.charAt(0),c=t.charAt(1);if(q.length==0)return!1;let r=q[q.length-1];return r.to===e&&r.from===t&&r.pieceType=="pawn"?(a=e[0],c=parseInt(e[1]),c+=i,k=a+c,!0):!1}function ne(e,t,i){const a=e.charAt(0),c=e.charAt(1),r=parseInt(c);let n=[],l=a,s=r,o=l+s;const u=t=="white"?1:-1;s+=u,o=l+s;let d=i.find(w=>w.squareId===o),v=d.pieceColor;return v!="blank"||(n.push(o),!(r==2&&t=="white"||r==7&&t=="black"))||(s+=u,o=l+s,d=i.find(w=>w.squareId===o),v=d.pieceColor,v!="blank"&&v!="blank")||n.push(o),n}function O(e,t,i){const a=e.charCodeAt(0)-97,c=e.charAt(1),r=parseInt(c);let n=a,l=r,s=[];return[[-2,1],[-1,2],[1,2],[2,1],[2,-1],[1,-2],[-1,-2],[-2,-1]].forEach(u=>{if(n=a+u[0],l=r+u[1],n>=0&&n<=7&&l>0&&l<=8){let d=String.fromCharCode(n+97)+l,w=i.find(B=>B.squareId===d).pieceColor;if(w!="blank"&&w==t)return s;s.push(String.fromCharCode(n+97)+l)}}),s}function A(e,t,i){let a=se(e,t,i),c=ce(e,t,i),r=oe(e,t,i),n=ue(e,t,i);return[...a,...c,...r,...n]}function N(e,t,i){let a=pe(e,t,i),c=de(e,t,i),r=ve(e,t,i),n=he(e,t,i);return[...a,...c,...r,...n]}function re(e,t,i){let a=N(e,t,i),c=A(e,t,i);return[...a,...c]}function K(e,t,i){const a=e.charCodeAt(0)-97,c=e.charAt(1),r=parseInt(c);let n=[];[[0,1],[0,-1],[1,1],[1,-1],[-1,0],[-1,1],[-1,-1],[1,0]].forEach(u=>{let d=a+u[0],v=r+u[1];if(d>=0&&d<=7&&v>0&&v<=8){let w=String.fromCharCode(d+97)+v,R=i.find(x=>x.squareId===w).pieceColor;if(R!="blank"&&R==t)return n;n.push(String.fromCharCode(d+97)+v)}});let s=ae(t,i),o=le(t,i);return s!="blank"&&n.push(s),o!="blank"&&n.push(o),n}function ae(e,t){let i=e==="white"?"1":"8",a=t.find(r=>r.squareId===`f${i}`),c=t.find(r=>r.squareId===`g${i}`);return!a||!c||a.pieceColor!=="blank"||c.pieceColor!=="blank"||P(e)||D(e,`h${i}`)?"blank":`g${i}`}function le(e,t){let i=e==="white"?"1":"8",a=t.find(n=>n.squareId===`d${i}`),c=t.find(n=>n.squareId===`c${i}`),r=t.find(n=>n.squareId===`b${i}`);return!a||!c||!r||a.pieceColor!=="blank"||c.pieceColor!=="blank"||r.pieceColor!=="blank"||P(e)||D(e,`a${i}`)?"blank":`c${i}`}function P(e){return q.find(i=>i.pieceColor===e&&i.pieceType==="king")!=null}function D(e,t){return q.find(a=>a.pieceColor===e&&a.pieceType==="rook"&&a.from===t)!=null}function se(e,t,i){const a=e.charAt(0),c=e.charAt(1);let n=parseInt(c),l=[];for(;n!=8;){n++;let s=a+n,u=i.find(d=>d.squareId===s).pieceColor;if(u!="blank"&&u==t||(l.push(s),u!="blank"&&u!=t))return l}return l}function ce(e,t,i){const a=e.charAt(0),c=e.charAt(1);let n=parseInt(c),l=[];for(;n!=1;){n--;let s=a+n,u=i.find(d=>d.squareId===s).pieceColor;if(u!="blank"&&u==t||(l.push(s),u!="blank"&&u!=t))return l}return l}function oe(e,t,i){const a=e.charAt(0),c=e.charAt(1);let r=a,n=[];for(;r!="a";){r=String.fromCharCode(r.charCodeAt(r.length-1)-1);let l=r+c,o=i.find(u=>u.squareId===l).pieceColor;if(o!="blank"&&o==t||(n.push(l),o!="blank"&&o!=t))return n}return n}function ue(e,t,i){const a=e.charAt(0),c=e.charAt(1);let r=a,n=[];for(;r!="h";){r=String.fromCharCode(r.charCodeAt(r.length-1)+1);let l=r+c,o=i.find(u=>u.squareId===l).pieceColor;if(o!="blank"&&o==t||(n.push(l),o!="blank"&&o!=t))return n}return n}function de(e,t,i){const a=e.charAt(0),c=e.charAt(1),r=parseInt(c);let n=a,l=r,s=[];for(;!(n=="a"||l==8);){n=String.fromCharCode(n.charCodeAt(n.length-1)-1),l++;let o=n+l,d=i.find(v=>v.squareId===o).pieceColor;if(d!="blank"&&d==t||(s.push(o),d!="blank"&&d!=t))return s}return s}function pe(e,t,i){const a=e.charAt(0),c=e.charAt(1),r=parseInt(c);let n=a,l=r,s=[];for(;!(n=="h"||l==8);){n=String.fromCharCode(n.charCodeAt(n.length-1)+1),l++;let o=n+l,d=i.find(v=>v.squareId===o).pieceColor;if(d!="blank"&&d==t||(s.push(o),d!="blank"&&d!=t))return s}return s}function he(e,t,i){const a=e.charAt(0),c=e.charAt(1),r=parseInt(c);let n=a,l=r,s=[];for(;!(n=="a"||l==1);){n=String.fromCharCode(n.charCodeAt(n.length-1)-1),l--;let o=n+l,d=i.find(v=>v.squareId===o).pieceColor;if(d!="blank"&&d==t||(s.push(o),d!="blank"&&d!=t))return s}return s}function ve(e,t,i){const a=e.charAt(0),c=e.charAt(1),r=parseInt(c);let n=a,l=r,s=[];for(;!(n=="h"||l==1);){n=String.fromCharCode(n.charCodeAt(n.length-1)+1),l--;let o=n+l,d=i.find(v=>v.squareId===o).pieceColor;if(d!="blank"&&d==t||(s.push(o),d!="blank"&&d!=t))return s}return s}function C(e,t){let i=t.find(n=>n.squareId===e);const a=i.pieceColor,c=i.pieceType,r=i.pieceId;return{pieceColor:a,pieceType:c,pieceId:r}}function T(e,t,i){let a=A(e,t,i);for(let s of a){let o=C(s,i);if((o.pieceType==="rook"||o.pieceType==="queen")&&t!==o.pieceColor)return!0}let c=N(e,t,i);for(let s of c){let o=C(s,i);if((o.pieceType==="bishop"||o.pieceType==="queen")&&t!==o.pieceColor)return!0}let r=O(e,t,i);for(let s of r){let o=C(s,i);if(o.pieceType==="knight"&&t!==o.pieceColor)return!0}let n=W(e,t,i);for(let s of n){let o=C(s,i);if(o.pieceType==="pawn"&&t!==o.pieceColor)return!0}let l=K(e,t,i);for(let s of l){let o=C(s,i);if(o.pieceType==="king"&&t!==o.pieceColor)return!0}return!1}function M(e){let t=q.findLast(i=>i.pieceType==="king"&&i.pieceColor===e);return t==null?f?"e1":"e8":t.to}function H(e,t,i,a){let c=M(f?"white":"black"),r=I(p);return e.slice().forEach(l=>{let s=l;r=I(p),S(t,s,r),a!="king"&&T(c,i,r)&&(e=e.filter(o=>o!=s)),a=="king"&&T(s,i,r)&&(e=e.filter(o=>o!=s))}),e}function E(){let e=M(f?"white":"black"),t=f?"white":"black",i=I(p);if(!T(e,t,i)||fe(i,t).length>0)return;let r="";f?r="Black Wins!":r="White Wins!",ke(r)}function fe(e,t){return e.filter(i=>i.pieceColor===t).flatMap(i=>{const{pieceColor:a,pieceType:c,pieceId:r}=C(i.squareId,e);if(r==="blank")return[];let n=I(e);const l={pieceColor:a,pieceType:c,pieceId:r};let s=L(i.squareId,l,n);return s=H(s,i.squareId,a,c),s})}function ke(e){const t=document.getElementById("alert");t.innerHTML=e,t.style.display="block",setTimeout(function(){t.style.display="none"},3e3)}}function $(p){p.innerHTML=`
        <div class="chessBoard">        
        <!-- Add the pawn div element -->
        <div class="square white">
          <div class="piece rook" color="black"  >
              <img src="Black-Rook.png" alt="Rook" >
            </div>
        </div>
        <div class="square black">
          <div class="piece knight" color="black" >
              <img src="Black-Knight.png" alt="pawn" >
            </div>
        </div>
        <div class="square white">
          <div class="piece bishop" color="black" >
              <img src="Black-Bishop.png" alt="pawn" >
            </div>
        </div>
        <div class="square black">
          <div class="piece queen" color="black" >
              <img src="Black-Queen.png" alt="Queen" >
            </div>
        </div>
        <div class="square white">
          <div class="piece king" color="black" >
              <img src="Black-King.png" alt="King" >
            </div>
        </div>
        <div class="square black">
          <div class="piece bishop" color="black" >
              <img src="Black-Bishop.png" alt="Bishop" >
            </div>
        </div>
        <div class="square white">
          <div class="piece knight" color="black">
              <img src="Black-Knight.png" alt="Knight" >
            </div>
        </div>
        <div class="square black">
          <div class="coordinate rank whiteText">8</div>
  
          <div class="piece rook" color="black" >
              <img src="Black-Rook.png" alt="Rook" >
            </div>
        </div>
       <!-- ------------------------------------------------------------------------- -->
  
        <div class="square black">
          <div class="piece pawn" color="black"  >
              <img src="Black-Pawn.png" alt="pawn" >
            </div>
  
        </div>
        <div class="square white">
          <div class="piece pawn" color="black" >
              <img src="Black-Pawn.png" alt="pawn" >
            </div>
  
        </div>
        <div class="square black">
          <div class="piece pawn" color="black" >
              <img src="Black-Pawn.png" alt="pawn" >
            </div>
  
        </div>
        <div class="square white">
          <div class="piece pawn" color="black" >
              <img src="Black-Pawn.png" alt="pawn" >
            </div>
  
        </div>
        <div class="square black">
          <div class="piece pawn" color="black"  >
              <img src="Black-Pawn.png" alt="pawn" >
            </div>
  
        </div>
        <div class="square white">
          <div class="piece pawn" color="black"  >
              <img src="Black-Pawn.png" alt="pawn">
            </div>
  
        </div>
        <div class="square black">
          <div class="piece pawn" color="black"  >
              <img src="Black-Pawn.png" alt="pawn" >
            </div>
  
        </div>
        <div class="square white">
          <div class="coordinate rank blackText">7</div>
  
          <div class="piece pawn" color="black"  >
              <img src="Black-Pawn.png" alt="pawn" >
            </div>
  
        </div>
      <!-- ------------------------------------------------------------------------- -->
        <div class="square white"></div>
        <div class="square black"></div>
        <div class="square white"></div>
        <div class="square black"></div>
        <div class="square white"></div>
        <div class="square black"></div>
        <div class="square white"></div>
        <div class="square black">
          <div class="coordinate rank whiteText">6</div>
  
        </div>
      <!-- ------------------------------------------------------------------------- -->
  
        <div class="square black"></div>
        <div class="square white"></div>
        <div class="square black"></div>
        <div class="square white"></div>
        <div class="square black"></div>
        <div class="square white"></div>
        <div class="square black"></div>
        <div class="square white">
          <div class="coordinate rank blackText">5</div>
  
        </div>
      <!-- ------------------------------------------------------------------------- -->
  
        <div class="square white"></div>
        <div class="square black"></div>
        <div class="square white"></div>
        <div class="square black"></div>
        <div class="square white"></div>
        <div class="square black"></div>
        <div class="square white"></div>
        <div class="square black">
          <div class="coordinate rank whiteText">4</div>
  
        </div>
      <!-- ------------------------------------------------------------------------- -->
  
        <div class="square black"></div>
        <div class="square white"></div>
        <div class="square black"></div>
        <div class="square white"></div>
        <div class="square black"></div>
        <div class="square white"></div>
        <div class="square black"></div>
        <div class="square white">
          <div class="coordinate rank blackText">3</div>
        </div>
      <!-- ------------------------------------------------------------------------- -->
  
        <div class="square white">
          <div class="piece pawn" color="white" >
              <img src="White-Pawn.png" alt="pawn" >
            </div>
        </div>
        <div class="square black">
          <div class="piece pawn" color="white"  >
              <img src="White-Pawn.png" alt="pawn" >
            </div>
        </div>
        <div class="square white">
          <div class="piece pawn" color="white">
              <img src="White-Pawn.png" alt="pawn" >
            </div>
        </div>
        <div class="square black">
          <div class="piece pawn" color="white" >
              <img src="White-Pawn.png" alt="pawn" >
            </div>
        </div>
        <div class="square white">
          <div class="piece pawn" color="white" >
              <img src="White-Pawn.png" alt="pawn" >
            </div>
        </div>
        <div class="square black">
          <div class="piece pawn" color="white" >
              <img src="White-Pawn.png" alt="pawn" >
            </div>
        </div>
        <div class="square white">
          <div class="piece pawn" color="white" >
              <img src="White-Pawn.png" alt="pawn" >
            </div>
        </div>
        <div class="square black">
          <div class="coordinate rank whiteText">2</div>
  
          <div class="piece pawn" color="white" >
              <img src="White-Pawn.png" alt="pawn" >
            </div>
        </div>
      <!-- ------------------------------------------------------------------------- -->
  
        <div class="square black">
          <div class="coordinate whiteText">a</div>
  
          <div class="piece rook" color="white">
              <img src="White-Rook.png" alt="Rook" >
             </div>
        </div>
        <div class="square white"> 
          <div class="coordinate blackText">b</div>
  
          <div class="piece knight" color="white">
              <img src="White-Knight.png" alt="Knight" >
             </div>
      </div>
        <div class="square black">
          <div class="coordinate whiteText">c</div>
  
          <div class="piece bishop" color="white">
              <img src="White-Bishop.png" alt="Bishop">
             </div>
        </div>
        <div class="square white">
          <div class="coordinate blackText">d</div>
  
          <div class="piece queen" color="white" >
              <img src="White-Queen.png" alt="Queen" >
             </div>
        </div>
        <div class="square black">
          <div class="coordinate whiteText">e</div>
  
          <div class="piece king" color="white">
              <img src="White-King.png" alt="King">
          </div>
        </div>
        <div class="square white">
          <div class="coordinate blackText">f</div>
          <div class="piece bishop" color="white" >
              <img src="White-Bishop.png" alt="Bishop" >
             </div>
        </div>
        <div class="square black">
          <div class="coordinate whiteText">g</div>
  
          <div class="piece knight" color="white" >
              <img src="White-Knight.png" alt="Knight">
             </div>
        </div>
        <div class="square white">
          <div class="coordinate rank blackText">1</div>
          <div class="coordinate blackText">h</div>     
          <div class="piece rook" color="white" >
              <img src="White-Rook.png" alt="Rook" >
             </div>
        </div>
      </div>
      <div id="alert">
       
      </div>
        `,Se()}function Te(){const p=document.getElementById("container");Ce(),p?.appendChild(F),window.addEventListener("DOMContentLoaded",()=>{p?.setAttribute("id",J())}),$&&$(F)}const Be=me.bind(be);function ye(p){p.innerHTML=`
           <div id='container'>
           </div>
    `,Te()}const _=document.querySelector("#app");_.id=J();ye(_);
