const mostrarNavbar = document.querySelectorAll("#mostrar-navbar");
const navbar = document.querySelector('#navbar')
const overlay = document.querySelector('#overlay')


//Função para abrir e fechar o navbar quando os icons forem clicados
mostrarNavbar.forEach(element => {
  element.addEventListener('click', () => {
    navbar.classList.toggle("ativa"),
    overlay.classList.toggle("ativa")
  });
});


//Função para fechar o navbar quando um dos item da lista de navbar for clicado

const linkNavbar = document.querySelectorAll('#link-navbar')

linkNavbar.forEach(item => {
  item.addEventListener("click", () => {
    navbar.classList.remove("ativa")
    overlay.classList.remove("ativa")
  })
})

//Função par mostrar a imagem que esta na logo

const logoImg = document.querySelector(".logo")
const fecharModal = document.querySelector("#fechar-modal")
const modal = document.querySelector(".modal")

logoImg.addEventListener("click", () => {
  modal.classList.add("ativa")
})

fecharModal.addEventListener("click", () => {
  modal.classList.remove("ativa");
})
