import "./header.scss";

export default function Header() {
  return (
    <div className="nav">
      <a href="#">
        <div className="nav__logo">logo</div>
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
