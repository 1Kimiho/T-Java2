


let cal=prompt('Digite1: adição; Digite2: subtração; Digite3: multiplicação; Digite4: divisão')

let men1=prompt("Digite um número")
let men2=prompt("Digite outro número")

let n1=parseInt(men1)
let n2=parseInt(men2)


let resul=0

if(cal==='1'){
    resul=n1+n2
}else if(cal==='2'){
    resul=n1-n2
}else if(cal==='3'){
    resul=n1*n2
}else if(cal==='4'){
    resul=n1/n2
}

console.log(resul)
