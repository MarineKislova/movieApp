import "./layout.scss";

import { Outlet } from "react-router-dom";
import Home from "../../pages/home/home";
import Header from "../header/header";
// import Movies from "../../pages/movies/movies";
// import TvShows from "../../pages/tvShows/tvShows";
// import People from "../../pages/people/people";
import { Footer } from "../footer/footer";

const Layout = () => {
  return (
    <>
      {/* //header component */}
      <Header />
      <Outlet>
        <Home />
      </Outlet>
      <Footer />
    </>
  );
};

export { Layout };
