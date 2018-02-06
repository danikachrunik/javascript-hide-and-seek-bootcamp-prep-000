function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').getElementsByClassName('target')[0];
}

function increaseRankBy(n) {
  var rank = document.getElementsByClassName("ranked-list");
  for(var i = 0; i < rank.length; i++) {
    rank[i].innerHTML = (parseInt(rank[i].innerHTML) + n);
  }
}

function deepestChild() {
  var elems = document.getElementById('grand-node').querySelectorAll('div');
  return elems[0];
}

