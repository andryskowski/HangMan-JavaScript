const body = document.querySelector('body');
let points_view = document.querySelector('#points');
const ELEMENT = document.querySelector('#password');
const BTN = document.querySelectorAll('.btn')
const images =document.querySelector('.images');
let visible_password = "";
let good_letters=0;
let counter_photo = 1;
let password = "";

window.onload = function () {
    password = random_password();
    create_visible_password();
    ELEMENT.innerHTML = visible_password;
    points_view.innerHTML = 0;
    points = 0;
    set_buttons();
};

function random_password(){
    const PASSWORDS = ["MARMOLADA", "ZIEMNIAKI", "KISZONKI", "WINO"];
    return PASSWORDS[getRandomIntInclusive(0,3)];
}

function create_visible_password(){
    for(let i=0; i<password.length; i++)
    {
        visible_password+='-';
    }
}

function set_buttons() {
    for (let i = 0; i < BTN.length; i++) {

        BTN[i].addEventListener('click', function () {
            const number = BTN[i].getAttribute('data-letter');
            BTN[i].style.display = 'none';
            check(number);
        })
    }
}

function check(number) {
    let if_point = -1;
    for (let i = 0; i < password.length; i++) {
        if (number == password[i]) {
            visible_password = setCharAt(visible_password, i, password[i]);
            good_letters+=1;
            if_win(good_letters);
            ELEMENT.innerHTML = visible_password;
            if_point = 1;
        }
    }

    if(if_point==-1){
    counter_photo+=1;
    change_img(counter_photo);
    }
    
    points = points + if_point;
    points_view.innerHTML = points;

   
}

function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substr(0, index) + chr + str.substr(index + 1);
}

function if_win(good_letters){
    if(good_letters==visible_password.length){
        alert("You win!");
    }

}


function change_img(counter_photo){
    images.style.backgroundImage='url(img/0'+counter_photo+'.png)';
    if(counter_photo==7){
        if_lose();
    }
}

function if_lose()
{
    alert("You lose!");
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }