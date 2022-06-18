document.querySelector("button").addEventListener('click', (env)=>{
    env.preventDefault();
let input_element = document.querySelectorAll("input")
    for (let n =0; n <= input_element.length-1; n++){
        if (input_element[n].value === "") {
        input_element[n].classList.add("icon")
        console.log("error");
        }
    }
    
})