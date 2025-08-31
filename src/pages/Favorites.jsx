import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../Components/MovieCard";

function Favorite() {
    const { favorites } = useMovieContext();
    if(favorites) {
        return (
          <div className="favorites">
            <h2> Your Favorites </h2>
            <div className="movies-grid">
              {favorites.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
              ))}
            </div>
          </div>
        );
    }
}
export default Favorite