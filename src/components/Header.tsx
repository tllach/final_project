import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="flex justify-between items-center w-full h-[80px] bg-[#771777] px-5">
      <div className="flex items-center gap-x-4">
        <div className="text-white">
          <Link to="/">Home</Link>
        </div>
        <div className="text-white">
          <Link to="/about">Sobre Nosotras</Link>
        </div>
        <div className="text-white">
          <Link to="/stories">Historias inspiradoras</Link>
        </div>
      </div>
      <div className="mr-[100px] hidden sm:inline-block">
      </div>
    </header>
  );
}
