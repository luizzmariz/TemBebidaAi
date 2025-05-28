const masterCardButton = document.getElementById('master-card-sec');
const visaCardButton = document.getElementById('visa-card-sec');
const cardImage = document.getElementById('card-image');

masterCardButton.addEventListener('click', (event)=> {
   if(event.currentTarget.classList.contains('card-toggled')){
       event.currentTarget.classList.remove('card-toggled');
       return;
    }
    event.currentTarget.classList.add('card-toggled');
    visaCardButton.classList.remove('card-toggled');
    cardImage.src = './images/master-card.png';
});

visaCardButton.addEventListener('click', (event)=> {
    if(event.currentTarget.classList.contains('card-toggled')){
        event.currentTarget.classList.remove('card-toggled');
        return;
    }
    event.currentTarget.classList.add('card-toggled');
    masterCardButton.classList.remove('card-toggled');
    cardImage.src = './images/visa-card.png';
})


