const btn_resetar = document.getElementById("btn_resetar");
const btn_modo = document.getElementById("btn_modo");
const btn_iniciar_pausar = document.getElementById("btn_iniciar_pausar");
const topo_btn_resetar = document.getElementById("topo_btn_resetar");
const topo_btn_modo = document.getElementById("topo_btn_modo");
const topo_btn_iniciar_pausar = document.getElementById(
  "topo_btn_iniciar_pausar"
);

function removerClasses(classe1, classe2, e1, e2) {
  e1.classList.remove(classe1);
  e2.classList.remove(classe2);
}

function animarResetar() {
  btn_resetar.classList.add("resetar_btn");
  topo_btn_resetar.classList.add("resetar_topo");
}

function animarModo() {
  btn_modo.classList.add("modo_btn");
  topo_btn_modo.classList.add("modo_topo");
}

function animarIniciar() {
  btn_iniciar_pausar.classList.add("iniciar_btn");
  topo_btn_iniciar_pausar.classList.add("iniciar_topo");
}

function animarBotao(botao) {
  if (botao === "resetar") {
    animarResetar();
    setTimeout(function () {
      removerClasses(
        "resetar_btn",
        "resetar_topo",
        btn_resetar,
        topo_btn_resetar
      );
    }, 100);
  } else if (botao === "modo") {
    animarModo()
    setTimeout(function () {
        removerClasses(
          "modo_btn",
          "modo_topo",
          btn_modo,
          topo_btn_modo
        );
      }, 100);
  } else if (botao === "iniciar") {
    animarIniciar()
    setTimeout(function () {
        removerClasses(
          "iniciar_btn",
          "iniciar_topo",
          btn_iniciar_pausar,
          topo_btn_iniciar_pausar
        );
      }, 150);
  }
}

btn_resetar.addEventListener("click", () => {
  animarBotao("resetar");
});

btn_modo.addEventListener("click", () => {
  animarBotao("modo");
});

btn_iniciar_pausar.addEventListener("click", () => {
  animarBotao("iniciar");
});
