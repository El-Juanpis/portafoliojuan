var hoverDistort = new hoverEffect({
  parent: document.querySelector('.wrapper'),
  intensity: 0.5,
  image1: '/images/juanpa.png',
  image2: '/images/juan.png',
  displacementImage: '/images/14pintura.jpg'
 
});

$(document).ready(function() {

$('.wrapper').hover(         
function () {
anime.timeline({loop: false})
.add({
translateX: [80,0],
translateZ: 0,
opacity: [0,1],
easing: "easeOutExpo",
duration: 1400,
delay: (el, i) => 100 + 40 * i
})
},

function () {
anime.timeline({loop: false})
.add({
translateX: [0,-80],
opacity: [1,0],
easing: "easeInExpo",
duration: 800,
delay: (el, i) => 40 * i
});         
}
);
  
});

console.log("%c HOLA 👽 ",
"color:green; background:black; color:white; padding: 30px; border-radius:3px; font-size:20px; font-family: ");
