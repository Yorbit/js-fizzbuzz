console.log('JS OK');

const bFRow = document.getElementById('n-row');

for (let index = 1; index <= 100; index++) {

    let boxN = document.createElement('div');

    boxN.classList.add('box-n');

    boxN.innerText = index;

    bFRow.append(boxN);


    if ((index % 5 == 0) && (index % 3 == 0)) {

        console.log('f-b');


    } else if (index % 5 == 0) {

        console.log('b');


    } else if (index % 3 == 0) {

        console.log('f');


    } else {

        console.log(index);

    }
};