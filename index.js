// let cmajorkey = document.querySelectorAll(".key")[0]
// let dmajorkey = document.querySelectorAll(".key")[2]
// let emajorkey = document.querySelectorAll(".key")[4]
// let fmajorkey = document.querySelectorAll(".key")[5]
// let gmajorkey = document.querySelectorAll(".key")[7]
// let amajorkey = document.querySelectorAll(".key")[9]
// let bmajorkey = document.querySelectorAll(".key")[11]
// let csharpkey = document.querySelectorAll(".key")[1]
// let dsharpkey = document.querySelectorAll(".key")[3]
// let fsharpkey = document.querySelectorAll(".key")[6]
// let gsharpkey = document.querySelectorAll(".key")[8]
// let asharpkey = document.querySelectorAll(".key")[10]

let numberOfPianoButtons = document.querySelectorAll(".key").length
for(let i=0;i<numberOfPianoButtons;i++) {

    console.log("here");
    document.querySelectorAll(".key")[i].addEventListener('click', function() {
        console.log("Hello")
        var newLink = this.querySelector("p").innerHTML;
        makeSound(newLink)
        
    })
}

document.addEventListener("keydown", function(event) {
    makeSound(event.key)
})

function makeSound(key) {
    switch(key) {
        case 'c':
            let audio1 = new Audio("sounds/piano-c.mp3")
            audio1.play()
            break;
        case 'd':
            let audio2 = new Audio("sounds/piano-d.mp3")
            audio2.play()
            break;
        case 'e':
            let audio3 = new Audio("sounds/piano-e.mp3")
            audio3.play()
            break;
        case 'f':
            let audio4 = new Audio("sounds/piano-f.mp3")
            audio4.play()
            break;
        case 'g':
            let audio5 = new Audio("sounds/piano-g.mp3")
            audio5.play()
            break;
        case 'a':
            let audio6 = new Audio("sounds/piano-a.mp3")
            audio6.play()
            break;
        case 'b':
            let audio7 = new Audio("sounds/piano-b.mp3")
            audio7.play()
            break;
        case 'C':
                let audio8 = new Audio("sounds/piano-csharp.mp3")
                audio8.play()
                break;
        case 'D':
                let audio9 = new Audio("sounds/piano-dsharp.mp3")
                audio9.play()
                break;
        case 'F':
                let audio10 = new Audio("sounds/piano-fsharp.mp3")
                audio10.play()
                break;
        case 'G':
                let audio11 = new Audio("sounds/piano-gsharp.mp3")
                audio11.play()
                break;
        case 'A':
                let audio12 = new Audio("sounds/piano-gsharp.mp3")
                audio12.play()
                break;
        default:
            console.log("error")
    }
}
// document.querySelectorAll(".key")[0].addEventListener('click', function() {
//     let audio1 = new Audio("sounds/crash.mp3")
//     audio1.play()})