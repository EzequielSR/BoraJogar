const featuredGames = [
  { title: "Game 1", description: "An exciting adventure game", price: 29.99, image: "https://via.placeholder.com/300x200.png?text=Game+1" },
  { title: "Game 2", description: "A thrilling action game", price: 39.99, image: "https://via.placeholder.com/300x200.png?text=Game+2" },
  { title: "Game 3", description: "An immersive RPG", price: 49.99, image: "https://via.placeholder.com/300x200.png?text=Game+3" },
  { title: "Game 4", description: "A challenging puzzle game", price: 19.99, image: "https://via.placeholder.com/300x200.png?text=Game+4" },
];

const specialOffers = [
  { title: "Game 5", description: "A classic strategy game", price: 9.99, originalPrice: 29.99, image: "https://via.placeholder.com/300x200.png?text=Game+5" },
  { title: "Game 6", description: "A fun party game", price: 14.99, originalPrice: 24.99, image: "https://via.placeholder.com/300x200.png?text=Game+6" },
];

function createGameCard(game, isSpecialOffer = false) {
  const card = document.createElement('div');
  card.className = 'col-md-3 mb-4 ';
  card.innerHTML = `
        <div class="card h-100">
            <img src="${game.image}" class="card-img-top" alt="${game.title}">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${game.title}</h5>
                <p class="card-text">${game.description}</p>
                <div class="mt-auto">
                    ${isSpecialOffer ? `<p class="text-muted"><s>$${game.originalPrice.toFixed(2)}</s></p>` : ''}
                    <p class="card-text"><strong>$${game.price.toFixed(2)}</strong></p>
                    <a href="#" class="btn btn-primary">Add to Cart</a>
                </div>
            </div>
        </div>
    `;
  return card;
}

function populateGames() {
  const featuredGamesContainer = document.getElementById('featured-games');
  featuredGames.forEach(game => {
    featuredGamesContainer.appendChild(createGameCard(game));
  });

  const specialOffersContainer = document.getElementById('special-offers');
  specialOffers.forEach(game => {
    specialOffersContainer.appendChild(createGameCard(game, true));
  });
}

document.addEventListener('DOMContentLoaded', populateGames);

