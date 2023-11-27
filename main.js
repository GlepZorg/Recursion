const isEven = (number) => {
    if(number === 0 ){
        return 'even'
    }
    else if(number === 1){
        return 'odd'
    }
    else if(number === -1){
        return 'negative';
    }

    return isEven(number - 2);
}
console.log(isEven(-1));