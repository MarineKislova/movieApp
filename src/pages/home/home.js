import "./home.scss";

/* const home = () => {
    return(
    // code for home page goes here
    )
} */

function Home() {
    return (
        <div className="trending">
          <div className="trending__container">
            <div className="trending__content">
              <h2 className="trending__title">Trending Now</h2>
              {/* <!-- trending movies will be inserted here --> */}
              <div className="trending__tabs">
                <button className="trending__tab-btn active" data-tab="allTrending">
                  All
                </button>
                <button className="trending__tab-btn" data-tab="moviesTrending">
                  Movies
                </button>
                <button className="trending__tab-btn" data-tab="tvShowsTrending">
                  TV Shows
                </button>
              </div>
              <div className="trending__tab-content">
                <div className="trending__cards" id="allTrending">1</div>
                <div className="trending__cards" id="moviesTrending">2</div>
                <div className="trending__cards" id="tvShowsTrending">3</div>
              </div>
              <div className="pagination">
                <a className="pagination__prev" href="#">&laquo;</a>
                <div className="pagination__pages">

                </div>
                <a className="pagination__next" href="#">&raquo;</a>
              </div>
        
            </div>
          </div>
        </div>
    );
}
export default Home;
