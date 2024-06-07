let slider = document.querySelector(".slider");
let topContainer = document.querySelector(".top-container");
let screen = document.querySelector(".result-container");
let keypad = document.querySelector(".keypad");
let key = document.querySelectorAll(".key");

let result = document.querySelector(".result");




// keypad
for(let j=0; j < key.length; j++){
      key[j].addEventListener("click", ()=>{
        result.innerHTML += key[j].value;
    }) 
}

//removing one at a time

function yeet(){
  result.innerHTML = result.innerHTML.slice(0, -1);
}

// clearing screen
function delet(){
  result.innerHTML="0";
}

//Theme selector
slider.addEventListener("input",()=>{

    document.body.style.backgroundColor="var(--Verydarkdesaturatedblue1)";

    if(slider.value ==="1"){
      topContainer.classList.add("top-container");
      topContainer.classList.remove("top-container2");
      topContainer.classList.remove("top-container3");

      slider.classList.add("slider");
      slider.classList.remove("slider2");
      slider.classList.remove("slider3");

      screen.classList.add("result-container");
      screen.classList.remove("result-container2");
      screen.classList.remove("result-container3");

      result.classList.add("result");
      result.classList.remove("result2");
      result.classList.remove("result3");

      keypad.classList.add("keypad");
      keypad.classList.remove("keypad2");
      keypad.classList.remove("keypad3");

     for(let i=0; i<key.length; i++){
      key[i].classList.add("key");
      key[i].classList.remove("key2");
      key[i].classList.remove("key3");
    }
    }

    if(slider.value === "2"){

        document.body.style.backgroundColor="var(--Lightgray)";

        topContainer.classList.add("top-container2");
        topContainer.classList.remove("top-container1");
        topContainer.classList.remove("top-container3");

        slider.classList.add("slider2");
        slider.classList.remove("slider");
        slider.classList.remove("slider3");

        screen.classList.add("result-container2");
        screen.classList.remove("result-container");
        screen.classList.remove("result-container3");

        result.classList.add("result2");
        result.classList.remove("result");
        result.classList.remove("result3");

        keypad.classList.add("keypad2");
        keypad.classList.remove("keypad");
        keypad.classList.remove("keypad3");

        for(let i=0; i<key.length; i++){
            key[i].classList.add("key2");
            key[i].classList.remove("key");
            key[i].classList.remove("key3");
          }
    }

    if(slider.value ==="3"){

        document.body.style.backgroundColor="var(--Verydarkviolet)";

        topContainer.classList.add("top-container3");
        topContainer.classList.remove("top-container1");
        topContainer.classList.remove("top-container2");

        slider.classList.add("slider3");
        slider.classList.remove("slider");
        slider.classList.remove("slider2");

        screen.classList.add("result-container3");
        screen.classList.remove("result-container2");
        screen.classList.remove("result-container");

        result.classList.add("result3");
        result.classList.remove("result2");
        result.classList.remove("result");

        keypad.classList.add("keypad3");
        keypad.classList.remove("keypad2");
        keypad.classList.remove("keypad");
        
        for(let i=0; i<key.length; i++){
            key[i].classList.add("key3");
            key[i].classList.remove("key2");
            key[i].classList.remove("key");
          }
    }
})
