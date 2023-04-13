function getRadio(){
    let elemento = document.getElementsByName("gender");
    for(let i = 0; i < elemento.length; i++){
        if(elemento[i].checked){
            document.getElementById("radioResult").innerHTML = `O gênero selecionado é ${elemento[i].value}`;
        }
        else{
            document.getElementById("radioResult").innerHTML = `O gênero não foi selecionado`;
        }
    } 
}

function getOption(){
    let selectElement = document.querySelector("#select1");
    text = selectElement.value;
    document.querySelector(".output").textContent = text;
}

function getCheckbox(){
    let checkBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
    let text = "";
    for(let i=0; i < checkBoxes.length; i++){
        text = text + ", " + checkBoxes[i].value;
    }
    document.getElementById("pri").innerHTML = text;
}