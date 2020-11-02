//Questão 1
onload = geraEstrutura
function geraEstrutura (){
    let btnDiv = document.querySelector('#btn')
    let btn = document.createElement('button')
    btn.innerText = 'Adicionar'
    btn.onclick = criaElemento
    btnDiv.appendChild(btn)

    let inputBtn = document.querySelector('#addBtn')
    inputBtn.onclick = addLista
    
    criaUl()
}

function criaElemento(){
    let elemDiv = document.querySelector("#elementos")
    let elem = document.createElement('div')

    elem.setAttribute('class', 'caixa')
    elem.style.backgroundColor = '#ff0000'
    elem.style.height = '100px'
    elem.style.width = '100px'

    //Questão 2
    elem.addEventListener('mouseenter', () => elem.style.backgroundColor = getRandomColor())
    elemDiv.appendChild(elem)        
}

function getRandomColor(){
    var letters ="0123456789ACBDEF"
    var color = "#"
    for (var i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random()*16)]
    }
    return color
}

//Questão 3

var nomes = ["Diego", "Gabriel", "Lucas"]

function criaUl (){
    const ulDiv = document.querySelector('#uldiv')
    ulDiv.innerHTML = ''
    let lista = document.createElement('ul') 
    ulDiv.appendChild(lista)
    
    for(nome of nomes){
        let li = document.createElement('li')
        li.innerHTML += nome
        lista.appendChild(li)
    }
}

//Questão 4
function addLista (){
    const input = document.querySelector('#txt')
    if(input.value.length != 0){
        nomes.push (input.value)
        criaUl()
        input.value = ''
        input.focus()
    }
    else{
        alert('Nome inválido')
    }
}