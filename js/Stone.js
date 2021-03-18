//name the class
class Stone {

  //add properties into constructor
  constructor (x,y,width,height){

      //write all the options
      var options = {
          isStatic:false,
          restitution:0,
          friction:1,
          density:1.2
      }

      //create this.body using Bodies.rectangle
      this.body = Bodies.rectangle(x,y,width,5,options);

      //load the image that will be applied to this.body
      this.image = loadImage("images/stone.png");

      //add this.body to World
      World.add(world,this.body);
      
      //store width and height properties in this.width and this.height
      this.width = width;
      this.height = height;

  }

  display(){

      //define pos and angle
      var pos = this.body.position;
      var angle = this.body.angle;
     
      //push and pop
      push();
      
      translate(pos.x,pos.y);
      rotate(angle);
      
      imageMode(CENTER);
      image(this.image,0,0,this.width,this.height);
      pop();
      }
    }