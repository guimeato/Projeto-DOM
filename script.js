let listaDeNotas = [];

function adicionarNota(event){

  event.preventDefault();

  let gradeElement = document.querySelector(".grade-input");
  let textarea = document.querySelector("textarea");

  let valorInput = gradeElement.value.replace(',','.').trim();
  
  
  if(valorInput === ""){
    alert("Insira um número válido!");
    return;
  }

  let grade = parseFloat(valorInput);

  if( isNaN(grade) || grade < 0 || grade > 10){
    alert("Insira uma nota válida!");
    gradeElement.value = "";
    return;
  }
  
  listaDeNotas.push(grade);

  let texto = "";
  for(let i = 0; i < listaDeNotas.length; i++){
    texto += `A nota ${i+1} foi ${listaDeNotas[i]}\n` ;
  }
  textarea.value = texto;

  gradeElement.value = "";
}

function calcularMedia(){
  let resultadoP = document.querySelector("p");

  if(listaDeNotas.length === 0){
    resultadoP.innerText = "A média é: 0.00";
    return;
  }
  let soma = listaDeNotas.reduce((acc, curr) => acc + curr, 0);
  let media = soma/ listaDeNotas.length

  resultadoP.innerText = `A média é : ${media.toFixed(2)}`;
}

let btnAdd = document.querySelector(".add-btn");
btnAdd.addEventListener("click",adicionarNota);

let btnCalc = document.querySelector(".calculate-media-btn");
btnCalc.addEventListener("click",calcularMedia);