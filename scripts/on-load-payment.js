window.addEventListener('load', () => {
  const placeInfoString = localStorage.getItem('place-information');

  if (placeInfoString) {
    const placeInfo = JSON.parse(placeInfoString);
    document.getElementById('location').textContent = placeInfo.title;
    document.getElementById('location-description').textContent = placeInfo.desc;
  } else {
    console.log('Nenhuma informação encontrada no localStorage.');
  }
});

const confirmButton = document.getElementById('confirm-btn');

confirmButton.addEventListener('click', ()=> {
  window.location.href = 'payment-confirmed.html';
})