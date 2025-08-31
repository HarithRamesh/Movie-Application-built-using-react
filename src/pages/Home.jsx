import { useEffect, useState } from "react";
import MovieCard from "../Components/MovieCard";
import "../css/Home.css";
import { getMovies } from "../services/api";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAlbums = async () => {
      try {
        const ourMovies = await getMovies(); 
        setMovies(ourMovies.data.filter(movie => movie.url!=null));
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    loadAlbums();
  }, []);

  const handleSearch = async(e) => {
    e.preventDefault();
    if(!searchQuery.trim()) return
    if (loading) return
    setLoading(true);
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search movie..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map(
          (movie) =>
            movie.originalTitle.toLowerCase().startsWith(searchQuery) && (
              <MovieCard movie={movie} key={movie.id} />
            )
        )}
      </div>
    </div>
  );
}
export default Home;
