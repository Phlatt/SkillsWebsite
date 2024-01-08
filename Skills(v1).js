var dist;
var shape;
var height;

function generate(){
    randDist = Math.round(Math.random() * 50 + 125);
    randShape = Math.ceil(Math.random() * 3);
    randHeight = Math.ceil(Math.random() * 3);
    
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

    var dist = document.getElementById("dist");
    dist.innerHTML = randDist + " yards";
    var shape = document.getElementById("shape");
    shape.innerHTML = randShape;
    var height = document.getElementById("height");
    height.innerHTML = randHeight;
}