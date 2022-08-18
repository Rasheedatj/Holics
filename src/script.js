const btn = document.getElementById('hamburger')
const nav = document.getElementById('ham_menu')

btn.addEventListener('click', () =>{
    btn.classList.toggle('open');
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})