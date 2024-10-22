import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="flex justify-between items-center w-full h-[80px] bg-[#330053] border-b px-[50px]">
      <div className="flex items-center gap-x-4">
        <div className="text-white">
          <Link to="/">Home</Link>
        </div>
        <div className="text-white">
          <Link to="/about">Sobre Nosotras</Link>
        </div>
        <div className="text-white">
          <Link to="/history">Historias inspiradoras</Link>
        </div>
      </div>
      <div className="mr-[100px] hidden sm:inline-block">
      </div>
    </header>
  );
}
