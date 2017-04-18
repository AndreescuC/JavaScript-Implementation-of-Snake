function getQuote()
{
  var txtFile = new XMLHttpRequest();
  txtFile.open("GET", "/Resources/Quote Library/quote.txt", true);
  txtFile.onreadystatechange = function()
  {
    if( (txtFile.readyState === 4) && (txtFile.status === 200) )
    {
      var allText = txtFile.responseText; 
      lines = txtFile.responseText.split("6");
    }
  }
  txtFile.send(null);
}

function deliverQuote()
{
  var choice = Math.floor( random(0, quote_choices) );
  document.getElementById("quote_body").value = lines[choice];
  init1();
}

function checkPrayCustomisation()
{
  if (document.getElementById('red_white').checked)
  {
    prayPrimColor = new myColor(200,0,0);
    praySecColor = new myColor(255,255,255); 
    return;
  }
  if (document.getElementById('green_yellow').checked)
  {
    prayPrimColor = new myColor(63,72,204);
    praySecColor = new myColor(255,242,0); 
    return;
  }
  if (document.getElementById('navy_brown').checked)
  {
    prayPrimColor = new myColor(153,217,234);
    praySecColor = new myColor(185,122,87); 
    return;
  }
}
function checkShapeCustomisation()
{
  if (document.getElementById('squ').checked)
  {
    snakeShape = 0; 
    return;
  }
  if (document.getElementById('cir').checked)
  {
    snakeShape = 1; 
    return;
  }
  if (document.getElementById('tri').checked)
  {
    snakeShape = 2;
    return;
  }
}