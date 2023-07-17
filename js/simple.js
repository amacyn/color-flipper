const colors =['lawngreen','red','hotpink','#f15025','rgba(133,122,200)']

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click',function(){

    const randomNumber = getRandomNumber();
     console.log(randomNumber);

    document.body.style.backgroundColor =  colors[randomNumber];
    color.textContent = colors[randomNumber]
 //console.log(document.body);
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
} 