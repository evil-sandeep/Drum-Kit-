

var numberOfDromButtons=document.querySelectorAll(".drum").length;






for(var i=0 ; i<numberOfDromButtons ;i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
     var buttonInnerhtml=this.innerHTML;


     makeSound(buttonInnerhtml);
     btnPressed(buttonInnerhtml);
     
    });

}

document.addEventListener("keypress", function( event){

    makeSound(event.key);
    btnPressed(event.key);
});


function makeSound(key){

    switch (key) {
        case "s":
            var sounds= new Audio("sounds/tom-1.mp3");
            sounds.play(); 
            break;
            
        case "a"     :
            var sounds= new Audio("sounds/tom-2.mp3");
            sounds.play();
            break;

        case "n"     :
            var sounds= new Audio("sounds/tom-3.mp3");
            sounds.play();
            break;

        case "d"     :
           var sounds= new Audio("sounds/tom-4.mp3");
            sounds.play();
            break;

        case "E"     :
            var sounds= new Audio("sounds/snare.mp3");
            sounds.play();
            break;
           
        case "e"     :
            var sounds= new Audio("sounds/crash.mp3");
            sounds.play();
            break;

        case "p"     :
            
            var sounds= new Audio("sounds/kick-bass.mp3");
            sounds.play();
            break;
            
     
        default:
            console.log(key)
            break;
     }
}

function btnPressed(currentKey){

    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);
}


setTimeout(() => {
    document.getElementsByClassName("note")[0];
}, 100);


