const screenWidth = window.screen.width;

document.querySelector('.ship_button').onclick = function(){
  document.querySelector('.ship_button').innerText = '';
  anime({
    targets:'.ship_button',
    borderRadius: ['40px 40px 40px 40px', '10px 10px 50% 50%'],
  });
  anime({
    targets:'#mast',
    translateX:170, 
    translateY:48,
    rotateZ:0,
  });
  setTimeout(sail, 1600);
};

function sail(){
  document.querySelector('.ship_button').innerText = 'bon voyage';
  anime({
    targets:'#sail-1',
    translateX:16,
  });
  anime({
    targets:'#sail-2',
    translateX:-104,
    translateY:-145,
    scaleY:1
  });
  setTimeout(sailaway, 1600);
}

function sailaway(){
  anime({
    targets:'.return_ship',
    opacity:1,
  });
  anime({
    targets:'.stop',
    opacity:1,
  });
}



var sailAwayAnimation = anime({
  targets:'#container_ship',
  delay: function(el, i) { return i * 100; },
  translateX: screenWidth + 150,
  autoplay: false,
});


let goStraight = true;
document.querySelector('.return_ship').addEventListener('click', function(){
  if(goStraight)sailAwayAnimation.play(); else {
    document.querySelector('.ship_button').innerText = 'hi everyone';
    anime({
      targets:'#container_ship',
      translateX: 0
    });
  }
  goStraight = !goStraight;
});

document.querySelector('.stop').onclick = function(){
  
  document.querySelectorAll('.cloud_anim').forEach(element => {
    element.style.animationPlayState = "paused";
  });
  console.log('asd');
};