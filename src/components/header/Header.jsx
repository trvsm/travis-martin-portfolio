import "./header.scss";

export default function Header() {
  return (
    <div className="nav">
      <section class="nav">
        <div className="nav__logo">Travis Martin</div>
        <input id="menu-toggle" type="checkbox" />
        <label class="menu-button-container" for="menu-toggle">
          <div class="menu-button"></div>
        </label>
        <ul class="menu">
          <li className="nav__link">Home</li>
          <li className="nav__link">About</li>
          <li className="nav__link">Projects</li>
          <li className="nav__link">Blog</li>
        </ul>
      </section>
      <a className="nav__link" href="#">
        <div className="nav__logo">Travis Martin</div>
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
