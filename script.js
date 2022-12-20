var plusbtns = document.querySelectorAll(".plus");
var minbtns = document.querySelectorAll(".minus");
var prixunit = document.querySelectorAll(".unitPrice");
var prix = document.querySelectorAll(".price");
var like_btns = document.querySelectorAll(".like");
var tot = document.getElementById("total");
var delete_btns = document.querySelectorAll(".delete");
for (var i = 0; i < plusbtns.length; i++) {
  plusbtns[i].addEventListener("click", inc);
}

for (var i = 0; i < minbtns.length; i++) {
  minbtns[i].addEventListener("click", dec);
}
for (let i = 0; i < like_btns.length; i++) {
  like_btns[i].addEventListener("click", changeColor);
}
for (var i = 0; i < delete_btns.length; i++) {
  delete_btns[i].addEventListener("click", remove);
}
function remove(e) {
  var cible = e.target;
  var trremov = cible.parentElement.parentElement.parentElement.parentElement;
  trremov.remove();
  var PRIX = trremov.querySelector(".price");
  PRIX.innerHTML = 0;
  sum();
}

function changeColor(e) {
  var cible = e.target;
  if (cible.style.color !== "red") {
    cible.style.color = "red";
  } else {
    cible.style.color = "gray";
  }
}

function sum() {
  var somme = 0;
  for (var i = 0; i < prix.length; i++) {
    somme = somme + Number(prix[i].innerHTML);
    tot.innerHTML = somme;
  }
}
function inc(e) {
  var cible = e.target;
  div = cible.parentElement;
  p = div.querySelector("p");
  var quantity = Number(p.innerHTML);
  quantity++;
  p.innerHTML = quantity;

  var tr = cible.parentElement.parentElement.parentElement;
  var unitPrice = tr.querySelector(".unitPrice");
  var price = tr.querySelector(".price");
  var unitPrix = Number(unitPrice.innerHTML);
  var prixtotal = quantity * unitPrix;
  price.innerHTML = prixtotal;
  // 111111111111
  //   var tot = document.getElementById("total");

  //   var prixglobal = Number(tot.innerHTML) + Number(price.innerHTML);
  //   tot.innerHTML = prixglobal;
  // 222222222222222
  //   var somme = document.getElementById("total");
  //   var sum = Number(somme.innerHTML);
  //   for (let i = 0; i <= prix.length; i++) {
  //     sum = Number(sum) + Number(price.innerHTML);
  //     somme.innerHTML = sum;
  //   }
  sum();
}

function dec(e) {
  var cible = e.target;
  div = cible.parentElement;
  p = div.querySelector("p");
  var quantity = Number(p.innerHTML);
  if (quantity > 0) {
    quantity--;
  }
  p.innerHTML = quantity;

  var tr = cible.parentElement.parentElement.parentElement;
  var unitPrice = tr.querySelector(".unitPrice");
  var price = tr.querySelector(".price");
  var unitPrix = Number(unitPrice.innerHTML);
  var total = quantity * unitPrix;
  price.innerHTML = total;
  sum();
}
