const button = document.querySelectorAll(".button")
console.log(button);

button.forEach(function(button) {
    button.addEventListener("click", function(e) {
        const color = e.target.id;

        switch(color){
            case "grey": 
            document.body.style.backgroundColor = color;
            break;

            case "green": 
            document.body.style.backgroundColor = color;
            break;  

            case "blue":
            document.body.style.backgroundColor = color;
            break;  

            case "red":
            document.body.style.backgroundColor = color;  
            break;

            case "yellow":
            document.body.style.backgroundColor = color;
            break;
        }
    });
});

// button.forEach(function(button) {
//     console.log(button);
    
//     button.addEventListener("click", function(e){
//         console.log(e.target.id);
    
//         document.body.style.backgroundColor = e.target.id;
//     })
// });
