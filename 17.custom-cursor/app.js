const cursor = document.querySelector(".cursor");

document.addEventListener('mousemove', function (event) {
    cursorMovment(event.pageX, event.pageY)
})
const cursorMovment = function (pageX, pagey) {
    cursor.style.left = pageX + 'px'
    cursor.style.top = pagey + 'px'

}