function pinCodeGenerator(length) {
    let num;
    let result = [];
    while (length > 0) {
        num = Math.floor(Math.random() * 11);
        result.push(num);
        length--;
    }

    return +(result.join(""));
}

console.log(pinCodeGenerator(5));