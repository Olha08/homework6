var item = document.getElementById('item');
var del_btn = document.getElementById('del');

item.onmousedown = function(e) {

  var shiftX = e.pageX - parseInt(item.style.left);
  var shiftY = e.pageY - parseInt(item.style.top);

  function moveAt(e) {
    var left = Math.max( Math.min( e.pageX - shiftX, item.parentNode.clientWidth - item.clientWidth ), 0);
    var right = Math.max( Math.min( e.pageY - shiftY, item.parentNode.clientHeight - item.clientHeight ), 0);
    item.style.left = left + 'px';
    item.style.top = right + 'px';
  }

  document.onmousemove = function(e) {
    moveAt(e);
  };

  item.onmouseup = function() {
    document.onmousemove = null;
    item.onmouseup = null;
  };

}
