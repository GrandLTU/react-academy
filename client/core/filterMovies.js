
export default movies => movies.filter(movie => movie.backdrop_path && movie.vote_count);
