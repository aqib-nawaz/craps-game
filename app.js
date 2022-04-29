let dice_1_img = document.createElement('img');
let dice_2_img = document.createElement('img');

let message = document.getElementById('message');
let points = document.getElementById('points')

let dices = [1, 2, 3, 4, 5, 6];
let rollCount = 0;



let showDice = () => {
    let _1st_dice = getRandomDice();
    let _2nd_dice = getRandomDice();

    dice_1_img.src = `./images/${_1st_dice}.png`;
    dice_2_img.src = `./images/${_2nd_dice}.png`;


    let dice_img_container = document.getElementById('dice-img-container');

    dice_img_container.appendChild(dice_1_img);
    dice_img_container.appendChild(dice_2_img);



    if( rollCount == 0) {
        firstRollLogic( _1st_dice, _2nd_dice )

    } else {
        secondRollLogic( _1st_dice, _2nd_dice )
    }
}




let getRandomDice = () => {
    let randIndex = Math.floor(Math.random() * 6);
    return dices[randIndex];
}


let firstRollLogic = ( value1, value2) => {
    let sum = value1 + value2;

    if(sum == 7 || sum == 11){
        message.textContent = "YOU WIN!!"
        message.style.color = "green";
        rollCount = 0;

    } else if( sum == 2 || sum == 3 || sum == 12){
        message.textContent = "YOU Lost";
        message.style.color = "red";

    } else {
        message.textContent = `Roll again till you get same points,
                                or If 7, you will lost`;
        message.style.color = "blue";
        points.textContent = sum;

        rollCount++
    }

}



let secondRollLogic = (value1, value2) => {
    let sum = value1 + value2;

    if( sum == points.textContent){
        message.textContent = "Points Matched, YOU WIN!!"
        message.style.color = "green";

    } else if(sum == 7){
        message.textContent = "It is 7, YOU LOST";
        message.style.color = "red";

    } else{
        message.textContent = `Roll again till you get same points,
                                or If 7 you will lost`;
        message.style.color = "blue";
    }
}



document.getElementById('play-btn').onclick = function () {
        showDice();
}