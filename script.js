function toggleMenu() {
    const menu = document.querySelector(".menu-links"); //on utilise le target du menu-links réf dans le html
    const icon = document.querySelector(".hamburger-icon"); //on utilise le target du hamburger-icon réf dans le html
    menu.classList.toggle("open")
    icon.classList.toggle("open") //dès qu'on clique dessus ça ajoutera ou supprimera la classe ouverte dans l'élement .hamburger-icon dans le css et aura un autre style
}