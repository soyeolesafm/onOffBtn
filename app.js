const checkbox = document.getElementById(`checkbox`);
const footer = document.getElementsByClassName(`.footer`)
const fabGH = document.getElementsByClassName(`.fa-github`)
const icono = document.getElementById(icon)

console.log(icono);
checkbox.addEventListener (`change`, () =>  {
    document.body.classList.toggle(`dark`)
    footer.classList.toggle(`invert`)
    fabGH.classList.toggle(`ghdark`)
    // if (checkbox = checked) {
    //     console.log('i am checked');
    // } else {
    //     console.log('not checked');
    // }
})

