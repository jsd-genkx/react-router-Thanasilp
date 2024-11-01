import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="bg-stone-200">
      <nav>
        <ul className="flex justify-around p-2">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/homepage">Home Page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
