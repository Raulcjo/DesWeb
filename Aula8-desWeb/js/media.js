function getNotas() {
    let nota1 = parseInt(document.getElementById("nota1").value);
    let nota2 = parseInt(document.getElementById("nota2").value);
    let nota3 = parseInt(document.getElementById("nota3").value);
    let nota4 = parseInt(document.getElementById("nota4").value);

    let media = (nota1 + nota2 + nota3 + nota4)/4;
    console.log("A média é " + media);

    let resultado = document.getElementById("resultado");

    if(media > 6.0){
        resultado.innerHTML = `<p>Aluno aprovado, média é ${media}</p>`;
        document.getElementById("resultado").style.backgroundColor = 'green'; 
        console.log("Aluno foi aprovado");
    }
    else if(media < 2.0){
        resultado.innerHTML = `<p>Aluno reprovado, média é ${media}</p>`;
        document.getElementById("resultado").style.backgroundColor = 'red';
        console.log("Aluno foi reprovado");
    }
    else if(media > 2.1 && media < 5.9){
        resultado.innerHTML = `<p>Aluno está de recuperação, média é ${media}</p>`;
        document.getElementById("resultado").style.backgroundColor = 'blue';
        console.log("Aluno está de recuperação");
    }
    else{
        resultado.innerHTML = `<p>Não foi preenchido todos as notas</p>`;
    }

}