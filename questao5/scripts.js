// faça seu código neste arquivo
//Botões
let btnJS = document.querySelector("#curso-online-javascript-programando-na-linguagem-web")
btnJS.onclick = loadIframe

let btnFlutter = document.querySelector("#curso-online-flutter-gerenciamento-estados-provider")
btnFlutter.onclick = loadIframe

let btnReact = document.querySelector("#curso-online-react-native-function-components")
btnReact.onclick = loadIframe

//Botões modal
let maxBtn = document.querySelector('.maximize-modal')
maxBtn.onclick = maximizeModal
let fechaBtn = document.querySelector('.close-modal')
fechaBtn.onclick = closeModal


function showModal(){
    let modalOverlay = document.querySelector('.modal-overlay')
    modalOverlay.setAttribute('class', 'modal-overlay active')
}


function closeModal(){
    let modalOverlay = document.querySelector('.modal-overlay.active')
    modalOverlay.setAttribute('class', 'modal-overlay')  

    let modal = document.querySelector('.modal.maximize')
    if(modal){
        modal.setAttribute('class', 'modal')
    }

    let icone = document.querySelector('.maximize-modal')
    icone.innerHTML = '<i class="material-icons">maximize</i>'
}

function maximizeModal(){
    let modal = document.querySelector('.modal')
    let icone = document.querySelector('.maximize-modal')

    if(modal.getAttribute('class') == 'modal'){
        modal.setAttribute('class', 'modal maximize')
        icone.innerHTML = '<i class="material-icons">minimize</i>'
    }
    else{
        modal.setAttribute('class', 'modal')
        icone.innerHTML = '<i class="material-icons">maximize</i>'
    }
}

/*Oparações com Iframe*/
function setIframe(id){
    let url = "https://www.alura.com.br/"
    const iframe = document.querySelector('iframe')
    url += id
    iframe.setAttribute('src', url)
}

function loadIframe(){
    let id = this.getAttribute('id')
    setIframe(id)
    showModal()
}