document.querySelector('#alert').addEventListener('click', function() {
  alert('Hello World! ');
});

document.querySelector('#Upper').addEventListener('click', function(){
  document.getElementById('Write').style.textTransform = 'uppercase';

});

document.querySelector('#Lower').addEventListener('click', function(){
  document.getElementById('Write').style.textTransform = 'lowercase';

});

document.querySelector('#First_Upp').addEventListener('click', function(){
  document.getElementById('Write').style.textTransform = 'capitalize';

});

document.querySelector('#First_Low').addEventListener('click', function(){
  document.getElementById('Write').style.textTransform = '';

});


document.querySelector('#Block').addEventListener('click', function(){
  document.getElementById('Write1').disabled = true;

});

document.querySelector('#Unblock').addEventListener('click', function(){
  document.getElementById('Write1').disabled = false;

});


document.querySelector('#Cursor1').addEventListener('click', function(){
  document.body.style.cursor = 'pointer';

});

document.querySelector('#Cursor2').addEventListener('click', function(){
  document.body.style.cursor = 'help';

});


document.querySelector('#Cursor3').addEventListener('click', function(){
  document.body.style.cursor = 'move';

});


document.querySelector('#Green').addEventListener('click', function(){
  document.getElementById('changes').style.color = 'green';

});

document.querySelector('#Red').addEventListener('click', function(){
  document.getElementById('changes').style.color = 'red';

});

document.querySelector('#Pink').addEventListener('click', function(){
  document.getElementById('changes').style.color = 'pink';

});

document.querySelector('#Black').addEventListener('click', function(){
  document.getElementById('changes').style.border = 'thick solid black';

});

document.querySelector('#Blue').addEventListener('click', function(){
  document.getElementById('changes').style.border = 'thick solid #0400ff';

});

document.querySelector('#Light_blue').addEventListener('click', function(){
  document.getElementById('changes').style.border = 'thick solid #00fffb';

});

document.querySelector('#Reset_all').addEventListener('click', function(){
  document.getElementById('changes').style.border = 'none';
  document.getElementById('changes').style.color = 'inherit';
  document.body.style.cursor = 'auto';
});


let image = document.getElementById("picture");

image.addEventListener('mouseover', function(){
  image.src = "https://i.imgur.com/PLDVxza.jpg"
})
image.addEventListener('mouseout', function(){
  image.src = "https://i.imgur.com/0DElr0H.jpg"
})

