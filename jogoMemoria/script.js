const guadrado = []
const altura = 3
const largura = 5
let valores = []
var zero = 0
var outro = 1
document.addEventListener("click",function(event){
    if(event.target.tagName == "DIV"){
        result(event.originalTarget.innerText[0],event.target.id)
    }
    //console.log(event.target.id)
    //console.log(event.originalTarget.innerText[0])
})
function start(){
    criartabela()
    posicao(5)
    desenha()
    //oculta()
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
    }else{
        tudo()
    }
}
setTimeout(oculta, 1000)
function oculta(){
    var i = document.getElementsByClassName("model")
    for(let d = 0; d < i.length; d++){
        i[d].style.color = "white"
    }
}

function tudo(){
    var d = document.getElementsByClassName("model")
    for(let i = 0; i < d.length; i++){
        d[i].style.color = "black"
    }
}

start()