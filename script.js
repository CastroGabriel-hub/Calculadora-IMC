//Elements
var result = document.getElementById('resultado');
var relatorio = document.getElementById('relatorio');
var btn = document.querySelector('#btnCalc');  

//Events
btn.addEventListener('click', calcular);

//Functions
function calcular(event){
    var alt = document.getElementById('altura').value;
    var pes = document.getElementById('peso').value;
    var imc = pes / alt**2;
    var relTxt;
    var inputs = document.querySelectorAll(".input");

    result.innerHTML = imc.toFixed(2); //Arredonda o número para caber em 2 casas decimais

    console.log(alt, pes, imc); //For debbuging pruposes

    if(imc<18.5){
        relTxt = 'Seu peso está abaixo do normal!';
    }else if(imc>=18.5 & imc<25){
        relTxt = 'Seu peso está no nível normal';
    }else if(imc>=25 & imc<30){
        relTxt = 'Você está com excesso de peso';
    }else if(imc>=30 & imc<35){
        relTxt = 'Nível de obesidade I';
    }else if(imc>=35 & imc<40){
        relTxt = 'Nível de obesidade II';
    }else if(imc>=40){
        relTxt = 'Nível de obesidade III';
    }

    relatorio.innerHTML = relTxt;
    console.log(relTxt);

    for(i=0; i<inputs.length; i++){
        inputs[i].value = "";
    }
   
}

