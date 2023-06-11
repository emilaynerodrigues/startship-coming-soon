var daysContainer = document.querySelector(".days");
var hoursContainer = document.querySelector(".hours");
var minutesContainer = document.querySelector(".minutes");
var secondsContainer = document.querySelector(".seconds");
var yearContainer = document.querySelector(".year");
var button = document.querySelector(".mail-btn");
var displayMailContainer = document.querySelector(".display-mail");

function countdown() {
  var targetDay = new Date(
    "June 31, " + new Date().getFullYear() + " 00:00:00"
  ).getTime();

  var interval = setInterval(function () {
    // Obtém a data e hora atuais
    var currentDate = new Date().getTime();

    // Calcula a diferença entre a data atual e a data de destino
    var difference = targetDay - currentDate;

    // Calcula dias, horas, minutos e segundos restantes
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Exibe a contagem regressiva na página
    secondsContainer.textContent = seconds < 10 ? "0" + seconds : seconds; //se segundos for menor que 10 a função deve acrescentar o 0 na frente, senão continua normal
    minutesContainer.textContent = minutes < 10 ? "0" + minutes : minutes;
    hoursContainer.textContent = hours < 10 ? "0" + hours : hours;
    daysContainer.textContent = days < 10 ? "0" + days : days;

    currentYear = new Date().getFullYear();

    yearContainer.textContent = currentYear;
  }, 100);
}

window.onload = function () {
  countdown();
};

button.addEventListener("click", function () {
  displayMailContainer.textContent = "mail@gmail.com";
  displayMailContainer.classList.remove("hidden");
  displayMailContainer.classList.add("visible");
});
