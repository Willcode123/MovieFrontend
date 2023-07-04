import { useState } from 'react';
import axios from 'axios';
import FavouritesMovies from '../pages/FavouritesMovies';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movie, setMovie] = useState(null);
  const [favourites, setFavourites] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://www.omdbapi.com/?s=${searchQuery}&apikey=d10a77f1`);
      const data = response.data;
      if (data && data.Search && data.Search.length > 0) {
        setMovie(data.Search);
      } else {
        setMovie(null);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddToFavourites = (result) => {
    const isMovieInFavourites = favourites.some((fav) => fav.imdbID === result.imdbID);
    if (!isMovieInFavourites) {
      setFavourites([...favourites, result]);
      console.log('Movie added to favourites:', result);
    } else {
      console.log('The movie is already in favourites:', result);
    }
  };

  return (
    <div>
      <h1>Home</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {movie && (
        <div>
          {movie.map((result) => (
            <div key={result.imdbID}>
              <h2>{result.Title}</h2>
              <p>{result.Year}</p>
              <img src={result.Poster} alt={result.Title} />
              <button onClick={() => handleAddToFavourites(result)}>Add to Favourites</button>
            </div>
          ))}
        </div>
      )}
      {favourites.length > 0 && <FavouritesMovies favourites={favourites} />}
    </div>
  );
};

export default HomePage;
