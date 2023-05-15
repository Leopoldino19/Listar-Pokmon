// passo 1 - pegar no js o elemento HTLM  corespondente ao botão
// de troca de tema 
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

// passo 2 - dar um jeito de pegar no Js o elemento 
// HTML corresponde ao body

const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

// passo 03 - dar um jeito de indentificar o clique
// do usuário no botão de troca de tema 

botaoAlterarTema.addEventListener("click", () => {

     // passo 06 - remover a classe do modo-escuro do body
     const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")

    body.classList.toggle("modo-escuro")

     if(modoEscuroEstaAtivo){
          imagemBotaoTrocaDeTema.setAttribute("src", "src/imagens/sun.png")
     } else {

         imagemBotaoTrocaDeTema.setAttribute("src", "src/imagens/moon.png")
     } 
}); 