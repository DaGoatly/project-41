class Drops{
constructor(){
this.rain = Bodies.circle(x,y,5,options);
update();
}
}

function rainBottom(){
    ellipse((this.rain.y)+10);
}