var limit ;
var limit2;
var gameOver, eaten;
var pray;
var snakeSize = 1;
var compensation_speed = 1;
var snakeLimit = 40;
var shadowSize = 0;
var canvas;
var score_graphic;
var bool_play = false;
var canvas_pos;
var wdt, hgt;
var quote_choices = 5;
var lines;
var prayPrimColor, praySecColor;
var snakeShape;
var xIndex, yIndex;

function setup()
{
  wdt = window.innerWidth;
  hgt = window.innerHeight;
  limit = min(wdt/2,8.5/10*hgt);
  limit2 = limit-100;
  
  inhibScroll();
  getQuote();
  
  canvas_pos = hgt/2;
  canvas = createCanvas(wdt/2,hgt);
  canvas.position(0,0.55*hgt);
  
  var but_play = select("#Play");
  but_play.mousePressed(start);
  var but_Return2 = select("#Return2");
  but_Return2.mousePressed(ret2);
  var but_scores = select("#HighScores");
  but_scores.mousePressed(scores);
  var but_Return1 = select("#Return1");
  but_Return1.mousePressed(ret1);
  var but_extra = select("#Extra");
  but_extra.mousePressed(extra);

  s = new Snake(limit2/2,limit2/2);
  p = new Pray();
  
}

function draw() 
{
  if(!check_collision())
  {
    paint();
    if(bool_play)
    {
      paintFrame();
      s.keyPressed();
      s.update();
      s.show();
      p.check_eaten(s.x, s.y);
      p.update();
      p.show();
    }
  }
  else
    draw_endGame();
}