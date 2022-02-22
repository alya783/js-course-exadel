function phoneNumberValidation(str){
    const strWithoutSpaces = str.replace(/\s/g, '');
    if(strWithoutSpaces.match(/^\d+$/) && strWithoutSpaces.length === 10){
        return true;
    } return false;
 }
 
 console.log(phoneNumberValidation("094 643 7432"));