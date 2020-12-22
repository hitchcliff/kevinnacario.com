import { Link } from 'react-router-dom';
import { CustomButton } from '../../components';
import { RoutePattern } from '../../routes/RoutePattern';

export default function Large() {
  return (
    <div className="hidden sm:flex flex-row justify-between items-center">
      <div>
        <Link to={RoutePattern.Home}>
          <p className="text-2xl font-light">
            Kev<span className="logo">iN</span>
          </p>
        </Link>
      </div>
      <ul className="flex flex-row gap-10 items-center">
        <Link to={RoutePattern.Home}>Home</Link>
        <Link to={RoutePattern.About}>About</Link>
        <Link to={RoutePattern.Portfolio}>Portfolio</Link>
      </ul>
      <div>
        <CustomButton>Résumé</CustomButton>
      </div>
    </div>
  );
}
