function start()
{
  bool_play = true;
  static_paint();
  canvas.position(0,0);
  document.getElementById('quote_body').className = 'quote_body';
  document.getElementById('quote').className = 'quote';
  document.getElementById('controls').className = 'controls';
  document.getElementById('arrow_keys').className = 'arrow_keys';
  checkPrayCustomisation();
  checkShapeCustomisation();
  getQuote();
  init1();
}
function ret2()
{
  document.getElementById('Return2').className = 'button + button5';
  document.getElementById('scores').className = 'HallOfFame';
  document.getElementById('trophy').className = 'trophy_focus';
  document.getElementById('list').className = 'no_focus';
}

function scores()
{
  document.getElementById('Return2').className = 'button + visible_button5';
  document.getElementById('scores').className = 'HallOfFame_focus';
  document.getElementById('trophy').className = 'trophy';
  document.getElementById('list').className = 'list';
}

function ret1()
{
  document.getElementById('Return1').className = 'button + button4';
  document.getElementById('extra').className = 'description';
  document.getElementById('info').className = 'no_focus';
  document.getElementById('shape_esc').className = 'shape_esc';
  document.getElementById('color_esc').className = 'color_esc';
  //document.getElementById('style_esc').className = 'style_esc';
  document.getElementById('pstyle').className = 'pstyle';
  document.getElementById('customise').className = 'customise_focus';
}

function extra()
{
  document.getElementById('Return1').className = 'button + visible_button4';
  document.getElementById('extra').className = 'description_focus';
  document.getElementById('info').className = 'info_focus';
  document.getElementById('shape_esc').className = 'shape_esc_focus';
  document.getElementById('color_esc').className = 'color_esc_focus';
  //document.getElementById('style_esc').className = 'style_esc_focus';
  document.getElementById('pstyle').className = 'pstyle_focus';
  document.getElementById('customise').className = 'customise';
}