const typeText = document.querySelector(".typeText")
const textToBeTypeArray = ["a software engineer", "a frontend developer", "a backend developer"]
let index = 0, isAdding = true, textToBeTypedIndex = 0

function playAnim() {
    setTimeout(function () {

        // set the text of typeText to a substring of
        // the textToBeTyped using index.
        typeText.innerText = textToBeTypeArray[textToBeTypedIndex].slice(0, index)
        if (isAdding) {
            // adding text
            if (index > textToBeTypeArray[textToBeTypedIndex].length) {
                // no more text to add
                isAdding = false
                //break: wait 2s before playing again
                setTimeout( function () {
                    playAnim()
                }, 1000)
                return
            } else {
                // increment index by 1
                index++
            }
        } else {
            // removing text
            if (index === 0) {
                // no more text to remove
                isAdding = true

                //switch to next text in text array
                textToBeTypedIndex = (textToBeTypedIndex + 1) % textToBeTypeArray.length
            } else {
                // decrement index by 1
                index--
            }
        }
        // call itself
        playAnim()
    }, isAdding ? 120 : 60)
}
// start animation with delay
setTimeout(function () {
    playAnim()
},2000)

//================TRAIL ANIMATION=======

// dots is an array of Dot objects,
// mouse is an object used to track the X and Y position
// of the mouse, set with a mousemove event listener below
// var dots = [],
//     mouse = {
//         x: 0,
//         y: 0
//     };
//
// // The Dot object used to scaffold the dots
// var Dot = function() {
//     this.x = 0;
//     this.y = 0;
//     this.node = (function(){
//         var n = document.createElement("div");
//         n.className = "trail";
//         document.body.appendChild(n);
//         return n;
//     }());
// };
// // The Dot.prototype.draw() method sets the position of
// // the object's <div> node
// Dot.prototype.draw = function() {
//     this.node.style.left = this.x + "px";
//     this.node.style.top = this.y + "px";
// };
//
// // Creates the Dot objects, populates the dots array
// for (var i = 0; i < 50; i++) {
//     var d = new Dot();
//     dots.push(d);
// }
//
// // This is the screen redraw function
// function draw() {
//     // Make sure the mouse position is set everytime
//     // draw() is called.
//     var x = mouse.x,
//         y = mouse.y;
//
//     // This loop is where all the 90s magic happens
//     dots.forEach(function(dot, index, dots) {
//         var nextDot = dots[index + 1] || dots[0];
//
//         dot.x = x;
//         dot.y = y;
//         dot.draw();
//         x += (nextDot.x - dot.x) * .9;
//         y += (nextDot.y - dot.y) * .9;
//
//     });
// }
//
// addEventListener("mousemove", function(event) {
//     //event.preventDefault();
//     mouse.x = event.pageX;
//     mouse.y = event.pageY;
// });
//
// // animate() calls draw() then recursively calls itself
// // everytime the screen repaints via requestAnimationFrame().
// function animate() {
//     draw();
//     requestAnimationFrame(animate);
// }
//
// // And get it started by calling animate().
// animate();
