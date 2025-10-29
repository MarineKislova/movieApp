import { Routes, Route } from "react-router-dom";
import "./App.css";
//pages
import Home from "../../pages/home/home";
import Movies from "../../pages/movies/movies";
import TvShows from "../../pages/tvShows/tvShows";
import People from "../../pages/people/people";
//components
import { Layout } from "../../components/layout/layout";
//images

function App() {
  return (
    
    <div className="App">
      <>
        {/* //routes */}
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="tvshows" element={<TvShows />} />
            <Route path="people" element={<People />} />
          </Route>
        </Routes>
      </>
    </div>
  );
}

export default App;
