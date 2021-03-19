class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.img = loadImage("sprites/sling1.png")
        this.img2 = loadImage("sprites/sling2.png")
        this.img3 = loadImage("sprites/sling3.png")
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);

            stroke(48, 22, 8); 

            if(pointA.x < 220){
                line(pointA.x+20, pointA.y, pointB.x, pointB.y);
                line(pointA.x-20, pointA.y, 180, 50);
                image(this.img, 200, 30)
                image(this.img2, 170, 20)
                image(this.img3, pointA.x-20, pointA.y)
            }else{
      
                line(pointA.x+20, pointA.y, pointB.x, pointB.y);
                line(pointA.x-20, pointA.y, 180, 50);
                image(this.img, 200, 30)
                image(this.img2, 170, 20)
                image(this.img3, pointA.x+20, pointA.y)

            }


           
        }
    }
    
}