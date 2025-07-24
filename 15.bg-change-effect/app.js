let btn = document.getElementsByClassName("btn")[0];
let hexcode = document.getElementsByClassName("hexcode")[0];

function changeColor() {
    let letters = "0123456789ABCDEF";
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

btn.addEventListener("click", () => {
    let newcolor = changeColor();
    document.body.style.background = newcolor;
    hexcode.innerHTML= newcolor;
});