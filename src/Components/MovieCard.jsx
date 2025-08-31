import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
  const { addToFavorites, removeFavorites, isFavorite } = useMovieContext();
  const favorite = isFavorite(movie.id);
  function onFavoriteClick(e) {
    e.preventDefault();
    if (favorite) removeFavorites(movie.id);
    else addToFavorites(movie);
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.url} alt={""} />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavoriteClick}
          >
            ❤️
          </button>
        </div>
        <div className="movie-info">
          <h3> {movie.originalTitle}</h3>
          <p> {movie.id}</p>
        </div>
      </div>
    </div>
  );
}
export default MovieCard;
