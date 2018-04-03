let nav = document.getElementsByClassName('nav');
let navMenu = document.getElementsByClassName('navMenu');
let contentContainer = document.getElementsByClassName('contentContainer');
let closeMenu = document.getElementsByClassName('close');
let ball = document.getElementsByClassName('ball');
let buttons = document.querySelectorAll('.button');

function choice(btnID){
    switch (btnID){
        case "up":
            upPushed();
            break;
        case "down":
            downPushed();
            break;
        case "left":
            leftPushed();
            break;
        case "right":
            rightPushed();
            break;
        default:
            midPushed();
    }
}

function upPushed(){
    let y = parseInt(ball[0].style.top);
    if(y > 60) {
        ball[0].style.top = parseInt(ball[0].style.top) - 60 + 'px';
    }
}
function downPushed(){
    let y = parseInt(ball[0].style.top);
    if(y < 700) {
        ball[0].style.top = parseInt(ball[0].style.top) + 60 + 'px';
    }
}
function leftPushed(){
    let x = parseInt(ball[0].style.left);
    if(x > 60) {
        ball[0].style.left = parseInt(ball[0].style.left) - 60 + 'px';
    }
}
function rightPushed(){
    let x = parseInt(ball[0].style.left);
    if(x < 700) {
        ball[0].style.left = parseInt(ball[0].style.left) + 60 + 'px';
    }
}
function midPushed(){
    ball[0].style.top = "60px";
    ball[0].style.left = "60px";
}

function openNavMenu(){
    navMenu[0].style.width = "300px";
    contentContainer[0].style.filter = "blur(5px)";
}

function closeNavMenu(){
    navMenu[0].style.width = "0";
    contentContainer[0].style.filter = "none";
}

nav[0].addEventListener('click',openNavMenu,false);
closeMenu[0].addEventListener('click',closeNavMenu,false);

buttons.forEach(function(btnID){
    btnID.addEventListener('click', function(){
//        let direction = this.id;
        choice(this.id);
    },false);
});
