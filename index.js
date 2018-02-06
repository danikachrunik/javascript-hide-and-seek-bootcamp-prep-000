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
  var elem = document.getElementById('grand-node').querySelectorAll('div');
  if(elem[0].hasChildNodes) {
    elem = elem[0].querySelectorAll('div');
  } else {
    return elem[0];
  }
}

