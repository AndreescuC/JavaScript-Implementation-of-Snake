var observe;
if (window.attachEvent)
{
  observe = function (element, event, handler)
  {
    element.attachEvent('on'+event, handler);
  };
}
else 
{
  observe = function (element, event, handler) 
  {
    element.addEventListener(event, handler, false);
  };
}
function init1 () 
{
  var txt = document.getElementById('quote_body');
  function resize ()
  {
    txt.style.height = 'auto';
    txt.style.height = txt.scrollHeight+'px';
  }
  //function delayedResize ()
  //{
  //  window.setTimeout(resize, 0);
  //}
  observe(txt, 'change',  resize);
  //observe(txt, 'cut',     delayedResize);
  //observe(txt, 'paste',   delayedResize);
  //observe(txt, 'drop',    delayedResize);
  //observe(txt, 'keydown', delayedResize);
        
  //txt.focus();
  resize();
}