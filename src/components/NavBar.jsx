import "./NavBar.css";
import Logo from "../assets/company-logo.jpg";
import Instagram from "../assets/instagram-logo.png";
import X from "../assets/x-logo.png";

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={Logo} alt="Company Logo" width={200} height={150} />
      </div>
      <ul className="nav-links">
        <li><a href="/Blog">Blog</a></li>
        <li><a href="/About">About</a></li>
        <li>
          <a href="https://www.instagram.com">
            <img src={Instagram} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com">
            <img src={X} alt="X" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
 
export default NavBar;
