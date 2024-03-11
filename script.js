const btn_resetar = document.getElementById("btn_resetar");
const btn_modo = document.getElementById("btn_modo");
const btn_iniciar_pausar = document.getElementById("btn_iniciar_pausar");
const topo_btn_resetar = document.getElementById("topo_btn_resetar");
const topo_btn_modo = document.getElementById("topo_btn_modo");
const topo_btn_iniciar_pausar = document.getElementById("topo_btn_iniciar_pausar");
const visorResultado = document.querySelector(".visor");

let cronometroAtivo = false; // Renomeado de botaoResetarAtivado para cronometroAtivo

function removerClasses(classe1, classe2, e1, e2) {
  e1.classList.remove(classe1);
  e2.classList.remove(classe2);
}

function animarElemento(btn, topo_btn, classeBtn, classeTopo) {
  btn.classList.add(classeBtn);
  topo_btn.classList.add(classeTopo);
  setTimeout(function () {
    removerClasses(classeBtn, classeTopo, btn, topo_btn);
  }, 100);
}

function iniciarCronometro() {
  let horas = 0;
  let minutos = 0;
  let segundos = 0;

  const intervalo = setInterval(() => {
    segundos++;
    if (segundos === 60) {
      segundos = 0;
      minutos++;
      if (minutos === 60) {
        minutos = 0;
        horas++;
      }
    }
    visorResultado.innerHTML = `0${horas}:0${minutos}:${segundos < 10 ? "0" : ""}${segundos}`;
  }, 1000);

  btn_resetar.addEventListener("click", () => {
    animarElemento(btn_resetar, topo_btn_resetar, "resetar_btn", "resetar_topo");
    clearInterval(intervalo);
  });
}

btn_resetar.addEventListener("click", () => {
  animarElemento(btn_resetar, topo_btn_resetar, "resetar_btn", "resetar_topo");
  cronometroAtivo = false;
});

btn_modo.addEventListener("click", () => {
  animarElemento(btn_modo, topo_btn_modo, "modo_btn", "modo_topo");
});

btn_iniciar_pausar.addEventListener("click", () => {
  animarElemento(btn_iniciar_pausar, topo_btn_iniciar_pausar, "iniciar_btn", "iniciar_topo");
  cronometroAtivo = true;
  iniciarCronometro();
});
