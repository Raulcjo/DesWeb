//Gerador de número aletório - 2
function sortearMinMax(){
     let min = document.getElementById("min").value;
    min = Math.ceil(min);
     let max = document.getElementById("max").value;
    max = Math.floor(max);
    
    let num = Math.floor(Math.random() * (max - min) + min);
    console.log(num);
    document.getElementById("numAle").innerHTML = num;
}