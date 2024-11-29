let count = 0;

let countBtn = document.getElementById("countBtn");
let reset = document.getElementById("resetBtn");
let cdown = document.getElementById("downBtn");

function countUp(){
        count++
        document.getElementById('counter').innerHTML = count
    
}
function countDown(){
        count--
        if(count < 0){
             count = 0
             document.getElementById('counter').innerHTML = count   
        }
        else{
                document.getElementById('counter').innerHTML = count
        }
    
}
function Reset(){
    count = 0
    document.getElementById('counter').innerHTML = count
}

document.addEventListener('keyup', ev => {
  console.log(ev);
});


countBtn.addEventListener('click',countUp);
cdown.addEventListener('click',countDown);
reset.addEventListener('click',Reset);