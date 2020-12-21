import { Link } from "react-router-dom";
import { CustomButton } from "../../components";
import { RoutePattern } from "../../routes/RoutePattern";
export default function Header() {
  return (
    <nav className="flex flex-row justify-between items-center shadow-sm py-5 px-40 sticky top-0 bg-white z-20">
      <div>
        <p className="text-2xl font-light">
          Kev<span className="logo">iN</span>
        </p>
      </div>
      <ul className="flex flex-row gap-10 items-center">
        <li>
          <Link to={RoutePattern.Home}>Home</Link>
        </li>
        <li>
          <Link to={RoutePattern.About}>About</Link>
        </li>
        <li>
          <Link to={RoutePattern.Portfolio}>Portfolio</Link>
        </li>
      </ul>
      <div>
        <CustomButton>Résumé</CustomButton>
      </div>
    </nav>
  );
}
