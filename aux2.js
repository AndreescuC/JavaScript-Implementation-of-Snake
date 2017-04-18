function check_collision()
{
  var count = 0;
  gameOver = false;
  if( (s.y > limit2-18) || (s.y <6) || (s.x<6) || (s.x > limit2-18) )
    gameOver = true;
  puppet = s.shadow_head.prev;
  while(puppet != null)
  {
    if((int)(count/5) > snakeSize-1)
      break;
    if((int)(count/5) > (int)((count-1)/5))
      break;
    if((int)(count/5) > (int)((count-1)/5))
      if( dist(s.x,s.y, puppet.coord.x, puppet.coord.y) < 2 )
        gameOver = true;
    count++;
    puppet = puppet.prev;
  }
  return gameOver;
}

function inhibScroll()
{
  window.addEventListener("keydown", function(e) {
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1)
    {
      e.preventDefault();
    }}, false);
}