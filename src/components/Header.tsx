import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="fixed flex justify-between w-full h-[80px] bg-[#2a0046] z-10 shadow-lg">
      <div className="flex items-center">
        <img
          src="src/assets/logo.png"
          alt="Logo de Ciencia Heredada"
          className="ml-5 size-16 rounded-full"
        />
      </div>
      <div className="flex items-center gap-x-4 font-bold font-sans">
        <div className="text-white">
          <Link to="/">Home</Link>
        </div>
        <div className="text-white">
          <Link to="/salonfama">Salon de la Fama</Link>
        </div>
        <div className="text-white">
          <Link to="/resources">Recursos</Link>
        </div>
        <div className="text-white">
          <Link to="/about">Sobre Nosotras</Link>
        </div>
        <div className="text-white">
          <Link to="/calculator">Calculadora</Link>
        </div>
      </div>
      <div className="mr-[100px] hidden sm:inline-block"></div>
    </header>
  );
}
