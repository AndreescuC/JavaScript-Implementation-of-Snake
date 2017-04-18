function Snake(a,b)
{
  this.x = a;
  this.y = b;
  this.direction = new direction(0,0);
  this.shadow_head = new nod(new coord(a,b),this.direction, null,null);
  this.shadow_tail = new nod(new coord(a,b), this.direction, this.shadow_head, null);
  
  this.update = function()
  {
    new_puppet = this.shadow_head;
    this.shadow_head = new nod(new coord(this.x, this.y), new coord(this.direction.xspeed, this.direction.yspeed), null, new_puppet);
    new_puppet.nextt = this.shadow_head;
    shadowSize++;
    if(shadowSize > snakeLimit)
    {
      this.shadow_tail = this.shadow_tail.nextt;
      this.shadow_tail.prev = null;
    }
    this.x = this.x + this.direction.xspeed;
    this.y = this.y  +this.direction.yspeed;
  }
  
  this.show = function()
  {
    var count = 0;
    drawSnakeElement(this.x, this.y, this.direction.xspeed, this.direction.yspeed);
    puppet = s.shadow_head;
    while(puppet != null)
    {
      if((int)(count/5) > snakeSize-1)
        break;
      if((int)(count/5) > (int)((count-1)/5))
        drawSnakeElement(puppet.coord.x, puppet.coord.y, puppet.direct.x, puppet.direct.y);
      count++;
      puppet = puppet.prev;
    }
  }
  
  this.keyPressed = function()
  {
    if((keyCode == UP_ARROW) && (this.direction.yspeed == 0))
    {
      this.direction = new direction(0,-compensation_speed);
    }
    if((keyCode == DOWN_ARROW) && (this.direction.yspeed == 0))
    {
      this.direction = new direction(0,compensation_speed);
    }
    if((keyCode == LEFT_ARROW) && (this.direction.xspeed == 0))
    {
      this.direction = new direction(-compensation_speed,0);
    }
    if((keyCode == RIGHT_ARROW) && (this.direction.xspeed == 0))
    {
      this.direction = new direction(compensation_speed,0);
    }
  }
}

function direction(a,b)
{
  this.xspeed = a;
  this.yspeed = b;
}

function coord(a,b)
{
  this.x = a;
  this.y = b;
}

function nod(val, dir, nextn, prevn)
{
  this.coord = val;
  this.direct = dir;
  this.nextt = nextn;
  this.prev = prevn;
}