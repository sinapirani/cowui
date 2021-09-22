let body = document
let off = document.getElementById('off')

body.addEventListener('mousemove',(e)=>{
    off.textContent = e.screenX
})