function Pray()
{
  this.x = 100;
  this.y = 100;
  
  this.check_eaten = function(a ,b)
  {
    eaten = false;
    if(dist(s.x, s.y, this.x, this.y) < 5)
    {
      eaten = true;
      snakeSize ++;
      deliverQuote();
      score_graphic.html("Score: " + snakeSize);
      if((int)(snakeSize/5) > (int)((snakeSize-1)/5))
        compensation_speed = compensation_speed + 0.5;
    }
  }
  
  this.update = function()
  {
    if(eaten)
    {
      this.x = int(random(limit2-20) + 10);
      this.y = int(random(limit2-20) + 10);
      while((this.x == s.x)|| (this.y == s.y))
      {
        this.x = random(limit2-20) + 10;
        this.y = random(limit2-20) + 10;
      }
    }
  }
  
  this.show = function()
  {
    fill(prayPrimColor.r, prayPrimColor.g, prayPrimColor.b);
    stroke(praySecColor.r, praySecColor.g, praySecColor.b);
    strokeWeight(3);
    rect(this.x - 5, this.y - 5, 10, 10);
  }
}