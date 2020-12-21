import Large from './Large';
import Small from './Small';
export default function Header() {
  return (
    <nav className="px-10 shadow-sm py-5  sticky top-0 bg-white z-20 md:px-40">
      <Large />
      <Small />
    </nav>
  );
}
