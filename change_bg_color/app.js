const btn = document.querySelector('button');
const body = document.querySelector('body');
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple','white','orange','black'];
body.style.backgroundColor = 'gray';
btn.addEventListener('click',function (){
    let color = parseInt(Math.random() * colors.length);
    body.style.backgroundColor = colors[color];
})