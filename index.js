function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').getElementsByClassName('target')[0];
}

function increaseRankBy(n) {
  return;
}

function deepestChild() {
  var elems = document.getElementById('grand-node').querySelectorAll('div');
  return elems;
}

