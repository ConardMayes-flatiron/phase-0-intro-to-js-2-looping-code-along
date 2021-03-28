// Code your solutions in this file

/*
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);
*/

function writeCards(namesList,event) {
    let newArray = [];
    for (let i=0; i < namesList.length;i++){
        
        newArray[i]=`Thank you, ${namesList[i]}, for the wonderful ${event} gift!`;
        

    }

    return newArray;


}



function countDown(n){
    while (n>=0){
        console.log(n);
        n--;


    }

}




// const dudes = ['Sam', 'Max', 'Bro'];

//writeCards(dudes,"Wookie Life Day");