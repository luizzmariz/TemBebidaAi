function addUnits(){
    const un = document.getElementById('units');
    if(un.innerText >= 0){
        un.innerText++;
    }   
    updateCartPrices();
    
}

function removeUnits(){
    const un = document.getElementById('units');
    if(un.innerText > 0){
        un.innerText--;
    }   
    updateCartPrices();
}

function updateCartPrices(){
    const itemBlocks = document.querySelectorAll('.cart-item-block');
    let subtotal = 0;
    let totalItems = 0;
    const frete = 4.99;

  itemBlocks.forEach(block => {
    const price = parseFloat(block.querySelector('#price').textContent.replace('R$', '').trim());
    const units = parseInt(block.querySelector('#units').textContent);
    subtotal += price * units;
    totalItems += units;
  });

  document.getElementById('subtotal-price').textContent = `R$ ${subtotal.toFixed(2)}`;
  document.getElementById('shipping-price').textContent = `R$ ${frete.toFixed(2)}`;
  document.getElementById('total-price').textContent = `R$ ${(subtotal + frete).toFixed(2)}`;
  document.getElementById('items-qnt').textContent = `(${totalItems} itens)`;
}

function updateValuesCart() {
  const carrinhoString = localStorage.getItem('carrinho');

  const subtotalElement = document.getElementById('subtotal-price');
  const totalElement = document.getElementById('total-price');
  const itensQntElement = document.getElementById('items-qnt');

  const frete = 4.99;
  let subtotal = 0;
  let totalItens = 0;

  if (carrinhoString) {
    const carrinho = JSON.parse(carrinhoString);

    carrinho.forEach(item => {
      subtotal += item.preco;
      totalItens += 1;
    });

    const total = subtotal + frete;

    subtotalElement.textContent = `R$ ${subtotal.toFixed(2)}`;
    totalElement.textContent = `R$ ${total.toFixed(2)}`;
    itensQntElement.textContent = `(${totalItens} itens)`;

  } else {
    subtotalElement.textContent = `R$ 0.00`;
    totalElement.textContent = `R$ ${frete.toFixed(2)}`;
    itensQntElement.textContent = `(0 itens)`;
  }
}
