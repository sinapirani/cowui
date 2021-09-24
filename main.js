let body = document
let off = document.getElementById('off')
let title = document.getElementById('title')
let title2 = document.getElementById('title2')
let titleText = ['D', 'o', 'n', "'", 't', ' ', 'B', 'e', ' ', 'L', 'a', 't', 'e', 'I', 'n', 'v', 'e', 's', 't', 'i', 'n', 'g', ' ', 'I', 's', ' ', 'G', 'r', 'e', 'a', 't', 'e']
let text = ''
let counter = -1
let test1 = document.getElementById('test1')
let test2 = document.getElementById('test2')
let speed = document.getElementById('speed')
let donbal = document.getElementById('donbal')
let current = document.getElementById('current')



let titleInt = setInterval(() => {
    counter += 1
    if(counter <= 12){
        title.textContent += titleText[counter]
        console.log(counter)
    }else if(counter >= 11 && counter < titleText.length){
        title2.textContent += titleText[counter]
    }
},70);


let lastmousex =1
let lastmousey =  1
let mousetravel = 0

body.addEventListener('mousemove',(e)=>{

    test1.textContent = `X: ${e.pageX}`
    test2.textContent = `Y: ${e.pageY}`
    donbal.style.left = e.pageX - 11.5 + 'px'
    donbal.style.top = e.pageY + -13 + 'px'
    })

let currentx = donbal.style.left
alert(donbal.style.left)