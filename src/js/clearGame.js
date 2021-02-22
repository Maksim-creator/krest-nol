import stat from './script';

const clearGame = () => {
    const clear = document.querySelector('.clear'),
          mainField = document.querySelector('.main-field');
    clear.addEventListener('click', (e) => {
        e.preventDefault();
        mainField.textContent = '';
        stat = {
            'x': 0,
            'y': 0
        }
    })
}

export default clearGame;