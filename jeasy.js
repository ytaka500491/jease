// jeasy.js

function getId(id){return document.getElementById(id);}
function getClass(className){return document.getElementsByClassName(className);}
function $(selector){return document.querySelector(selector);}
function $all(selector){return document.querySelectorAll(selector);}
function show(el){el.style.display = 'block';}
function hide(el){el.style.display = 'none';}
function setText(el, text){el.textContent = text;}
function event(el, type, listener){el.addEventListener(type, listener);}
function getValue(el){return el.value;}
function setValue(el, val){el.value=val;}
function clearForm(el){el.querySelectorAll("input, select, textarea, button").forEach(t=>{t.value="";});}
function addClass(el, className){el.classList.add(className);}
function removeClass(el, className){el.classList.remove(className);}
function isChecked(el){return el.checked ? "true" : "false";}

function highlightError(el, message = "入力してください") {
  el.style.border = '2px solid red';
  el.style.backgroundColor = '#ffe6e6';
  if (!el.nextElementSibling || !el.nextElementSibling.classList.contains('error-msg')) {
    const msg = document.createElement('div');
    msg.textContent = message;
    msg.className = 'error-msg';
    msg.style.color = 'red';
    msg.style.fontSize = '0.9em';
    msg.style.marginTop = '4px';
    el.parentNode.insertBefore(msg, el.nextSibling);
  }
}
function clearError(el) {
  el.style.border = '';
  el.style.backgroundColor = '';
  const msg = el.nextElementSibling;
  if (msg && msg.classList.contains('error-msg')) {
    msg.remove();
  }
}
function friendlyAlert(message, duration = 3000) {
  const box = document.createElement('div');
  box.textContent = "😊 " + message;
  box.style.position = 'fixed';
  box.style.top = '20px';
  box.style.left = '50%';
  box.style.transform = 'translateX(-50%)';
  box.style.background = '#f0fff0';
  box.style.color = '#2d6a4f';
  box.style.padding = '12px 20px';
  box.style.border = '1px solid #a3d9a5';
  box.style.borderRadius = '8px';
  box.style.boxShadow = '0 2px 6px rgba(0,0,0,0.2)';
  box.style.zIndex = 9999;
  box.style.fontSize = '1rem';
  document.body.appendChild(box);
  setTimeout(() => box.remove(), duration);
}
function CustomAlert(message, options = {}) {
  const box = document.createElement('div');
  box.textContent = message;

  // スタイル（やさしい色合い）
  box.style.position = 'fixed';
  box.style.top = '20px';
  box.style.left = '50%';
  box.style.transform = 'translateX(-50%)';
  box.style.background = options.bg || '#fff8dc'; // デフォルトはやさしいクリーム色
  box.style.color = options.color || '#333';
  box.style.padding = '12px 20px';
  box.style.border = '1px solid #ccc';
  box.style.borderRadius = '8px';
  box.style.boxShadow = '0 2px 6px rgba(0,0,0,0.2)';
  box.style.zIndex = 9999;
  box.style.fontSize = '1rem';
  box.style.textAlign = 'center';

  document.body.appendChild(box);

  // 自動で消える（デフォルト3秒）
  setTimeout(() => box.remove(), options.duration || 3000);
}
function scrollToId(Selector) {
  const el = document.querySelector(Selector);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    console.warn(`[jeasy] id"${Selector}" の要素が見つかりませんでした`);
  }
}
function katakanaToHiragana(str){return str.replace(/[\u30A1-\u30F6]/g,ch=>String.fromCharCode(ch.charCodeAt(0)-0x60));}
function safeText(str){return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;"); }