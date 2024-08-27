const diaSemana = document.getElementById("dia-semana");
const diaMesAno = document.getElementById("dia-mes-ano");
var horaMinSeg = document.getElementById("hora-min-seg");
const date = new Date();

diaMesAno.textContent = getCurrentDate();
diaSemana.textContent = getCurrentDay();

function getCurrentDay() {
    const dia = {0: "Domingo",
    1: "Segunda-Feira",
    2: "Terça-Feira",
    3: "Quarta-Feira",
    4: "Quinta-Feira",
    5: "Sexta-Feira",
    6: "Sábado"}

    return dia[date.getDay()];
}

function getCurrentDate() {
    return date.getDate() + "/" + (((date.getMonth() + 1) < 9) ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)) + "/" + date.getFullYear();
}

function getCurrentHour() {
    var dateString = new Date().toLocaleTimeString("pt-br", {timeZone: "America/Sao_Paulo"});
    var formattedString = dateString.replace(", ", " - ");
    horaMinSeg.textContent = formattedString;
}

getCurrentHour();
setInterval(getCurrentHour, 1000);