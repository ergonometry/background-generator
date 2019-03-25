var css = document.querySelector("h3");
// .color1 is to grab the class selector (CSS)
var color1 = document.querySelector(".color1"); 
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


// check if our variables return the elements that we want
// console.log(css);
// console.log(color1);
// console.log(color2);
// console.log(body);

// So far we've used events that listens to users actions like click, mouseenter, and keypress

//However, we want an event that listens to INPUTS and it's called input, where any time the input value changes, it detects it.

// what this function
function colorGradient() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
}

console.log(colorGradient)


color1.addEventListener("input", colorGradient);

color2.addEventListener("input", colorGradient);
 
// it's recommended to use addEventListener because we're keeping JS in the JS file (separation of concerns), but we could have also done within the input (HTML file) is put an onclick attribute or oninput attribute in our case.

// another important difference between addEventListener and oninput is that the <input> tag in HTML can only have ONE oninput attribute VS. in the JS file, we can keep adding different functions, different events.

