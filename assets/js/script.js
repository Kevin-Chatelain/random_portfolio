console.log("jrjrj")

window.addEventListener('wheel', () => {
    document.querySelector('.main').classList.add('up');
    if(document.querySelector('.main').classList.contains('up')) 
        window.removeEventListener('wheel', ()=>{})
})