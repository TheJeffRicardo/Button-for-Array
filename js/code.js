let push = document.querySelector("#push")
let display = document.querySelector("#display")
let inputValue = document.querySelector("input")
let names = []

function input(){
    push.addEventListener("click", function(){
        names.push(inputValue.value)
        alert('A NewName has been added')
    })
    display.addEventListener("click", function(){
        inputValue.value = ''
        console.log(names)
    })
}
input()