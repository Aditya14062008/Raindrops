class Raindrops {
    constructor(x,y){
        var options = {
            isStatic: false,
        }
        this.image = loadImage("Walking Frame/rain.png");
        this.raindrop = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella)
        //load Image for BestMan
        
    }

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        //display the image for BestMan if the frameCount is over 200, otherwise display the boy with umbrella image
        image(this.image,pos.x,pos.y+70,300,300);
    }
}
