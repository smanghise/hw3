v//top half
var count_width_start = width/2
var count_width_end = width/2
var count_height = 0
while (count_height < height/2) {
  line(count_width_start,count_height,count_width_end,count_height);
  count_width_start -= 10
  count_width_end +=10
  count_height +=10
}

//bottom half
var count_width_start = 0
var count_width_end = width
var count_height = height/2
while (count_height > 0) {
  line(count_width_start,count_height,count_width_end,count_height);
  count_width_start += 10
  count_width_end -=10
  count_height +=10
}
