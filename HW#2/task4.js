const vovelsCounter = (str) => {
    const vovels = ['a', 'e', 'i', 'o', 'u']
    let counter = 0
    for (letter of str.toLowerCase()) { // added LowerCase method to the str to transform uppercase letter "A"
        if (vovels.includes(letter)) {
            counter = counter + 1
        }
    }
    return counter
}

console.log(vovelsCounter('The current directory is AD-123'));