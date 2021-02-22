import stat from './script';
const checkWinner = () => {
    

    const boxes = document.querySelectorAll('.box'),
          resX = document.querySelector('.results_x'),
          resO = document.querySelector('.results_o');

    let array = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0,3,6],
        [1,4,7],
        [2,5,8],

        [0,4,8],
        [2,4,6]
    ]
    for (let i = 0; i < array.length; i++) {
        if(boxes[array[i][0]].textContent === 'X' && boxes[array[i][1]].textContent === 'X' && boxes[array[i][2]].textContent === 'X'){
            stat.x = stat.x + 1
            resX.innerHTML = `
            Крестики победили ${stat.x} раз(а)!
            `
            console.log(stat);
            
        } else if(boxes[array[i][0]].innerHTML === 'O' && boxes[array[i][1]].innerHTML === 'O' && boxes[array[i][2]].innerHTML === 'O'){
            // Number(stat.o);
            stat.o = stat.o + 1
            resO.innerHTML = `
            Нолики победили: ${stat.o} раз(а)!
            `
            console.log(stat);
        }
    }
}

export default checkWinner;

