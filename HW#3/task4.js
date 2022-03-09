String.prototype.removeSpecialCharacters = function(){
    return this.replace(/[^a-zа-яё0-9\s]/gi, '');
}

console.log('1HE!!LL??OO93!!!!'.removeSpecialCharacters());