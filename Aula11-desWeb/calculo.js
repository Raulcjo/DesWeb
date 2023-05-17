function Salvar(){
    let tableUser = document.querySelector('.table');
    let row = tableUser.insertRow();
    let cel0 = row.insertCell(0);
    let cel1 = row.insertCell(1);
    let cel2 = row.insertCell(2);
    let cel3 = row.insertCell(3);
    let cel4 = row.insertCell(4);
    cel0.innerHTML = document.getElementById('nome').value;
    cel1.innerHTML = document.getElementById('email').value;
    cel2.innerHTML = document.getElementById('nasc').value;
    cel3.innerHTML = document.querySelector('#uf').value;
    cel4.innerHTML = '<i class="bi bi-pencil-square"></i>';

}

function Salvar2(){ //ideia alternativa
    let tableUser = document.querySelector('.table');
    let row = tableUser.insertRow();

    let celulas = [5];

    for(let i= 0; i < celulas.length; i++){
        cel = row.insertCell(i);
        let adicionar = celulas.unshift('cel');
        cel.get(0).innerHTML = document.getElementById('nome').value;
        cel.get(1).innerHTML = document.getElementById('email').value;
        cel.get(2).innerHTML = document.getElementById('nasc').value;
        cel.get(3).innerHTML = document.querySelector('#uf').value;
        cel.get(4).innerHTML = '<i class="bi bi-pencil-square"></i>';
    }
}
