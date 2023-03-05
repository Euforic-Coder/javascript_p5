function setup() {
  createCanvas(400, 400);
  var p1 = 0;
  var p2 = 0;
  var p3 = (width / 4);
  var p4 = (height / 4);
  
  for(var y = 0; y < (height / 100); ++y){
    for(var x = 0; x < (width / 100); ++x){
      var Color = {
        r: random(255),
        g: random(255),
        b: random(255),
        a: 255
      };
      
      fill(Color.r, Color.g, Color.b, Color.a);
      console.log(Color.r + ", " + Color.g + ", " + Color.b + ", " + Color.a + " | " + p1 + ", " + p2 + ", " + p3 + ", " + p4);
      noStroke();
      rect(p1, p2, p3, p4);
      p1 += (width / 4);
    }
    p1 = 0;
    p2 += (height / 4);
    p4 += (height / 4);
  }
}