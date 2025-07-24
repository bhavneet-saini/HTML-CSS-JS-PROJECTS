const typedtext = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const words = ['Great', 'Popular', 'Weird', 'Usefull', 'Dynamic'];
const typingdelay = 200
const erasingdelay = 200
// delay between current and next delay//
const newtextdelay = 2000
let index = 0;
let characterindex = 0;

document.addEventListener('DOMContentLoaded', () => {
    if (words.length) {
        setTimeout(typed, newtextdelay);
    }
});

function typed() {
    if (characterindex < words[index].length) {
        typedtext.textContent += words[index].charAt(characterindex);
        characterindex++;
        setTimeout(typed, typingdelay);
    } else {
        setTimeout(erase, newtextdelay);
    }
}

function erase() {
    if (characterindex > 0) {
        typedtext.textContent = words[index].substring(0, characterindex - 1);
        characterindex--;
        setTimeout(erase, erasingdelay);
    } else {
        index++;
        if (index >= words.length) {
            index = 0;
        }
        setTimeout(typed, typingdelay + 1100);
    }
}
