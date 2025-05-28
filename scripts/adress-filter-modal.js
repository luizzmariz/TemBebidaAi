const mapBlock = document.getElementById('map');
const overlay = document.getElementById('overlay');
const backIcon = document.getElementById('back-icon');

mapBlock.addEventListener('click', () => {  
    overlay.classList.add('active');
});

backIcon.addEventListener('click', () => {
    overlay.classList.remove('active');
});


