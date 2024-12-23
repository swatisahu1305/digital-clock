
const box=document.querySelector(".box")

setInterval(() => {
    let date=new Date().toLocaleTimeString()
    box.textContent=date;
}, 1000);