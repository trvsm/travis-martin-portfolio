import "./header.scss";

export default function Header() {
  return (
    <div className="nav">
      <section className="nav">
        <div className="nav__logo">Travis Martin</div>
        <input id="menu-toggle" type="checkbox" />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button"></div>
        </label>
        <ul className="menu">
          <li className="nav__link">Home</li>
          <li className="nav__link">About</li>
          <li className="nav__link">Projects</li>
          <li className="nav__link">Blog</li>
        </ul>
      </section>
      <a className="nav__link" href="#">
        <div className="nav__logo"></div>
      </a>
      <ul className="nav__links">
        <li className="nav__link">Home</li>
        <li className="nav__link">About</li>
        <li className="nav__link">Projects</li>
        <li className="nav__link">Blog</li>
      </ul>
    </div>
  );
}
