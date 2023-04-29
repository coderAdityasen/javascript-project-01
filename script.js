const decrease = document.getElementById("decrementBtn");
const display = document.getElementById("displayValue");
const increase = document.getElementById("incrementBtn");

const reset = document.getElementById("resetBtn");


// decrease btn set

decrease.addEventListener("click", () =>{
    const value = Number(display.innerText)
    if(value > 0 ){
        display.innerText = value - 1
    }else{
        alert(value  + " is minimum number")
    }
})

// increase btn set

increase.addEventListener("click", ()=>{
    const value = Number(display.innerText)
    if(value <= 9){
        display.innerText = value + 1;
    }else{
        alert( value + " is the maximum number you can go with")
    }
})


// reset btn set

reset.addEventListener("click" , () =>{
    display.innerHTML = 0;
})



