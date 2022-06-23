console.log('JS OK');

const bFRow = document.getElementById('n-row');

for (let index = 1; index <= 100; index++) {

    let boxN = document.createElement('div');

    boxN.classList.add('box-n');

    boxN.innerText = index;

    bFRow.append(boxN);


    if ((index % 5 == 0) && (index % 3 == 0)) {

        console.log('f-b');

        boxN.classList.add('box-n', 'box-f-b');

        boxN.innerText = 'fb';

        bFRow.append(boxN);

    } else if (index % 5 == 0) {

        console.log('b');

        boxN.classList.add('box-n', 'box-b');

        boxN.innerText = 'b';

        bFRow.append(boxN);

    } else if (index % 3 == 0) {

        console.log('f');

        boxN.classList.add('box-n', 'box-f');

        boxN.innerText = 'f';

        bFRow.append(boxN);

    } else {

        console.log(index);

    }
};