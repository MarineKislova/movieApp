import  { Component } from "react";
import "./movieCard.scss";

class MovieCard extends Component {
  render() {
    const {
      id,
      name,
      original_name,
      title,
      first_air_date,
      release_date,
      media_type,
      overview,
      poster_path,
      vote_average,
      vote_count,
      genres,
      loading,
    } = this.props.data;

    const titleCard = title ? title : name;
    const poster = `https://image.tmdb.org/t/p/w500${poster_path}`;

    const tvShow = "📺 TV Show";
    const movie = "🎬 Movie";
    const movieIcon = media_type === "movie" ? movie : tvShow;
    const bgClass = media_type === "tv" ? "#DF565A" : "#67AECD";
    const date = release_date ? release_date : first_air_date;

    let link = "#";
    if (media_type === "tv") {
      link = `https://www.themoviedb.org/tv/${id}`;
    } else if (media_type === "movie") {
      link = `https://www.themoviedb.org/movie/${id}`;
    } else if (name || original_name) {
      link = `https://www.themoviedb.org/tv/${id}`;
    } else {
      link = `https://www.themoviedb.org/movie/${id}`;
    }
    return (
      <>
        <div className="movie-card">
          <div className="movie-card__poster">
            <img src={poster} alt={titleCard} className="movie-card__img" />
            <div className="movie-card__overview">
              ℹ
              <div className="movie-card__tooltip">
                <div className="movie-card__tooltip-content">
                  <p className="movie-card__tooltip-title">{titleCard}</p>
                  <p
                    className="movie-card__tooltip-icon"
                    style={{ backgroundColor: bgClass }}
                  >
                    {movieIcon}
                  </p>
                  <p className="movie-card__tooltip-overview">{overview}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="movie-card__title">{titleCard}</div>
          <div className="movie-card__info">
            <p>⭐ {vote_average.toFixed(1)}</p>
            <div
              className="movie-card__movie-icon"
              style={{ backgroundColor: bgClass }}
            >
              {movieIcon}
            </div>
          </div>
          <div className="movie-card__release-date">
            <span>Release date: </span>
            {new Date(date).toLocaleDateString("ru-RU", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })}
          </div>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="movie-card__watch-link"
          >
            Watch on TMDB
          </a>
        </div>
      </>
    );
  }
}

export default MovieCard;
