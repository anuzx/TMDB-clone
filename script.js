// Sample movie data
const movies = [
    {
        id: 1,
        title: "The Shawshank Redemption",
        poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/wPU78OPN4BYEgWYdXyg0phMee64.jpg",
        rating: 8.7,
        year: "1994",
        duration: "2h 22m",
        overview: "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
        genres: ["Drama", "Crime"]
    },
    {
        id: 2,
        title: "The Godfather",
        poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg",
        rating: 8.7,
        year: "1972",
        duration: "2h 55m",
        overview: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
        genres: ["Drama", "Crime"]
    },
    {
        id: 3,
        title: "The Dark Knight",
        poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/nMKdUUepR0i5zn0y1T4CsSB5chy.jpg",
        rating: 8.5,
        year: "2008",
        duration: "2h 32m",
        overview: "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
        genres: ["Action", "Crime", "Drama", "Thriller"]
    },
    {
        id: 4,
        title: "Pulp Fiction",
        poster: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/9rZg1J6vMQoDVSgRyWcpJa8IAGy.jpg",
        rating: 8.5,
        year: "1994",
        duration: "2h 34m",
        overview: "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
        genres: ["Thriller", "Crime"]
    },
    {
        id: 5,
        title: "Fight Club",
        poster: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
        rating: 8.4,
        year: "1999",
        duration: "2h 19m",
        overview: "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
        genres: ["Drama"]
    },
    {
        id: 6,
        title: "Inception",
        poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
        rating: 8.4,
        year: "2010",
        duration: "2h 28m",
        overview: "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.",
        genres: ["Action", "Adventure", "Science Fiction", "Thriller"]
    },
    {
        id: 7,
        title: "The Matrix",
        poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/hv7o3VgfsairBoQFAawgaQ4cR1m.jpg",
        rating: 8.2,
        year: "1999",
        duration: "2h 16m",
        overview: "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
        genres: ["Action", "Science Fiction"]
    },
    {
        id: 8,
        title: "Parasite",
        poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg",
        rating: 8.5,
        year: "2019",
        duration: "2h 12m",
        overview: "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
        genres: ["Comedy", "Drama", "Thriller"]
    },
    {
        id: 9,
        title: "Interstellar",
        poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/xJHokMbljvjADYdit5fK5VQsXEG.jpg",
        rating: 8.4,
        year: "2014",
        duration: "2h 49m",
        overview: "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
        genres: ["Adventure", "Drama", "Science Fiction"]
    },
    {
        id: 10,
        title: "The Lord of the Rings: The Fellowship of the Ring",
        poster: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/aw4FOsWr2FY373nKSxbpNi3fz4F.jpg",
        rating: 8.4,
        year: "2001",
        duration: "2h 58m",
        overview: "Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed.",
        genres: ["Adventure", "Fantasy", "Action"]
    },
    {
        id: 11,
        title: "Forrest Gump",
        poster: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/xwJgB7Qm2D3cjPbFQEH4ebYhq3S.jpg",
        rating: 8.5,
        year: "1994",
        duration: "2h 22m",
        overview: "A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.",
        genres: ["Comedy", "Drama", "Romance"]
    },
    {
        id: 12,
        title: "The Silence of the Lambs",
        poster: "https://image.tmdb.org/t/p/w500/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/mfwq2nMBzArzQ7Y9RKE8SKeeTkg.jpg",
        rating: 8.3,
        year: "1991",
        duration: "1h 58m",
        overview: "Clarice Starling is a top student at the FBI's training academy. Jack Crawford wants Clarice to interview Dr. Hannibal Lecter, a brilliant psychiatrist who is also a violent psychopath, serving life behind bars for various acts of murder and cannibalism. Crawford believes that Lecter may have insight into a case and that Starling, as an attractive young woman, may be just the bait to draw him out.",
        genres: ["Crime", "Thriller", "Horror"]
    }
];

// Shuffle movies for different sections
const popularMovies = [...movies].sort(() => 0.5 - Math.random()).slice(0, 8);
const topRatedMovies = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 8);
const nowPlayingMovies = [...movies].sort(() => 0.5 - Math.random()).slice(0, 8);

// Render movies to DOM
function renderMovies(movies, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    movies.forEach(movie => {
        const movieEl = document.createElement('div');
        movieEl.className = 'movie-card animate__animated animate__fadeIn';
        movieEl.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
            <div class="movie-rating ${getRatingClass(movie.rating)}">
                <i class="fas fa-star"></i> ${movie.rating.toFixed(1)}
            </div>
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <p class="movie-date">${movie.year}</p>
            </div>
        `;
        movieEl.addEventListener('click', () => openModal(movie));
        container.appendChild(movieEl);
    });
}

// Get rating class based on score
function getRatingClass(rating) {
    if (rating >= 8) return 'rating-high';
    if (rating >= 6) return 'rating-medium';
    return 'rating-low';
}

// Open modal with movie details
function openModal(movie) {
    const modal = document.getElementById('movieModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <img src="${movie.backdrop}" alt="${movie.title}" class="modal-poster">
        <div class="modal-details">
            <h2 class="modal-title">${movie.title} <span>(${movie.year})</span></h2>
            <div class="modal-meta">
                <span>${movie.duration}</span>
                <span>|</span>
                <div class="modal-rating ${getRatingClass(movie.rating)}">
                    <i class="fas fa-star"></i> ${movie.rating.toFixed(1)}
                </div>
            </div>
            <div class="modal-genres">
                ${movie.genres.map(genre => `<span class="genre">${genre}</span>`).join('')}
            </div>
            <h3>Overview</h3>
            <p class="modal-overview">${movie.overview}</p>
            <button class="btn btn-primary">
                <i class="fas fa-play"></i> Watch Trailer
            </button>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('movieModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const icon = document.querySelector('#themeToggle i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('darkMode', 'disabled');
    }
}

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    const icon = document.querySelector('#themeToggle i');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
}

// Event listeners
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('themeToggle').addEventListener('click', toggleDarkMode);
document.getElementById('movieModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('movieModal')) {
        closeModal();
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderMovies(popularMovies, 'popularMovies');
    renderMovies(topRatedMovies, 'topRatedMovies');
    renderMovies(nowPlayingMovies, 'nowPlayingMovies');
});

document.querySelector('.search-bar').addEventListener('blur', function() {
    this.style.width = '100%'; // Maintain width when losing focus
});