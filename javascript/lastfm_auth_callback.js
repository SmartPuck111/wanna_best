if(match = window.location.toString().match(/token=(.*)/)){    
	console.warn('asdasd');
	
    var port = chrome.extension.connect({name: "auth_callback"})

    document.forms.web.text.style.display = 'none'
    
    port.postMessage({method:'auth_token', token: match[1]})
}

