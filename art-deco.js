var count_start_x = 20
while (count_start_x < width) {
  var count = 10
  var count_start_y = height/2
  while (count < 50) {
    noFill();
    rect(count_start_x,count_start_y,count,count);
    count_start_x -= 5
    count_start_y -= 5
    count += 10
  }	
count_start_x += 90 
}
