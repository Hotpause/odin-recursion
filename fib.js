

function ifib(num) {

    if (num == 0) {
        return [];
    }

    if (num == 1) {
        return [0];
    }

    let fiboarr = [0, 1];

    for (let i = 2; i < num; i++) {

        fiboarr[i] = fiboarr[i - 1] + fiboarr[i - 2];
    }
    return fiboarr;

};



function rfib(num) {

    if (num == 0) {
        return [];

    }
    else if (num == 1) {
        return [0];

    }
    else if (num == 2) {
        return [0, 1];

    }
    else {
        fibarr = rfib(num - 1);
        fibarr.push(fibarr[fibarr.length - 1] + fibarr[fibarr.length - 2])
        return fibarr;
    }
}
console.log(rfib(8));