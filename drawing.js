function draw_endGame()
{
  background(255);
}

function paint()
{
  background(51);
}
function paintFrame()
{
  stroke(255);
  line(5,5,5,limit2-5);
  line(5,5,limit2-5,5);
  line(limit2-5,limit2-5,5,limit2-5);
  line(limit2-5,limit2-5,limit2-5,5);
  
  line(6,6,6,limit2-6);
  line(6,6,limit2-6,6);
  line(limit2-6,limit2-6,6,limit2-6);
  line(limit2-6,limit2-6,limit2-6,6);
}
function static_paint()
{
  score_graphic = createP("Score: " + snakeSize);
  score_graphic.position(0.9*limit,limit/10);
  score_graphic.style("font-size", "1.3em");
  score_graphic.style("color", "#CAFF7A");
}
function drawSnakeElement(x,y,xspeed,yspeed)
{
  fill(255);
  switch(snakeShape)
  {
    case 0:
        rect(x-5, y-5, 10, 10);
        break;
    case 1:
        ellipse(x, y, 10, 10);
        break;
    case 2:
        xIndex = 5 * xspeed;
        if(xIndex != 0)
          xIndex /= abs(xspeed);
        yIndex = 5 * yspeed;
        if(yIndex != 0)
          yIndex /= abs(yspeed);
        triangle(x+xIndex, y+yIndex, x - xIndex + yIndex ,  y - yIndex + xIndex, x - xIndex -yIndex, y + - yIndex - xIndex);
        break;
  }
}
