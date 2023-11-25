let card = document.querySelectorAll(".card")

let destroyCards = function () {
    for (let i = 0; i < card.length; i++) {
        // card[i].style.display = "none"
        card[i].innerHTML = ""
    }
}