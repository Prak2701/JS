const button = document.querySelectorAll(".button")
console.log(button);

button.forEach(function(button) {
    console.log(button);
    
    button.addEventListener("click", function(e){
        console.log(e.target.id);
    
        document.body.style.backgroundColor = e.target.id;
    })
})
