class Ball{
    constructor(x,y,radius){
        var options = {
            isStatic:true,
            'restitution': 0.8,
            'density': 1.0,
            'friction':1.0
        }
        Matter.Bodies.circle(x,y,radius,options);
        this.body = Bodies.circle(x,y,radius,options);
        this.height = height;
        this.width = width;
        this.image = loadImage("ball-1.png");
        World.add(world,this.body)
        console.log(this.body)
    }
    display(){
        
        push();
        translate(this.body.position.x, this.body.position.y);
        // this.body.position.x = mouseX;
        // this.body.position.y = mouseY;
        // rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0,this.radius);
        pop();
    }
}