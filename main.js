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
let textes = document.getElementById('textes')



let titleInt = setInterval(() => {
    counter += 1
    if(counter <= 12){
        title.textContent += titleText[counter]
        console.log(counter)
    }else if(counter >= 11 && counter < titleText.length){
        title2.textContent += titleText[counter]
    }
},70);


body.addEventListener('mousemove',(e)=>{
    donbal.style.left = e.pageX - 11.5 + 'px'
    donbal.style.top = e.pageY + -13 + 'px'
    })

body.addEventListener('wheel',()=>{
    textes.style.animation = 'routate 2s'
})
// let currentx = donbal.style.left
// alert(donbal.style.left)