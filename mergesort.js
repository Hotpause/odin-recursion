
function mergesort(arr) {

    if (arr.length <= 1) {
        return arr;
    }

    else {
        const middle = Math.floor(arr.length / 2);
        const left = arr.slice(0, middle);
        const right = arr.slice(middle);

        const sortedleft = mergesort(left);
        const sortedright = mergesort(right);

        return merge(sortedleft, sortedright);


    }


};

function merge(left, right) {

    let sortedarr = []
    let leftindex = 0
    let rightindex = 0

    while (leftindex < left.length && rightindex < right.length) {

        if (left[leftindex] < right[rightindex]) {
            sortedarr.push(left[leftindex]);
            leftindex += 1;

        }
        else {
            sortedarr.push(right[rightindex]);
            rightindex += 1;

        }

    }

    if (leftindex < left.length) {
        sortedarr.push(left[leftindex]);
        leftindex += 1;
    }

    if (rightindex < right.length) {
        sortedarr.push(right[rightindex]);
        rightindex += 1;
    }

    return sortedarr


};

console.log(mergesort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergesort([105, 79, 100, 110]));




