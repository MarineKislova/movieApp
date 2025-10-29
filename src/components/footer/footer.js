import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div clasNclassNames="footer__left">
          <p className="footer__text">
            This product uses the
            <a
              href="https://www.themoviedb.org/"
              target="_blank"
              rel="noreferrer"
              className="footer__link"
            >
              themoviedb.org
            </a>
            API but is not endorsed or certified by TMDB.
          </p>
        </div>
        <div className="footer__right">
          <p>
            © <span id="year"></span> MovieApp
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
