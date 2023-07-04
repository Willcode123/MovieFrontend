import { useState } from 'react';

const FavouritesMovies = ({ favourites: initialFavourites }) => {
  const [favourites, setFavourites] = useState(initialFavourites);

  const handleDelete = (movieId) => {
    const updatedFavourites = favourites.filter((movie) => movie.imdbID !== movieId);
    setFavourites(updatedFavourites);
    console.log('Movie deleted:', movieId);
  };

  return (
    <div>
      <h1>Favourite Movies</h1>
      {favourites.length > 0 ? (
        <ul>
          {favourites.map((movie) => (
            <li key={movie.imdbID}>
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
              <img src={movie.Poster} alt={movie.Title} />
              <button onClick={() => handleDelete(movie.imdbID)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favourite movies yet.</p>
      )}
    </div>
  );
};

export default FavouritesMovies;
