import { Component } from "react";
import { Routes, Route } from "react-router-dom";
//services
import { GenresService } from "../../services/TMDBService";
//pages
import Home from "../../pages/home/home";
import Movies from "../../pages/movies/movies";
import TvShows from "../../pages/tvShows/tvShows";
import People from "../../pages/people/people";
import Collections from "../../pages/collections/collections";
import Popular from "../../pages/popular/popular";
import TopRated from "../../pages/topRated/topRated";
import Search from "../../pages/search/search";
//components
import { Layout } from "../../components/layout/layout";
//images

class App extends Component {
  state = {
    genres: [],
    loading: true,
  };
  tmdbGenresService = new GenresService();
  componentDidMount() {
    this.tmdbGenresService
      .getGenresMovies()
      .then((data) => {
        this.setState({ genres: data.genres, loading: false });
      })
      .catch((error) => console.error(error));
    console.log(this.state.genres);
  }
  render() {
    // Fetch genres from API on app load
    return (
      <div className="App">
        <>
          {/* //routes */}
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="movies" element={<Movies />} />
              <Route path="tvshows" element={<TvShows />} />
              <Route path="people" element={<People />} />
              <Route path="search" element={<Search />} />
              <Route path="collections" element={<Collections />} />
              <Route path="popular" element={<Popular />} />
              <Route path="toprated" element={<TopRated />} />
            </Route>
          </Routes>
        </>
      </div>
    );
  }
}

export default App;
