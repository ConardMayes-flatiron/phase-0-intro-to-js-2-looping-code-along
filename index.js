function writeCards(names, event){
    const newList =[];
    for (let n=0; n < names.length; n++){
        newList.push(`Thank you, ${names[n]}, for the wonderful ${event} gift!`);
    }
    return newList;
}

function countDown(i){
    while (i >= 0){
        console.log(i--);
    }
}