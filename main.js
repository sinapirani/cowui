let body = document
let off = document.getElementById('off')
let title = document.getElementById('title')
let title2 = document.getElementById('title2')
let titleText = ['D', 'o', 'n', "'", 't', ' ', 'B', 'e', ' ', 'L', 'a', 't', 'e', 'I', 'n', 'v', 'e', 's', 't', 'i', 'n', 'g', ' ', 'I', 's', ' ', 'G', 'r', 'e', 'a', 't', 'e']
let text = ''
let counter = -1
let br = document.createElement('br')

let titleInt = setInterval(() => {


    counter += 1
    if(counter <= 12){
        title.textContent += titleText[counter]
        console.log(counter)
    }else if(counter >= 11 && counter < titleText.length){
        title2.textContent += titleText[counter]
    }

},70);