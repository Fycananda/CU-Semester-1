const text = document.getElementById('text')
const circles = document.querySelectorAll('.circle')
circles.forEach(circle => {
    circle.addEventListener('click', ({ target }) => {
        console.log(circles);
        
        const { backgroundColor } = getComputedStyle(target)
        document.body.style.backgroundColor = backgroundColor

        if (backgroundColor === 'rgb(56, 56, 56)') {
            text.style.color = 'white'
        } else {
            text.style.color = 'black'
        }

    })
})

function resetButton() {
    location.reload()
}