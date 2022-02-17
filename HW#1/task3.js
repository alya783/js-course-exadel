const prices = [64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421, 9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123];

function getPrice(arr) {
    let total = 0;

    for (item of arr) {
        total += item;
    }

    let avg = Math.floor(total / arr.length);
    console.log(`Total: ${total} hryvnias, average price of goods ${avg} hryvnias `);
}

getPrice(prices);