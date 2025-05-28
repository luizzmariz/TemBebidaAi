const cleanCartButton = document.getElementById('clean-cart-btn');


cleanCartButton.addEventListener('click', () => {
    localStorage.removeItem('carrinho');
    location.reload();
})

