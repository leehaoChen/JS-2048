//创建新元素时的动画
function showNewNumber(row,col,num) {
  var gridcell = $(".grid-cell-" + (row + 1) + "-" + (col + 1));
  gridcell.css("position", "absolute");
  gridcell.css("backgroundColor", getGridCellColor(num));
  gridcell.css("color",getNumberColor(num));
  gridcell.css("font-size",getNumberSize(num));
  gridcell.text(num);

  gridcell.animate({
    width:"100px",
    height:"100px",
    top:getPosTop(row),
    left:getPosLeft(col)
  },100);
}
//移动动画
function showMoveAnimation(fromX,fromY,toX,toY) {
  var cell = $(".grid-cell-" + (fromX + 1) + "-" + (fromY + 1));
  cell.css("position", "absolute");

  cell.animate({
    top: getPosTop(toX),
    left: getPosLeft(toY)
  },200);
}