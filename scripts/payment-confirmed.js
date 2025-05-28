const pay = document.getElementById('total-pay');

window.addEventListener('load', () => {
    pay.textContent = localStorage.getItem('price-total');
})