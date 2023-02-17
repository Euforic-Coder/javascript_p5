var circles = [];
function setup() {
  createCanvas(512, 512);
 
  var first = false;
  for(var i = 0; i < 20000; ++i){
    var circle = {
      x: random(width),
      y: random(height),
      r: random(15, 50)
    }
    
    // Check if the first circle is present
    if(!first){
      circles.push(circle);
      first = true;
      console.log("First");
    }
    
    // Check if a new circle is overlapping an old one
    var overlapping = false;
    for(var j = 0; j < circles.length; ++j){
      var other = circles[j];
      var d = dist(circle.x, circle.y, other.x, other.y);
      if(d < circle.r + other.r + 5){
        overlapping = true;
        console.log("Overlapping");
        break;
      }
    }
      if(!overlapping){
        circles.push(circle);
      }
  }
 
    // Populate circles
    for(var k = 0; k < circles.length; ++k){
      console.log("Circle");
      var c = circles[k];
      fill(random(100, 255), random(25, 175), random(25), random(100, 255));
      noStroke();
      
      ellipse(c.x, c.y, c.r*2, c.r*2);
  }
}