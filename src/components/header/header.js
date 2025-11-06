import { NavLink, Link } from "react-router-dom";
import mainLogo from "../../assets/icons/icons8-movieLogo-48.png";
import "./header.scss";

const setActiveLink = ({ isActive }) =>
  isActive ? "menu__nav-link active-link" : "menu__nav-link";

const Header = () => {
  return (
    <header className="menu">
      <div className="menu__container">
        {/* //top nav */}
        <div className="menu__top">
          <NavLink to="/" className="menu__logo">
            <img src={mainLogo} alt="" />
            MovieApp
          </NavLink>
          <nav className="menu__nav">
            <div className="menu__nav-item">
              <NavLink to="/movies" className={setActiveLink}>
                Movies
              </NavLink>
              {/* <div class="menu__nav-dropdown">
                    <a href="#">Now playing</a>
                    <a href="#">Popular</a>
                    <a href="#">Top Rated</a>
                    <a href="#">Upcoming</a>
                  </div> */}
            </div>

            <div className="menu__nav-item">
              <NavLink to="/tvshows" className={setActiveLink}>
                TV Shows
              </NavLink>
              {/*   <div class="menu__nav-dropdown">
                    <a href="#">Airing Today</a>
                    <a href="#">On the air</a>
                    <a href="#">Popular</a>
                    <a href="#">Top Rated</a>
                  </div> */}
            </div>
            <div className="menu__nav-item">
              <NavLink to="/people" className={setActiveLink}>
                People
              </NavLink>
            </div>
          </nav>
        </div>
        {/* // bottom nav */}
        <div className="menu__bottom">
          <div className="menu__bottom-search">
            <input
              type="text"
              id="search-input"
              placeholder="Search by movie title"
            />
            <button id="search-button">
              <Link to="/search">Search</Link></button>
          </div>
          <div className="menu__bottom-nav">
            <NavLink to="/collections" className={setActiveLink}>
              Collections
            </NavLink>
            <NavLink to="/popular" className={setActiveLink}>
              Popular
            </NavLink>
            <NavLink to="/toprated" className={setActiveLink}>
              Top rated
            </NavLink>
            <NavLink to="#" className={setActiveLink}></NavLink>
            <NavLink to="#" className={setActiveLink}></NavLink>
            <NavLink to="#" className={setActiveLink}></NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
