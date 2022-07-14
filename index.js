var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;

const images = [
    'https://www.serebii.net/swordshield/pokemon/001.png',
    'https://www.serebii.net/swordshield/pokemon/002.png',
    'https://www.serebii.net/swordshield/pokemon/003.png',
  ];

  var index = 0;
  
  function nextImage() {
    index++;
    index = index >= images.length ? images.length - 1 : index;
    return images[index];
  }

function jump() {
    if(character.classList == "animate")
    {return}character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}

// document.querySelector("#block")function jump() {
//     document.querySelector(images).src = nextImage();
//    }



var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        block.style.animation = "none";
        alert("Game Over! Score: " + Math.floor(counter/100));
        counter=0;
        block.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);

