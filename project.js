
let destinations = ["The Temple of Doom", "Racoon City", "The Fratellis Hideout", "Hoth", "Derek Zoolander Center for Children Who Can't Read Good and Wanna Learn to Do Other Stuff Good Too"]
let resturants = ["a summer joint that's open in the fall", "Tom's Diner", "Dorsia's", "Hannibal Lectar's Exotic and Rare Steakhouse", "The Three Broomsticks"]
let whips = ["the Heel Toe Express", "One Eyed Willies Pirate Ship", "the Millennium Falcon", "Monty Python's Horse", "a DeLorean that only goes 87 MPH"]
let entertainments = ["you will get to show everyone the photos of you in the 90's!", "you will be playing in traffic!", "you will be listening to It's a Small World on repeat!", "you will be watching YouTube Adds for 24 hours!", "you won and will get to join in on WU-TANG WEDNESDAY!"]

function getRandomItemFromArray(stringArray){
    let randomNumber = Math.random();
    let randomNumberByArrayLength = randomNumber * stringArray.length;
    let trimRandomNumber = Math.floor(randomNumberByArrayLength);
    return stringArray[trimRandomNumber];
}

let randomDest = getRandomItemFromArray(destinations);
let randomRest = getRandomItemFromArray(resturants);
let randomWhip = getRandomItemFromArray(whips);
let randomEnt = getRandomItemFromArray(entertainments);

alert("Your vacation location is " + randomDest + " and when you arrive, you will be dining at " + randomRest + ". You will arrive via " + randomWhip + " and for your leisure " + randomEnt);
userChoice();
function userChoice(){
    let userInput = prompt("Please enter a number 1 if you want to complete your vacation! Please enter a number 2 if you have no taste and want to retry!");
    while(userInput == 2){  
        randomDest = getRandomItemFromArray(destinations);
        randomRest = getRandomItemFromArray(resturants);
        randomWhip = getRandomItemFromArray(whips);
        randomEnt = getRandomItemFromArray(entertainments);
        
        console.log("Your vacation location is " + randomDest + " and when you arrive, you will be dining at " + randomRest + ". You will arrive via " + randomWhip + " and for your leisure " + randomEnt);
        userInput = prompt("Please enter a number 1 if you want to complete your vacation! Please enter a number 2 if you have no taste and want to retry!");
    }    
    if(userInput == 1){
        console.log("Your vacation is complete!");
    }
}
