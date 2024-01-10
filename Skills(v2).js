var dist;
var shape;
var height;
var club;

var clubs = [];

var sw;
var pw;
var ninei;
var eighti;
var seveni;
var sixi;
var fivei;
var fouri;
var hybird;
var wood;
var driver;

function generate(){
    randDist = Math.round(Math.random() * 50 + 125);
    randShape = Math.ceil(Math.random() * 3);
    randHeight = Math.ceil(Math.random() * 3);
    randClub = Math.ceil(Math.random() * 11);
    //Could probobly replace these "else if" statements with switch?
    if(randShape == 1){
        randShape = "Right to left";
    }else if(randShape == 2){
        randShape = "Straight";
    }else if(randShape == 3){
        randShape = "Left to right";
    }

    if(randHeight == 1){
        randHeight = "Low";
    }else if(randHeight == 2){
        randHeight = "Medium";
    }else if(randHeight == 3){
        randHeight = "High";
    }

    if(randClub == 1){
        randClub = "Sand Wedge";
    }else if(randClub == 2){
        randClub = "Pitching Wedge";
    }else if(randClub == 3){
        randClub = "Nine Iron";
    }else if(randClub == 4){
        randClub = "Eight Iron";
    }else if(randClub == 5){
        randClub = "Seven Iron";
    }else if(randClub == 6){
        randClub = "Six Iron";
    }else if(randClub == 7){
        randClub = "Five Iron";
    }else if(randClub == 8){
        randClub = "Four Iron";
    }else if(randClub == 9){
        randClub = "Hybrid";
    }else if(randClub == 10){
        randClub = "Wood";
    }else if(randClub == 11){
        randClub = "Driver";
    }

    var dist = document.getElementById("dist");
    dist.innerHTML = randDist + " yards";
    var shape = document.getElementById("shape");
    shape.innerHTML = randShape;
    var height = document.getElementById("height");
    height.innerHTML = randHeight;
    var club = document.getElementById("club");
    club.innerHTML = randClub;
}
function getText(id){
    element = document.getElementById(id);
    value = element.value;
    return value;
}