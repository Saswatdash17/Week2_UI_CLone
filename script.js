const navbar = document.getElementById('navbar');
const searchBtn = document.getElementById('searchBtn');
const searchBar = document.getElementById('searchBar');
const closeSearch = document.getElementById('closeSearch');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

searchBtn.addEventListener('click', () => {
  searchBar.classList.toggle('active');
});

closeSearch.addEventListener('click', () => {
  searchBar.classList.remove('active');
});

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

function generateMovies(containerId, category, count) {
  const container = document.getElementById(containerId);
  for (let i = 0; i < count; i++) {
    const movieCard = document.createElement('div');
    movieCard.className = 'movie-card';
    
    const img = document.createElement('img');
    img.src = `https://picsum.photos/seed/${category}${i}/400/600`;
    img.alt = `${category} ${i + 1}`;
    img.loading = 'lazy';
    
    movieCard.appendChild(img);
    container.appendChild(movieCard);
  }
}

generateMovies('trending', 'trending', 20);
generateMovies('popular', 'popular', 20);
generateMovies('rated', 'rated', 20);
generateMovies('action', 'action', 20);
generateMovies('comedy', 'comedy', 20);
generateMovies('horror', 'horror', 20);

document.querySelectorAll('.movie-row').forEach(row => {
  const movies = row.querySelector('.movies');
  const leftBtn = row.querySelector('.scroll-btn.left');
  const rightBtn = row.querySelector('.scroll-btn.right');
  
  leftBtn.addEventListener('click', () => {
    movies.scrollBy({ left: -movies.offsetWidth, behavior: 'smooth' });
  });
  
  rightBtn.addEventListener('click', () => {
    movies.scrollBy({ left: movies.offsetWidth, behavior: 'smooth' });
  });
});