const array = [2, 3, 4, 5, 6];

array.forEach(item => {
    if (item % 2 === 0) {
        console.log(`Número ${item} é par`);
    } else {
        console.log(`Número ${item} é ímpar`);
    }
});
