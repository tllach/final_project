import {Main} from '../../layout/Main';
import Facts from './facts';

export function Home() {
    return (
        <Main>
            <div className="min-h-screen">
                {/* Introducción de la idea */}
                <div className="grid md:grid-cols-2 gap-8 py-16 px-8 bg-[#ffffff] rounded-lg shadow-lg">
                    <section className="self-center">
                        <h1 className="text-5xl font-extrabold text-[#00008B] mb-6 tracking-tight leading-snug">
                        Bienvenidas!
                        </h1>
                        <div className="text-lg max-w-4xl text-gray-700 mx-4 space-y-4">
                        <p>
                            En <span className="font-semibold text-[#00008B]">Ciencia Heredada</span>, creemos que el conocimiento es un legado invaluable que trasciende generaciones. A través de nuestra plataforma, buscamos inspirar a jóvenes chicas a seguir carreras en Ciencia, Tecnología, Ingeniería y Matemáticas (STEM), conectándolas con historias de mujeres extraordinarias que han marcado el camino.
                        </p>
                        <p>
                            Nuestro objetivo es ayudar a cerrar la brecha de género en estos campos, construyendo un futuro donde más mujeres dejen su huella en el mundo de la ciencia.
                        </p>
                        </div>
                    </section>
                    <div className="flex justify-center">
                        <img
                        src="src/assets/chicasciencia.png"
                        alt="Mujer con un telescopio"
                        className="transform hover:scale-105 transition duration-300 ease-in-out"
                        />
                    </div>
                </div>
                {/* Sección de estadísticas */}
                <Facts />
            </div>
        </Main>
    );
}
