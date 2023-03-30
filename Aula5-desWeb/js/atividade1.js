//Primeira maneira de fazer:
function tabuada(){
    for(let i = 0; i <= 10; i++){
        let x = document.getElementById('numero').value;
        tab = x * (i);
        let resultado = document.getElementById('resultado');
        let item = document.createElement('li');
        item.textContent = tab;
        resultado.appendChild(item);
        
    }
}

//Segunda maneira de fazer:
function tabuada2(){
    let numero = document.getElementById('numero').value;
    let divisoria = document.getElementById('resultado');
    divisoria.innerHTML = `<p>A tabuada é ${numero}</p>`;
    for(let i = 0; i <= 10; i++){
        let calc = i * numero;
        const node = document.createElement("p");
        const text = document.createTextNode(`${numero} x ${i}: ${calc}`);
        node.appendChild(text);
        divisoria.appendChild(node);
    }
}

//Conatdor de cliques
let cliques = 0;

function numClick(){
    cliques++;
    document.getElementById("cliques").innerHTML = cliques;
}

//Gerador de número aletório - 1
function random(){
    let num = parseInt(Math.random()*1000);
    document.getElementById("numRandom").innerHTML = num;
}

//Gerador de número aletório - 2
function sortear(){
    let limit = document.getElementById("limite").value;
    let num = parseInt(Math.random() * limit);
    document.getElementById("numAle").innerHTML = num;

}
