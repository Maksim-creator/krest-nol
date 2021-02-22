const newGame = () => {
    const newGameBtn = document.querySelector('.new-game'),
          boxes = document.querySelectorAll('.box');

        

    newGameBtn.addEventListener('click', (e) => {
        e.preventDefault()
        boxes.forEach(box => {
            box.innerHTML = '';
            
        })
    })
}

export default newGame;