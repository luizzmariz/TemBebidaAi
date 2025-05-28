let sessionToken;

let placeInfo = {
  title: '',
  desc: ''
};


function limparTexto(texto) {
  return texto
    .replace(/Brazil|Brasil/gi, '')
    .replace(/State of/gi, '')
    .replace(/\s{2,}/g, ' ')
    .replace(/^\s+|\s+$/g, '')
    .replace(/^,|,$/g, '')
    .trim();
}


async function onInputChange(event) {
  const inputValue = event.target.value.trim();
  const suggestionsEl = document.getElementById('suggestions');
  const template = suggestionsEl.querySelector('template');

  suggestionsEl.querySelectorAll('.suggestion-block').forEach(el => el.remove());

  if (inputValue.length < 3) {
    return;
  }

  if (!sessionToken) {
    sessionToken = new google.maps.places.AutocompleteSessionToken();
  }

  try {
    const { suggestions } = await google.maps.places.AutocompleteSuggestion.fetchAutocompleteSuggestions({
      input: inputValue,
      sessionToken: sessionToken,
    });

    if (suggestions.length === 0) return;

    suggestions
      .slice(0, 5) 
      .forEach(suggestion => {
        const placePrediction = suggestion.placePrediction;
        const fullText = placePrediction.text.text + (placePrediction.text.secondaryText ? ' - ' + placePrediction.text.secondaryText : '');
        const [titulo, ...resto] = fullText.split(' - ');
        const descricao = resto.join(' - ');

        const clone = template.content.cloneNode(true);

        const titleEl = clone.querySelector('.adress-title');
        const infoEl = clone.querySelector('.adress-info');

        titleEl.textContent = limparTexto(titulo);
        infoEl.textContent = limparTexto(descricao);

        clone.querySelector('.suggestion-block').addEventListener('click', async () => {
          const place = placePrediction.toPlace();
          await place.fetchFields({ fields: ['displayName', 'formattedAddress'] });

          document.getElementById('address-input').value = limparTexto(place.formattedAddress);
          placeInfo.title = document.getElementById('address-input').value;
          suggestionsEl.querySelectorAll('.suggestion-block').forEach(el => el.remove());
        });

        suggestionsEl.appendChild(clone);
      });

  } catch (error) {
    console.error('Erro nas sugestões:', error);
  }
}

function onEnter(event) {
  if (event.key === 'Enter') {
    const inputValue = document.getElementById('address-input').value.trim();

    if (inputValue) {
      const [titulo, ...resto] = inputValue.split(' - ');
      const descricao = resto.join(' - ');

      placeInfo.title = limparTexto(titulo);
      placeInfo.desc = limparTexto(descricao);

      localStorage.setItem('place-information', JSON.stringify(placeInfo));

      document.getElementById('location').textContent = placeInfo.title;
      document.getElementById('location-description').textContent = placeInfo.desc;

      overlay.classList.remove('active');
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('address-input');
  input.addEventListener('input', onInputChange);
  input.addEventListener('keydown', onEnter);

  document.addEventListener('click', (e) => {
    if (!e.target.closest('#address-input') && !e.target.closest('#suggestions')) {
      document.querySelectorAll('.suggestion-block').forEach(el => el.remove());
    }
  });
});
