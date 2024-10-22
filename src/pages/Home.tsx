import {Main} from '../layout/Main';

export function Home() {
    return (
        <Main>
            <div className="min-h-screen bg-gray-100 p-8">
          {/* Introducción de la idea */}
            <section className="text-center mb-12">
                <h1 className="text-4xl font-bold text-purple-700 mb-7">Bienvenidxs a Ciencia Herada</h1>
                <section className="text-lg text-gray-700 max-w-5xl max-w- mx-auto text-left">
                    <p>
                        En Ciencia Heredada, creemos que el conocimiento es un legado invaluable que trasciende generaciones. 
                        A través de nuestra plataforma, buscamos inspirar a jóvenes chicas a seguir carreras en Ciencia, Tecnología, Ingeniería y Matemáticas (STEM), 
                        conectándolas con historias de mujeres extraordinarias que han marcado el camino.
                    </p>
                    <p>
                    Este espacio está dedicado a mostrar cómo la pasión por la ciencia y la innovación se hereda y evoluciona, 
                    creando oportunidades para las futuras generaciones. 
                    </p>
                    <p>
                    Nuestro objetivo es ayudar a cerrar la brecha de género en estos campos, construyendo un futuro donde más mujeres dejen su huella en el mundo de la ciencia.
                    </p>
                </section>
            </section> 
          {/* Sección de estadísticas */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Datos que Importan</h2>
                <section className="text-lg text-gray-700 mb-6">
                    <p>
                        Las mujeres han sido pioneras en la ciencia y la tecnología a lo largo de la historia. Sin embargo, 
                        la representación femenina en las disciplinas STEM sigue siendo baja en la actualidad. 
                    </p>
                    <p>
                    En esta sección, encontrarás estadísticas clave sobre la participación de las mujeres en carreras STEM. 
                    Estos datos no solo revelan la situación actual, sino que también subrayan la importancia de seguir impulsando cambios. 
                    </p>
                    <p>
                    A través del análisis de estas cifras, queremos inspirar y motivar a más jóvenes a unirse a este movimiento, mientras trabajamos juntos para reducir la brecha de género en ciencia y tecnología.
                    </p>
                </section>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <div className="border-2 border-purple-600 p-6 rounded-lg bg-white shadow-lg">
                        <h3 className="text-3xl font-bold text-purple-600 mb-2">Carreras</h3>
                        <p className="text-gray-600">
                        Solo el 30% de las mujeres eligen carreras relacionadas con STEM.
                        </p>
                    </div>
                    <div className="border-2 border-purple-600 p-6 rounded-lg bg-white shadow-lg">
                        <h3 className="text-3xl font-bold text-purple-600 mb-2">En investigación</h3>
                        <p className="text-gray-600">
                        Solo el 14% de los investigadores en ciencias son mujeres en Latinoamérica.
                        </p>
                    </div>
                    <div className="border-2 border-purple-600 p-6 rounded-lg bg-white shadow-lg">
                        <h3 className="text-3xl font-bold text-purple-600 mb-2">2 de cada 5</h3>
                        <p className="text-gray-600">
                        De cada 5 estudiantes en tecnología, solo 2 son mujeres.
                        </p>
                    </div>
                    <div className="border-2 border-purple-600 p-6 rounded-lg bg-white shadow-lg">
                        <h3 className="text-3xl font-bold text-purple-600 mb-2">En la educacion superior</h3>
                        <p className="text-gray-600">
                        Solo el 4,6% de los estudiantes en maestrías y el 0,2% en doctorados son mujeres.
                        </p>
                    </div>
                </div>
            </section>
        </div>
        </Main>
    );
}
