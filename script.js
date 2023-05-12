const navBtn = document.querySelector('.nav__btn')
const navBtnIcon = document.querySelector('.nav__btn i')
const dropDownMenu = document.querySelector('.dropdown__menu')

navBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    navBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}