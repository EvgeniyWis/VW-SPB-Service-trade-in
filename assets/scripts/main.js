/* Объявление глобальных переменных */
const navbar__adaptive_menuBurger = document.getElementById("navbar__adaptive_menuBurger");
const navbar__adaptive_menu = document.getElementById("navbar__adaptive_menu");
const navbar__adaptive_menu_cross = document.getElementById("navbar__adaptive_menu_cross");
const locksmith_repair__filters__items = document.querySelectorAll(".locksmith_repair__filters--item");
const locksmith_repair__leave_request__filters = document.getElementById("locksmith_repair__leave_request--filters");


/* Открытие и закрытие бургер меню */
navbar__adaptive_menuBurger.addEventListener("click", () => {
    navbar__adaptive_menu.classList.toggle("navbar__adaptive--active");
    popup__background.classList.add("popup__background__active");
})

navbar__adaptive_menu_cross.addEventListener("click", () => {
    navbar__adaptive_menu.classList.remove("navbar__adaptive--active");
    popup__background.classList.remove("popup__background__active");
})


/* Инициализация аккордиона */
new Accordion('#trade-in__accordion');