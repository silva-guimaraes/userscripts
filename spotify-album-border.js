// ==UserScript==
// @name         spotify album border radius
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  remove o border-radius de albums na biblioteca e no menu inicial
// @author       silva-guimaraes
// @match        https://open.spotify.com/*
// @icon         https://open.spotifycdn.com/cdn/images/favicon32.b64ecc03.png
// @grant        none
// ==/UserScript==

(function () {
  var css = ".SKJSok3LfyedjZjujmFt { border-radius: 0; }";

  var head = document.querySelector("head");
  var style = document.createElement("style");
  style.setAttribute("type", 'text/css');
  style.innerHTML = css;
  head.appendChild(style);
})();