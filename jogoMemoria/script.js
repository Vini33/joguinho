const guadrado = []
const altura = 3
const largura = 5
const mo = document.getElementsByClassName("model")
const mensage = document.getElementById("men")
let valores = []
var zero = 0
var outro = 1
document.addEventListener("click",function(event){
    if(event.target.tagName == "DIV"){
        result(event.originalTarget.innerText[0],event.target.id)
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
        guadrado[i] = ''
    }
}
function desenha(){
    let html = '<table cellpadding=0 cellspacing=0>'
    for(let row = 0; row < altura; row++){
        html += '<tr>'
            for(let colum = 0; colum < largura; colum++){
                const pixel = colum + (largura * row)
                html += '<td>'
                html += (guadrado[pixel] != '') ? "<div class='model' id='oi"+outro+++"' value='"+guadrado[pixel]+"'>"+guadrado[pixel]+"</div>" : "<div></div> "
                html += '</td>'
            }
        html += '</tr>'
    }
    html += '</table>'
    document.querySelector('#canvas').innerHTML = html
}

function sortenum(){
    const num = Math.floor(Math.random() * 10)
    return num
}

function posicao(valor){
    for(let i = 1; i < valor;i++){
        let pos = sortenum()
        while (guadrado[pos] != ''){
            pos = sortenum()
        }
        guadrado[pos] = i
        valores.push(i)
    }
}

function result(num, id){
    if(valores[zero] == num){
        document.getElementById(id).style.color = 'black'
        zero += 1
    }
    else{
        tudo()
        mensage.innerHTML = "voce errou"
    }
    if(mo.length == zero){
        mensage.innerHTML = "voce ganhou!!!!"
    }
}
setTimeout(oculta, 1000)
function oculta(){
    for(let d = 0; d < mo.length; d++){
       mo[d].style.color = "white"
    }
}

function tudo(){
    for(let i = 0; i < mo.length; i++){
        mo[i].style.color = "black"
    }
}

start()