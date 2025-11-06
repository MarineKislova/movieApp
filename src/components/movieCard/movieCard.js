import React, { Component } from "react";
import Tooltip from "../movieTooltip/movieTooltip";
import "./movieCard.scss";

class MovieCard extends Component {
  state = {
    tooltipOpen: false,
  };

  cardRef = React.createRef();
  toggleTooltip = () => {
    const rect = this.cardRef.current.getBoundingClientRect();

    this.setState((prev) => ({
      tooltipOpen: !prev.tooltipOpen,
      tooltipPos: {
        top: rect.top + window.scrollY, // корректная вертикаль
        left: rect.right + window.scrollX, // справа от карточки
      },
    }));
    console.log("toggled");
  };

  closeTooltip = () => this.setState({ tooltipOpen: false });
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
    const { tooltipOpen, tooltipPos } = this.state;

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
            <p
              className="movie-card__overview"
              onClick={this.toggleTooltip}
              ref={this.cardRef}
            >
              ℹ
            </p>
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

        <Tooltip open={tooltipOpen} position={tooltipPos}>
          <div className="tooltip__tooltip-top">
            <p
              className="tooltip__tooltip-icon"
              style={{ backgroundColor: bgClass }}
            >
              {movieIcon}
            </p>
            <p className="tooltip__tooltip-close" onClick={this.closeTooltip}>
              &times;
            </p>
          </div>
          <p className="tooltip__tooltip-title">{titleCard}</p>
          <p className="tooltip__tooltip-overview">{overview}</p>
          <p>Vote count: {vote_count}</p>
        </Tooltip>
      </>
    );
  }
}

export default MovieCard;
