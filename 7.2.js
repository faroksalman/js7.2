function findMovieByGenre(movies, genre) {
    let index = 0;
  
    while (index < movies.length) {
      if (movies[index].genres.includes(genre)) {
        return movies[index];
      }
      index++;
    }
  
    return null; // Return null if the genre is not found in any movie
  }
  