const tabela = []
const altura = 3
const largura = 5
let sequencia = []
const message = document.getElementById("men")
const classmodel = document.getElementsByClassName("model")
let id = "OI"
let valores = {}
var chave = []
let num = 0

document.addEventListener("click",function(event){
    if(event.target.tagName == "DIV"){
        result(event.target.id)
    }
})

function start(){
    criartabela()
    posicao(5)
    desenha()
}

function criartabela(){
    const tamanho = largura * altura
    for(let i = 0; i < tamanho; i++){
        tabela[i] = ''
    }
}

function desenha(){
    let html = '<table cellpadding=0 cellspacing=0>'
    for(let row = 0; row < altura; row++){
        html += '<tr>'
            for(let colum = 0; colum < largura; colum++){
                const pixel = colum + (largura * row)
                html += '<td>'
                html += (tabela[pixel] != '') ?"<div class='model' id='"+returnid(tabela[pixel])+"'>"+tabela[pixel]+"</div>": "<div></div>"
                html += '</td>'
            }
        html += '</tr>'
    }
    html += '</table>'
    document.querySelector('#canvas').innerHTML = html
}

function posicao(valor){
    for(let i = 1; i < valor;i++){
        let pos = gerarNum()
        while (tabela[pos] != ''){
            pos = gerarNum()
        }
        tabela[pos] = i
        sequencia.push(i)
        gerarchave(tabela[pos])
    }
}

function gerarchave(num){
    var i = gerarNum()+id
    for(var j = 0; j < chave.length; j++){
        if(chave[j] == i){
            i += 1 
        }
    }
    chave.push(i)
    valores[i] = num
}
function returnid(num){
    for(var p in valores){
        if(valores[p] == num){
            return p
        }
    }
}
function gerarNum(){
    const num = Math.floor(Math.random() * 10)
    return num
}
setTimeout(oculta, 1000)
function oculta(){
    for(let d = 0; d < classmodel.length; d++){
       classmodel[d].innerHTML = ""
    }
}

function result(id){
    if(sequencia[num] == valores[id]){
        document.getElementById(id).innerHTML = valores[id]
        num += 1
    }else{
        message.innerHTML = "ops, voce errou a sequencia !!!"
        errou()
    }
    if(num == sequencia.length){
        message.innerHTML = "parabens voce acertou a sequencia !!!"
    }
}

function errou(){
    for(var e in valores){
        document.getElementById(e).innerHTML = valores[e]
    }
}

start()
