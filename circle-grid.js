background(0)

var count_height = 20
while (count_height < height) {
  var count = 20
  while (count < width) {
    ellipse(count,count_height,20,20);
    fill(255);
    count += 25
  }
count_height += 30 
}


