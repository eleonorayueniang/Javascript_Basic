const btnAdd = document.getElementById('piu');
const btnRem = document.getElementById('meno');
let counter = document.getElementById('cifra');
let number = 0;

btnAdd.addEventListener('click', ()=>{ if(number < 999) {
  console.log("somma");
  number ++;
  counter.textContent = number;
} else {
  alert("Non puoi andare oltre!");
}})
btnRem.addEventListener('click', ()=>{if(number > 0) {
  console.log("sottrai");
  number --;
  counter.textContent = number;
}else {
  alert("Non puoi visualizzare numeri negativi!");
}})
