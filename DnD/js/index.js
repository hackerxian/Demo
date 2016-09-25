/**
 * Created by xianda on 16/5/13.
 */

function handleDragStart(event) {
}

function handleDragEnter(event) {
  var J_over = document.querySelectorAll('.container .over')[0];
  J_over.style.display = "block";
}

function handleDragLeave(event) {
  removeOver()
}

function handleDrop(e) {
  if (e.stopPropagation) {
    e.stopPropagation(); // stops the browser from redirecting.
  }

  var J_contanier = document.querySelectorAll('.container')[0];

  let newEl = document.createElement('p');
  newEl.innerHTML = 'hello';
  newEl.setAttribute('draggable', true);
  J_contanier.appendChild(newEl);
  removeOver();
  return false;
}

function handleDragEnd(e) {
  console.log('drag end');
  removeOver();
}

function handleDragOver(ev) {
  ev.preventDefault();
  // removeOver();
}


function removeOver() {
  var J_over = document.querySelectorAll('.container .over')[0];
  J_over.style.display = "none";
}