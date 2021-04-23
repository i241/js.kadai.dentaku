'use strict';

function update(_v){
  document.querySelector('input').value =_v
}

function append(_v) {
  document.querySelector('input').value +=_v
}

function calc() {
  const v = document.querySelector('input').value
  const f =new Function('return ' + v )
  update(f().toString())
}