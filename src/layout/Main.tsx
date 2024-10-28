import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex flex-col min-h-screen font-serif">
        <Header />
        <main className="flex-grow text-2xl bg-[#ffffff] text-[#333333]">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};
