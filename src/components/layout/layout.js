import { Link, Outlet } from "react-router-dom";
import { Footer } from "../footer/footer";
import mainLogo from "../../assets/icons/icons8-movieLogo-48.png";
const Layout = () => {
  return (
    <>
      {/* //header component */}
      <header className="menu">
        <div className="menu__container">
          {/* //top nav */}
          <div className="menu__top">
            <Link to="/" className="menu__logo">
              <img src={mainLogo} alt="" />
              MovieApp
            </Link>
            <nav class="menu__nav">
              <div class="menu__nav-item">
                <Link to="/movies" className="menu__nav-link">
                  Movies
                </Link>
                {/* <div class="menu__nav-dropdown">
                    <a href="#">Now playing</a>
                    <a href="#">Popular</a>
                    <a href="#">Top Rated</a>
                    <a href="#">Upcoming</a>
                  </div> */}
              </div>

              <div class="menu__nav-item">
                <Link to="/tvshows" className="menu__nav-link">
                  TV Shows
                </Link>
                {/*   <div class="menu__nav-dropdown">
                    <a href="#">Airing Today</a>
                    <a href="#">On the air</a>
                    <a href="#">Popular</a>
                    <a href="#">Top Rated</a>
                  </div> */}
              </div>
              <div class="menu__nav-item">
                <Link to="/people" className="menu__nav-link">
                  People
                </Link>
              </div>
            </nav>
          </div>
          {/* // bottom nav */}
          <div class="menu__bottom">
            <div class="menu__bottom-search">
              <input
                type="text"
                id="search-input"
                placeholder="Search by movie title"
              />
              <button id="search-button">Search</button>
            </div>
            <div class="menu__bottom-nav">
              {/* <Link to="/Collections">Collections</Link>
              <Link to="/Popular">Popular</Link>
              <Link to="/Top rated">Top rated</Link>
              <Link to="#"></Link>
              <Link to="#"></Link>
              <Link to="#"></Link> */}
            </div>
          </div>
        </div>
      </header>
      <Outlet/>
      <Footer />
    </>
  );
};

export { Layout };
