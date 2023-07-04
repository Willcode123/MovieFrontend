import { useState } from 'react';
const MovieReviews = ({ favorites }) => {
  const [ratings, setRatings] = useState({});
  const [userInput, setUserInput] = useState('');

  const handleRatingChange = (movieId, rating) => {
    setRatings({ ...ratings, [movieId]: rating });
  };

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div>
      <h1>Movie Reviews</h1>
      {favorites.length > 0 ? (
        <ul>
          {favorites.map((movie) => (
            <li key={movie.imdbID}>
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
              <img src={movie.Poster} alt={movie.Title} />
              <div>
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    onClick={() => handleRatingChange(movie.imdbID, rating)}
                    style={{ backgroundColor: ratings[movie.imdbID] === rating ? 'yellow' : 'transparent' }}
                  >
                    {rating} Star
                  </button>
                ))}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorite movies yet.</p>
      )}
      <div>
        <label htmlFor="userInput">What do you think of the film?</label>
        <textarea id="userInput" value={userInput} onChange={handleUserInput} />
      </div>
    </div>
  );
};

export default MovieReviews;
