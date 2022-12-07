// ==UserScript==
// @name         simple-yt
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       silva-guimaraes
// @match        https://www.youtube.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

// remover pagina inicial
// opções
// remover recomendações de final de video
// não excluir o chatbox
// lidar com as mutações que o youtube faz ao trocar de pagina

//https://stackoverflow.com/questions/5525071/how-to-wait-until-an-element-exists
function waitElement(id)
{
    return new Promise(resolve => {
	if (document.getElementById(id)){
	    return resolve(document.getElementById(id));
	}
	const observer = new MutationObserver(mutations => {
	    if (document.getElementById(id)){
		resolve(document.getElementById(id));
		observer.disconnect();
	    }
	});
	observer.observe(document.body, {
	    childList: true,
	    subtree: true
	});
    });

}

(function() {
    'use struct';
    //remover comentarios e teaser de comentarios
    waitElement('comments').then((elm) => {
	elm.remove();
    });
    waitElement('comment-teaser').then((elm) => {
	elm.remove();
    });
    //remover recomendãção de videos
    waitElement('secondary').then((elm) => {
	elm.remove();
    }); 
    //remover botão home e barra de pesquisa
    waitElement('masthead-container').then((elm) => { 
	var icons = document.getElementById('end')
	icons.querySelector('#masthead-skeleton-icons').remove();
	elm.appendChild(icons);

	document.getElementById('masthead').remove(); 
	//icons.querySelector('ytd-notification-topbar-button-renderer').remove(); 
    }); 
    ////remover barra da esqueda na pagina home
    //waitElement('guide').then((elm) => {
    //    elm.remove();
    //}); 
    // remover accesos ao canal 
    //waitElement('meta-contents').then((elm) => {
    //    //href do avatar do canal
    //    elm.querySelector('ytd-video-owner-renderer').appendChild(elm.querySelector('#avatar'))
    //    document.getElementsByClassName('yt-simple-endpoint style-scope ytd-video-owner-renderer')[0].remove();
    //    //href do nome do canal
    //    console.log('hello world');
    //    console.log(document.getElementsByClassName('style-scope ytd-channel-name')[0].querySelector('a'));
    //});
    //waitElement('header').then((elm) => {
    //    elm.remove();
    //});
    //waitElement('contents').then((elm) => {
    //    elm.remove();
    //});

})();
