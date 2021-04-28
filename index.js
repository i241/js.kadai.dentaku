'use strict'

const num_bth = document.querySelectorAll('.num_bth');
let output_sub = document.getElementById('output_sub');
const output_total = document.getElementById('output_total');
let total = 0;
let stage ='start';
let mode ='integer_mode';

const one_nine = document.querySelectorAll('.one_nine');
    one_nine.forEach(index => {     
      index.addEventListener('click', () => {
        if(stage === 'start') {
          total = index.dataset.indexId;
        }else if(stage === 'finish'){
          reset();
          total = index.dataset.indexId;
        }else if(stage === 'calculation'||stage === 'calBtn'){
          total +=index.dataset.indexId;
        }
        output_sub.textContent = total;
        stage = 'calculation';
      })
    })

const zero =document.getElementById('zero');
zero.addEventListener('click', () =>{
  if(stage==='start'||stage==='finish'||stage==='calBtn') {
    if(output_sub.textContent.slice(-1) ==='0'){
      return;
    }
  }
  if(stage==='start'){
    total = zero.dataset.indexId;
  }else{
    total += zero.dataset.indexId; 
  }
  output_sub.textContent = total;
})

const point = document.getElementById('point');
point.addEventListener('click', () => {
  console.log(point.dataset.indexId)
  if(mode === 'decimal_mode') {
    return;
  }
  if(total === 0){
    total +=point.dataset.indexId;
  }else{
    total +=point.dataset.indexId;
  } 
  output_sub.textContent = total;
  stage = 'calculation';
  mode = 'decimal_mode';
})

const cal = document.querySelectorAll('.cal');
  cal.forEach(index => {     
    index.addEventListener('click', () => {
      if(stage === 'start'){
        return;
      }else if(stage === 'calculation') {
        total += index.dataset.indexId;  
      }else if(stage === 'finish'){
        total = output_total.textContent;
        total += index.dataset.indexId;
        output_total.textContent = 0
      }else if(stage ==='calBtn'){
        total = total.slice(0,-1)
        total +=index.dataset.indexId;
      }
      output_sub.textContent = total;
      stage = 'calBtn'
      mode ='integer_mode'
      changeOutput()
    }) 
  })


const equal_btn = document.getElementById('equal_btn');
equal_btn.addEventListener('click',() =>{
  console.log(eval(total));
  output_total.textContent = eval(total);
  stage = 'finish';
  mode = 'integer_mode'
  changeOutput()
});

const clear =document.getElementById('clear')
clear.addEventListener('click',() =>{
  reset();
})

function reset(){
  total = 0;
  output_sub.textContent = 0;
  output_total.textContent = 0;
  mode = 'integer_mode'
  stage = 'start';
  changeOutput()
}

function changeOutput(){
    if(stage==='finish'){
      output_total.classList.add('active');
      output_sub.classList.remove('active');   
    }else{
      output_sub.classList.add('active');
      output_total.classList.remove('active'); 
    } 
  }