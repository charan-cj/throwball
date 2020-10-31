class Dust{
    constructor(x,y,width,height){
        var options = {
            isStatic:true,
            'restitution': 0.8,
            'density': 1.0,
            'friction':1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.height = height;
        this.width = width;
        this.image = loadImage("dust.png");
        World.add(world,this.body)
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        // this.body.position.x = mouseX;
        // this.body.position.y = mouseY;
        // rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}