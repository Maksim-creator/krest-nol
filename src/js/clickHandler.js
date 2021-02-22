import checkWinner from './checkWinner';

const clickHandler = () => {
    const mainField = document.querySelector('.main-field');
    let checkStep = 0;
    

    mainField.addEventListener('click', (e) => {
        

        let target = e.target;
        if(target.textContent === 'X' || target.textContent === 'O'){
            return 0;
        } else if(checkStep % 2 === 0){
            target.innerHTML = 'X';

        }   else {
            target.innerHTML = 'O';
        }
        checkStep++;
        
        checkWinner();
    })
    
}

export default clickHandler;