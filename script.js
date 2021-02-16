var clicks = 0;

function add() {
 clicks++
 if (clicks === 1) {
  alert(
   "You can simply remove any item from a list by tapping on it. "
  );
 }
 var item = document.getElementById(
  'inp').value;
 var div = document.createElement(
  "div");
 div.innerHTML = item;
 div.classList.add('item');
 document.getElementById("list")
  .appendChild(div);
 item = "";
 div.addEventListener("click",
  function() {
   div.style.display = "none";
  });
}
