function toggleMode() {
  // seleciona documento e altera fundo layout
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar imagem
  const img = document.querySelector("#profile img")

  // substituir imagem
  if (html.classList.contains("light")) {
    // se tiver class light, altera imagem
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto minha olhando para câmera com fundo atrás de mim desfocado."
    )
  } else {
    // se não tiver class light, mantem imagem
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Logo com uma letra L centralizada em amarelo, dentro de um círculo da mesma cor e fundo azul escuro."
    )
  }
}
