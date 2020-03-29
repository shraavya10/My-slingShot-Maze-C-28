class SlingShot{
    //defining the two bodies;bird and a point
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    //calling the function to detach the bird when the mouse button is pressed
 fly(){
this.sling.bodyA=null;
 }
    display(){
        //displaying the the line by taking the two objects'position
        if(this.sling.bodyA!=null){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}