import './footer.scss';

export default function Footer() {

    return (
      <section className="footer">
        Copyright Travis Martin 2023,{" "}
        <a href="https://github.com/trvsm" className="footer__link">
          GitHub
        </a>{" "}
        <a
          href="https://www.linkedin.com/in/travis-j-martin/"
          className="footer__link"
        >LinkedIn</a>
      </section>
    );
}