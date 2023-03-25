let currentPage = 1;
console.log("obecna strona na starcie:", currentPage)

let kolko = document.querySelector(".circle")
let tekst = document.querySelector("h2")
let banan = document.querySelector("body")

document.querySelector(".next")
    .addEventListener("click", () => {
        currentPage = currentPage + 1;
        console.log("w event listenerze:", currentPage);

        tekst.innerHTML = "zmieniamy na tekst z d..."
        kolko.style.backgroundColor = "red"
        banan.style.backgroundColor = "blue"
    })