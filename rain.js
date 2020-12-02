class Rain {
    constructor(x, y) {
        var options = {
        restitution: 0.4
        
        }
    
    this.r = 2;
    this.body = Bodies.circle(x, y, this.r, options);
    this.color="aqua";
        World.add(world, this.body);
}
updatey(){
    if(this.body.position.y>height){
        Matter.Body.setPosition(this.body,{x:random(0,800),y:random(0,800)})
    }
}
 display(){  
    var pos = this.body.position;
    var angle = this.body.angle;

    push ();
    translate (pos.x, pos.y);
    rotate (angle);
    imageMode (CENTER);
    noStroke();
    fill (this.color);
    ellipseMode (RADIUS);
    ellipse (0,0,this.r, 5);
    pop ();
}

};