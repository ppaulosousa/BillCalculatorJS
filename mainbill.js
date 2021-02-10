const qualidadeHTML = document.getElementById('qualidade-servico')
const moneyHTML = document.getElementById('input-money');
const peopleHTML = document.getElementById('input-people');
const btnCalc = document.getElementById('btn-calc');
const totalHTML = document.getElementById('input-total');

let listaInputs = [moneyHTML,peopleHTML,qualidadeHTML]
let dictTips = {
    "Good": .30,
    "Normal": .15,
    "Bad": 1
}

btnCalc.onclick = () => {
    if(inputIsNull()){
        totalHTML.value = 'Preencha todos os campos!'
    }
    else if(peopleHTML.value < "1"){
        totalHTML.value = 'Número de pessoas inválido.'
    }
    else{
        let valorConta = parseInt(moneyHTML.value);
        let qualidade = qualidadeHTML.value;
        let people = peopleHTML.value;
        let tips = valorConta * dictTips[qualidade];
        let total = (valorConta + tips)/people;
        totalHTML.value = total;
        listaInputs.forEach(e => {
            e.value = ""
        })
    }

    setTimeout(() => {totalHTML.value = ""}, 3000);
}

let inputIsNull = () => {
    return (moneyHTML.value == "" || peopleHTML.value == "" || qualidadeHTML.value == "")
}